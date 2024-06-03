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
    <header className="header shadow-2xl">
        <div className="header-container">
            <div className=" flex flex-row gap-4 items-center">
                <Link href="/" className="header-logo">
                    <Image src="/assets/images/logo-text.svg" alt="logo" width={300} height={200}  />
                </Link>

                <nav className="header-nav">
                    <SignedIn>
                        <ul className="header-nav_elements">
                        {navLinks.slice(0, 5).map((link) => {
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
                        <Button asChild className="button bg-purple-gradient bg-cover max-w-xs flex justify-end ">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header