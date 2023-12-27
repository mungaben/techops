import React from 'react'
import SpinningButton from '../Modules/SpinningButton'

const LandingText = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center gap-3'>
            <div>
                <h2 className=' gap-5 max-w-full overflow-hidden text-center text-4xl font-black tracking-normal sm:text-5xl lg:text-7xl/[90px]  '>
                    Discover the most
                    <strong className="p-0.5 bg-[url('/Img/TechopsUnderline.svg')] bg-no-repeat bg-bottom m-2 ease-in-out transition-all delay-700 duration-700 ">
                        vibrant
                    </strong>


                    and engaged tech communities

                    <span className='ease-in-out transition-all delay-700 duration-700 hover:text-red-500/20 '>.</span>
                </h2>
            </div>
            <div>
                <h1 className='mx-auto max-w-full overflow-hidden  md:text-4xl   sm:text-2xl lg:max-w-screen-md text-slate-400  p-4 text-center font-bold from-black hover:from-slate-400 via-stone-500 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent '>
                    Find your next meetup.
                </h1>
            </div>
            <div className=' mt-10'>
                <SpinningButton text='Join Techops' />
            </div>
        </div>
    )
}

export default LandingText