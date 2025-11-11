'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
// import { WiDaySunny } from "react-icons/wi";
// import { VscGithubInverted } from "react-icons/vsc";
// import { BsLinkedin } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";







// // const Navbar = ({ scrollToAbout, scrollToTech, scrollToPro, scrollToCont, scrollToMain }) => {
// const Navbar = ({  }) => {
//     const [darkmode, setDarkmode] = useState(false);

//     const toggleDarkMode = () => {
//         setDarkmode(!darkmode);
//         if (!darkmode) {
//             document.documentElement.classList.add('dark')
//         } else {
//             document.documentElement.classList.remove('dark')
//         }
//     }

//     // const openLink = (url) => {
//     //     window.open('https://github.com/Niraaj10', "_blank", "noopener,noreferrer");
//     // };

//     return (
//         <>
//                     <div className='md:hidden lg:hidden fixed bottom-2 z-50 pt-10 '>
//                         <div className="flex md:hidden lg:hidden w-[90vw]  gap-5 justify-between items-center mx-6 my-2 rounded-xl p-5 cursor-pointer shadowBG dark:shadow-none backdrop-blur-3xl border border-gray-400 bg-white bg-opacity-30">
//                             {/* <div onClick={scrollToAbout}>
//                                 <FaRegUser size={23} className='text-gray-600 dark:text-[#808080] cursor-pointer'/>
//                             </div>

//                             <div onClick={scrollToPro}>
//                                 <HiOutlinePencilAlt size={25} className='text-gray-600 dark:text-[#808080] cursor-pointer'/>
//                             </div>

//                             <div onClick={scrollToMain}>
//                                 <LuHome size={25} className='text-gray-600 dark:text-[#808080] cursor-pointer'/>
//                             </div>

//                             <div onClick={scrollToTech}>
//                                 <CgDesktop size={27} className='text-gray-600 dark:text-[#808080] cursor-pointer'/>
//                             </div>

//                             <div onClick={scrollToCont}>
//                                 <LuMail size={25} className='text-gray-600 dark:text-[#808080] cursor-pointer'/>
//                             </div> */}
//                         </div>
//                     </div>

//             <div className='m-5 md:mx-10 lg:mx-10 p-5 fixed w-[91vw] md:w-[94vw] lg:w-[94vw] z-50 px-11 font-bold rounded-xl backdrop-blur-3xl bg-gray-100/10 border border-gray-100/15 dark:bg-gray-950/10 transition-colors duration-300 shadowBG dark:shadow-none '>
                    

//                 <div className='flex justify-between items-center'>

//                     {/* <div onClick={scrollToMain} className="logofont font-extrabold text-[6vw] md:text-[4vw] lg:text-[2vw] ">
//                         N10
//                     </div> */}

//                     {/* <div className="hidden md:flex lg:flex gap-3  cursor-pointer">
//                         <div onClick={scrollToAbout}>About</div>
//                         <div onClick={scrollToPro}>Projects</div>
//                         <div onClick={scrollToTech}>TechStack</div>
//                         <div onClick={scrollToCont}>Contact</div>
//                     </div> */}


//                     <div className="flex gap-3 items-center w-36">

//                         <a href="https://www.instagram.com/_.niraj10?igsh=MW10YXhxdjBybWxxaA==" target="_blank" rel="noopener noreferrer">
//                             <FaInstagram size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
//                         </a>

//                         <a href="https://github.com/Niraaj10" target="_blank" rel="noopener noreferrer">
//                             <VscGithubInverted size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
//                         </a>

//                         <a href="https://www.linkedin.com/in/niraj-alone-7231aa328/" target="_blank" rel="noopener noreferrer">
//                             <BsLinkedin size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
//                         </a>

//                         <div className='border-l-2 border-gray-400 pl-3'>
//                             <WiDaySunny size={30} className='text-gray-600 dark:text-[#808080] cursor-pointer' onClick={toggleDarkMode} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;


const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { name: 'Features', href: '#link' },
        { name: 'Solution', href: '#link' },
        { name: 'Pricing', href: '#link' },
        { name: 'About', href: '#link' },
    ]

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <div>Verito Studio</div>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeroHeader;