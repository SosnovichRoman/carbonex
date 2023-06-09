import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        toggle ? document.documentElement.classList.add('lock') : document.documentElement.classList.remove('lock');
    },)

    return (
        <header className={`header fixed h-[100px] top-0 left-0 right-0 z-50 bg-white shadow-[0px_4px_10px_0px_#00000040]`}>
            <div className='header__container flex justify-between items-center h-full'>
                <Link href='/' className='flex items-center' >
                    <img className='h-[50px]' src="img/header/logo.svg" alt='logo' />
                    <p className='ml-3 text-lg tracking-wider font-play'>CARBONEX</p>
                </Link>
                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-6'>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Главная</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Отрасли</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Продукция</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>О компании</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Новости</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Контакты</Link></li>
                    </ul>
                </nav>
                <button className={`icon-menu md:hidden ${toggle ? "menu-open" : ""}`} onClick={() => setToggle(!toggle)}><span></span></button>

                <div className='space-x-[50px] flex'>
                    <div className='space-y-1 border-b-[1px] pb-1 border-b-[#808080] border-dashed'>
                        <a href='tel:+7 (981) 843-88-04' className='space-x-3 flex items-center'>
                            <img src='img/icons/phone.svg' className='h-6 w-6' />
                            <p className='leading-[22px]'>+7 (981) 843-88-04</p>
                        </a>
                        <p className='text-[#808080]'>Позвонить менеджеру</p>
                    </div>
                    <a href='' className='button-white'>
                        ОСТАВИТЬ ЗАЯВКУ
                    </a>
                </div>

                <nav className={`md:hidden fixed z-[1] overflow-auto overflow-x-hidden left-0
                  w-full h-full bg-slate-100 p-8 pt-20 transition-all duration-300 ease-ease ${toggle ? "top-0" : "-top-full"}`}>
                    <ul className='flex items-center gap-6'>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Главная</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Отрасли</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Продукция</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>О компании</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Новости</Link></li>
                        <li className='text-base hover:underline'><Link onClick={() => setToggle(false)} href='/'>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

//     & __body {
//     position: fixed;
//     z - index: 1;
//     overflow: auto;
//     overflow - x: hidden;
//     left: 0;
//     top: -100 %;
//     width: 100 %;
//     height: 100 %;
//     //background-color: $headerBackgroundColor;
//     padding: 100px 30px 30px 30px;
//     transition: all 0.3s ease;
// }