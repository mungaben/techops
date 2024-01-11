"use client";



import React, { useState } from 'react'
import SpinningButton from '../Modules/SpinningButton'
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { set } from 'sanity';

const LandingText = () => {
    const [MouseEnter, setMouseEnter] = useState(false)
    const [ref, inView] = useInView({
        threshold: [0.2, 0.5, 0.7, 0.9],
        triggerOnce: false,
        delay: 100,

    });



    const MouseEntered = () => {

        setMouseEnter(true)
    }
    const MouseLeft = () => {
        setMouseEnter(false)
    }
    return (
        <div className=' w-full flex flex-col justify-center items-center gap-1'>
            <div className={cn(inView ? "0 " : "-mt-100")}

                style={{
                    opacity: inView ? 1 : 0.09,
                    transition: 'opacity 0.3s ease-in-out 0.1s',
                }}
            >
                <h2 ref={ref} className={cn(' text-foreground  gap-2 max-w-full overflow-hidden text-center text-3xl font-black tracking-normal sm:text-5xl lg:text-7xl/[40px] transition-all delay-200 ease-in-out duration-700', inView && " text-teal-500/95 lg:text-7xl/[70px]  transition-all ease-out delay-300 duration-700")} >
                    Discover the most
                    <strong className="p-0.5 bg-[url('/Img/TechopsUnderline.svg')]  bg-no-repeat bg-bottom m-2 ease-in-out transition-all delay-700 duration-700 ">
                        vibrant
                    </strong>

                    and engaged tech communities

                    <span className='ease-in-out transition-all delay-700 duration-700 hover:text-red-500/20 '>.</span>
                </h2>
            </div>
            <div onMouseEnter={MouseEntered}
                onMouseLeave={MouseLeft}
            >
                <h1 className='mx-auto max-w-full overflow-hidden  md:text-4xl   sm:text-2xl lg:max-w-screen-md text-slate-400  p-2 text-center font-bold  from-yellow-500 hover:from-yellow-400 via-stone-500 to-yellow-200 bg-gradient-to-r bg-clip-text text-transparent '>
                    Find your next meet<span >{MouseEnter ? "ing" : "up"}</span>.
                </h1>
            </div>
            <div className=' mt-5'>
                <SpinningButton text='Join Techops' />
            </div>
        </div>
    )
}

export default LandingText