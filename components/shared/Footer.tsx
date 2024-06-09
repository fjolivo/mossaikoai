"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-copyright">
            © 2024 Mossaiko AI. All rights reserved.
            </div> 
            <div className="footer-transformations">
                <SignedIn>
                    <ul>
                    {navLinks.slice(1, 4).map((link) => {
                        return (
                        <li key={link.route} className={`footer-nav_element`}>
                            <Link className="header-link" href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                        )
                    })}
                    </ul>
                </SignedIn>
            </div>
            <div className="footer-profile">
                <SignedIn>
                    <ul>
                    {navLinks.slice(4, 6).map((link) => {
                        return (
                        <li key={link.route} className={`footer-nav_element`}>
                            <Link className="header-link" href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                        )
                    })}
                    </ul>
                </SignedIn>
            </div>

                {/* <Link href="/" className="header-logo">
                    <Image src="/assets/images/logo-text.svg" alt="logo" width={450} height={67.3}/>
                </Link>

                <nav className="header-nav">
                    <SignedIn>
                        <ul className="header-nav_elements">
                        {navLinks.slice(0, 5).map((link) => {
                            const isActive = link.route === pathname

                            return (
                            <li key={link.route} className={`header-nav_element group ${
                                isActive ? 'bg-purple-gradient text-white p-2' : 'text-black p-1'
                            }`}>
                                <Link className="header-link" href={link.route}>
                                    <Image 
                                        src={link.icon}
                                        alt="logo"
                                        width={14}
                                        height={14}
                                        className={`${isActive && 'brightness-200'}`}
                                    />
                                    {link.label}
                                </Link>
                            </li>
                            )
                        })}
                        </ul>
 */}

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
                    {/* </SignedIn>




                    <SignedOut>
                        <div className="justify-end">
                        <Button asChild className="button flex bg-purple-gradient bg-cover w-52 mr-8">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                        </div>
                    </SignedOut>
                </nav> */}
        </div>
    </footer>
  )
}

export default Footer