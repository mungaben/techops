
import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    return (
        <header className="h-15 w-full   top-0    shadow-sm dark:border-gray-700 flex justify-center     ">
            <div className="container bg-background/25  top-0 fixed  justify-between items-center  px-4 sm:px-6 py-4 flex  ">
                {/* Logo */}
                <div>
                    <h2 className='font-bold text-3xl  text-gray-900 dark:text-white'>
                        <Link href="/" >
                            <span className=''>
                                t
                            </span>
                            <span className=" subpixel-antialiased text-muted  text-3xl uppercase text-yellow-500 bg-[url('/Img/TechopsUnderline.svg')] bg-no-repeat bg-bottom" >
                                e
                            </span>
                            <span>
                                ch
                            </span>
                            <span className=' capitalize'>
                                Ops
                            </span>


                        </Link>
                    </h2>

                </div>

                <div className=' '>
                    <ThemeSwitcher />
                </div>


            </div>
        </header>
    )
}

export default Navbar