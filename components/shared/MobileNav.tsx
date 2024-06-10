"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="mobile_header">
      <Link href="/" className="flex-none items-center mx-3 py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={273}
          height={37}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer flex-none"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image 
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />

              <ul className="mobile_header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}
                    >
                    <Link className="header-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
        <div className="flex relative group w-full justify-end">
                            <div className="flex absolute -inset-0.5 bg-gradient-to-r from-indigo-900 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt w-52 mr-8 ml-auto"></div>
                            <Button asChild className="button relative flex w-52 mr-8 group-hover:text-red-100 transition max-w-xl duration-1000">
                                <Link href="/sign-in">Login</Link>
                            </Button> 
                        </div>
          </SignedOut>
      </nav>
    </div>
  )
}

export default MobileNav