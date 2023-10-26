import Sector from '@/components/Home/Sector'
import React from 'react'
import { sectors, news } from '@/constants/home'
import ButtonArrow from '@/components/common/button/ButtonArrow'
import News from '@/components/Home/News'

const Home = () => {

    console.log(sectors)

    return (
        <main>
            <section className='relative h-[100vh] min-h-[700px]'>
                <img src='img/home/hero.png' className='absolute inset-0 h-full w-full object-cover' />
                <div className='__container flex h-full items-center relative z-10'>
                    <div className='text-white max-w-[670px] space-y-6'>
                        <h1 className='font-bold text-[40px] leading-[48px] tracking-wider font-play'>
                            CARBONEX является лидером в области фильтрационных и энергетических решений.
                        </h1>
                        <p className='text-default'>
                            Наши передовые материалы используются практически во всех отраслях промышленности и затрагивают каждый аспект современной жизни.
                        </p>
                        <a href='' className='button-white button-white-wide text-dark'>
                            КАТАЛОГ ПРОДУКЦИИ
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className='__container pt-20 text-dark'>
                    <h2 className='heading-2'>
                        Отрасли
                    </h2>
                    <div className='max-w-[780px] mx-auto text-default text-center mt-[10px]'>
                        CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы используются практически во всех отраслях промышленности.
                    </div>
                </div>
                <div className='flex justify-center gap-[110px] flex-wrap mt-9 items-center max-md:gap-[70px] max-sm:gap-[30px]'>
                    {sectors?.map((data) => <Sector data={data} key={data.id} />)}
                </div>
            </section>
            <section>
                <div className='__container pt-20'>
                    <h2 className='heading-2'>
                        Продукция
                    </h2>
                    <div className='mt-9 gap-8 grid lg:grid-cols-3 sm:grid-cols-2 '>
                        <div className='rounded-md overflow-hidden'>
                            <div className='h-[250px] relative'>
                                <div className='relative z-10 text-white sm:p-6 px-4 py-5'>
                                    <h3 className='text-accent'>Фильтры</h3>
                                    <p className='text-default pt-[10px]'>CARBONEX - является лидером в области фитрованных материалов.</p>
                                </div>
                                <img src='img/home/production/01.png' className='absolute left-0 top-0 h-full w-full object-cover' />
                            </div>
                            <ButtonArrow caption={'Перейти в каталог'} />
                        </div>
                        <div className='rounded-md overflow-hidden'>
                            <div className='h-[250px] relative'>
                                <div className='relative z-10 text-white sm:p-6 px-4 py-5'>
                                    <h3 className='text-accent'>Фильтры</h3>
                                    <p className='text-default pt-[10px]'>CARBONEX - является лидером в области фитрованных материалов.</p>
                                </div>
                                <img src='img/home/production/02.png' className='absolute left-0 top-0 h-full w-full object-cover' />
                            </div>
                            <ButtonArrow caption={'Перейти в каталог'} />
                        </div>
                        <div className='rounded-md overflow-hidden'>
                            <div className='h-[250px] relative'>
                                <div className='relative z-10 text-white sm:p-6 px-4 py-5'>
                                    <h3 className='text-accent'>Фильтры</h3>
                                    <p className='text-default pt-[10px]'>CARBONEX - является лидером в области фитрованных материалов.</p>
                                </div>
                                <img src='img/home/production/03.png' className='absolute left-0 top-0 h-full w-full object-cover' />
                            </div>
                            <ButtonArrow caption={'Перейти в каталог'} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className='heading-2 uppercase pt-20'>
                    Преимущества
                </h2>
                <div className='mt-9 relative'>
                    <img src='img/home/advantage/bg.png' className='absolute inset-0 object-cover h-full w-full' />
                    <div className='__container pt-20 relative z-10 py-[55px] gap-8 grid lg:grid-cols-3'>
                        <div className='text-white'>
                            <div className='flex gap-3 items-center max-lg:justify-center'>
                                <img src='img/home/advantage/01.svg' className='h-9 w-9' />
                                <h3 className='text-accent uppercase max-lg:text-center'>Собственное производство</h3>
                            </div>
                            <p className='pt-3 text-default max-lg:text-center'>CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы </p>
                        </div>
                        <div className='text-white'>
                            <div className='flex gap-3 items-center max-lg:justify-center'>
                                <img src='img/home/advantage/02.svg' className='h-9 w-9' />
                                <h3 className='text-accent uppercase max-lg:text-center'>Срок изготовления</h3>
                            </div>
                            <p className='pt-3 text-default max-lg:text-center'>CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы используются практически</p>
                        </div>
                        <div className='text-white'>
                            <div className='flex gap-3 items-center max-lg:justify-center'>
                                <img src='img/home/advantage/03.svg' className='h-9 w-9' />
                                <h3 className='text-accent uppercase max-lg:text-center'>Отгрузка товара</h3>
                            </div>
                            <p className='pt-3 text-default max-lg:text-center'>CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы используются</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='__container pt-20'>
                    <h2 className='heading-2'>О компании</h2>
                    <div className='mt-9 grid lg:grid-cols-[2fr_3fr] items-center gap-8'>
                        <p className='max-lg:order-2'>
                            Имеется спорная точка зрения, гласящая примерно следующее: действия представителей оппозиции набирают популярность среди определенных слоев населения, а значит, должны быть заблокированы в рамках своих собственных рациональных ограничений!
                            <br /><br />Сложно сказать, почему активно развивающиеся страны третьего мира формируют глобальную экономическую сеть и при этом — ассоциативно распределены по отраслям.
                            <br /><br />Однозначно, сделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали.
                        </p>
                        <div className='relative sm:mt-[30px] sm:mr-[30px] mt-[10px] mr-[10px]'>
                            <img src='img/home/about.png' className='relative z-10 sm:h-[392px] aspect-video w-full rounded-md  object-cover' />
                            <div className='bg-lightBlue opacity-20 rounded-md absolute sm:-top-[30px] sm:-right-[30px] -top-[10px] -right-[10px] h-full w-full'></div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='__container py-20'>
                    <h2 className='heading-2'>Новости</h2>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-9'>
                        {news?.map((data) => <News img={data.img} title={data.title} desc={data.desc} link={data.link} /> )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home