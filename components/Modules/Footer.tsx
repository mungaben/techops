
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 py-6 mt-10 w-full max-w-6xl ">
            {/* <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
        
          Copyright <span> mungatech™</span>  Dev -
        </span>
        © {new Date().getFullYear()} All Rights Reserved
      </div> */}

            <div className=" w-full gap-3   flex justify-between  items-center">
                <div>
                    TechOps

                </div>
                <div className=" gap-3 hidden  md:flex">
                    <span>
                        <Link href="/">
                            AboutUs

                        </Link>
                    </span>
                    <span>
                        <Link href="/">
                            Contribute

                        </Link>

                    </span>

                </div>
                <div className=" gap-3 flex">
                    <span>
                        <Link href="/">
                            <Github size={30} className=" rounded-full border border-teal-200 p-0.5 hover:border-black/40 dark:border-slate-300/50" />

                        </Link>
                    </span>
                    <span className=" text-center flex justify-center items-center">
                        <Link href="/">
                            <Twitter size={20} className=" rounded-full border border-teal-200 p-0.5 hover:border-black/40 dark:border-slate-300/50" />

                        </Link>
                    </span>
                    <span >
                        <Link href="/">
                            <Linkedin size={30} className=" rounded-full border border-teal-200 p-0.5 hover:border-black/40 dark:border-slate-300/50" />

                        </Link>
                    </span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;