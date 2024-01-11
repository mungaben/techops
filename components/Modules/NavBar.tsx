"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { usePathname, useRouter } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Navbar = () => {


    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latestScrollY) => {
        console.log(latestScrollY);
        // pravious
        const pravious = scrollY.getPrevious();

        console.log("previous", pravious);
        console.log("latest", latestScrollY);

        if (latestScrollY > pravious && latestScrollY > 100) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });
    return (
        <header className="h-15 w-full   top-0 z-50     shadow-sm dark:border-gray-700 flex justify-center     ">
            <motion.div variants={{
                hidden: { opacity: 0, y: -100, display: "none" },
                visible: { opacity: 1, y: 0 },
            }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex-row justify-between z-50 overflow-hidden fixed w-full md:flex shadow-md border-none border-gray-200 ">
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

                <div className=' flex items-center '>
                    <ThemeSwitcher />
                </div>
            </motion.div>
        </header>
    )
}

export default Navbar