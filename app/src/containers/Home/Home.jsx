import Sector from '@/components/Home/Sector'
import React from 'react'
import { sectors } from '@/constants/home'

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
        </main>
    )
}

export default Home