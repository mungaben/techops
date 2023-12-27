
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
                            Techops
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