"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
        <div className="header-container">
                <Link href="/" className="header-logo">
                    <Image src="/assets/images/logo-text.svg" alt="logo" width={300} height={67.3}/>
                </Link>

                <nav className="header-nav">
                    <SignedIn>
                        <ul className="header-nav_elements">
                        {navLinks.slice(0, 5).map((link) => {
                            const isActive = link.route === pathname

                            return (
                            <li key={link.route} className={`header-nav_element group ${
                                isActive ? ' text-indigo-900 underline underline-offset-6' : 'text-indigo-900 p-1 opacity-70 hover:opacity-100 hover:underline-offset-4'
                                // isActive ? 'bg-purple-gradient text-white p-2' : 'text-black p-1'
                                // isActive ? 'bg-[#2646bc5d] text-black p-2' : 'text-black p-1'
                            }`}>
                                <Link className="header-link" href={link.route}>
                                    <Image 
                                        src={link.icon}
                                        alt="logo"
                                        width={14}
                                        height={14}
                                        className={`${isActive && 'fill-red-700'}`}
                                    />
                                    {link.label}
                                </Link>
                            </li>
                            )
                        })}
                        </ul>


                        {/* <ul className="header-nav_elements">
                        {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname

                            return (
                            <li key={link.route} className={`header-nav_element group ${
                                isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                            }`}>
                                <Link className="header-link" href={link.route}>
                                <Image 
                                    src={link.icon}
                                    alt="logo"
                                    width={24}
                                    height={24}
                                    className={`${isActive && 'brightness-200'}`}
                                />
                                {link.label}
                                </Link>
                            </li>
                            )
                        })}

                        <li className="flex-center cursor-pointer gap-2 p-4">
                            <UserButton afterSignOutUrl='/' showName />
                        </li>
                        </ul> */}
                    </SignedIn>




                    <SignedOut>
                        <div className="flex w-full justify-end">
                        <Button asChild className="button flex bg-gradient-to-r from-[#333366] via-[#333366] via-80% to-[#ff3300] w-52 mr-8">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                        </div>
                    </SignedOut>
                </nav>
        </div>
    </header>
  )
}

export default Header