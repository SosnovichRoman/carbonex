import React from 'react'

const Sector = ({data, ...props}) => {

  return (
    <div className='flex flex-col items-center gap-[10px] duration-300 ease-ease hover:text-lightBlue'>
        <img src={data.img} />
        <h3 className='text-center heading-3 capitalize'>
            {data.title}
        </h3>
        <a href={data.link} className='link-underline'>
            Перейти
        </a>
    </div>
  )
}

export default Sector