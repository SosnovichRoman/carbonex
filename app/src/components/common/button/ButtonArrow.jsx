import React from 'react'

const ButtonArrow = ({caption, link, className}) => {
    return (
        <a href={link} className={`sm:h-12 h-10 flex bg-lightBlue text-white ${className}`}>
            <div className='text-button uppercase grow flex justify-center items-center'>
                {caption}
            </div>
            <div className='h-full px-4 bg-darkBlue flex items-center justify-center'>
                <img src='img/icons/arrow-right.svg' />
            </div>
        </a>
    )
}

export default ButtonArrow