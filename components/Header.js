"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from 'react';

export const Header = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            const scrollingDown = currentScrollPos > prevScrollPos && currentScrollPos > 100;

            setVisible(!scrollingDown);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <header className={`bg-white bg-opacity-60 backdrop-filter backdrop-blur-md fixed top-0 left-0 w-full transition-transform ease-in-out duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="text-white text-center flex justify-between px-4 lg:px-8 py-4 items-center">
                    <div className="lg:hidden">
                        <button
                            data-drawer-target="default-sidebar"
                            data-drawer-toggle="default-sidebar"
                            aria-controls="default-sidebar"
                            type="button"
                            className="inline-flex bg-blue-800 p-2 mt-2 rounded-md focus:outline-none"
                        >
                            <span className="sr-only">Sidebar Navigation</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="#ffffff"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <Image
                            src="/images/lb-logo.png"
                            className=""
                            height={100}
                            width={100}
                            onClick={()=> window.location.href = '/'}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex uppercase font-medium">
                            <NavItem href="/" label="Home" />
                            <NavItem href="#about" label="About" mdHidden />
                            <NavItem href="#services" label="Services" smHidden />
                            <NavItem href="#contact" label="Contact" />
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <a href="tel:+918000682635">
                            <div className="rounded-full bg-blue-100 p-3">
                                <Image
                                    src="https://wpolive.com/html/manit-html/assets/images/telephone.svg"
                                    height={26}
                                    width={26}
                                />
                            </div>
                        </a>
                        <div className="lg:block hidden text-black ml-4">
                            <div className="flex flex-col font-medium">
                                <span className="text-sm">Helpline 24/7</span>
                                <a href="tel:+918000682635">
                                    <span className="text-md">+(91) 8000682635</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

const NavItem = ({ href, label, mdHidden, smHidden }) => (
    <li className={getNavItemClasses(mdHidden, smHidden)}>
        <a
            href={href}
            className="text-black block px-2 py-1 rounded transition duration-300 ease-in-out hover:text-blue-500 hover:underline focus:outline-none focus:text-blue-500 focus:underline"
        >
            {label}
        </a>
    </li>
);

const getNavItemClasses = (mdHidden, smHidden) =>
    ` ${mdHidden ? 'hidden md:block' : ''} ${smHidden ? 'sm:hidden lg:block' : ''} mr-4`;


export default Header;

