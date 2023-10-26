import React from 'react'
import ButtonArrow from '../common/button/ButtonArrow'

const News = ({img, title, desc, link}) => {
  return (
    <article className='space-y-6'>
        <img src={img} className='h-[260px] w-full rounded-md object-cover' />
        <div className='text-dark'>
            <h3 className='text-accent'>{title}</h3>
            <p className='pt-[10px]'>{desc}</p>
        </div>
        <ButtonArrow caption={'Подробнее'} link={link} className='rounded-md overflow-hidden' />
    </article>
  )
}

export default News