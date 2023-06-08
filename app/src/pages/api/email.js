const nodemailer = require('nodemailer')
const formidable = require('formidable');

export default function handler(req, res) {

    try {
        const transporter = new nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,

            secure: false,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_FROM_PASS,
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            },
        });

        const mailer = (message) => {
            transporter.sendMail(message, (err, info) => {
                if (err) res.status(400).send(JSON.stringify({ message: "Error" }))
                res.status(200).send(JSON.stringify({ message: "Ok" }))
            })
        }

        var form = formidable({ multiples: true });
        form.parse(req, (err, fields, files) => {
            if(err){
                console.log(err)
            }
            console.log(fields)
            console.log(files)

            if (fields.event == "short") {
                const message = {
                    text: `Заказали обратный звонок.
                            Имя: ${fields.name}, Телефон: ${fields.phone_number}`,
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_TO,
                    subject: 'Webspace обратный звонок',
                }
                mailer(message);
            }
            else if (fields.event == "command") {
                const message = {
                    text: `Хочет в комманду.
                            Имя: ${fields.name}, Телефон: ${fields.phone_number}`,
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_TO,
                    subject: 'Webspace комманда',
                }
                mailer(message);
            }
            else {
                const message = {
                    text: `Заказали обсуждение проекта.
                    Имя: ${fields.name},
                    Компания ${fields.company_name},
                    Телефон: ${fields.phone_number},
                    Почта: ${fields.email},
                    Описание: ${fields.description}
                    `,
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_TO,
                    subject: 'Webspace проект'
                }

                if(files.file) message.attachments = [{
                    filename: files?.file?.originalFilename,
                    path: files?.file?.filepath // stream this file
                }]
                mailer(message);
            }
            res.status(200).send(JSON.stringify({ message: "Ok" }))

        })
    }
    catch (e) {
        console.log(e)
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }
}

export const config = {
    api: {
        bodyParser: false,
        responseLimit: false,
        requestLimit: '50mb'
    },
};