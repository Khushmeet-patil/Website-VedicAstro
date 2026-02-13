"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState("home")

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Astrologers", href: "#astrologers" },
        { name: "Testimonials", href: "#testimonials" },
    ]

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href)
            if (section) observer.observe(section)
        })

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/Logo.svg"
                        alt="VedicAstro Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                    />
                    <Image
                        src="/VedicAstro-text.png"
                        alt="VedicAstro"
                        width={150}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full hover:text-secondary",
                                activeSection === link.href.substring(1)
                                    ? "text-secondary after:w-full"
                                    : "text-muted-foreground after:w-0"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
                        Get App
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-10">
                                <Link href="/" className="flex items-center gap-2 mb-4 group">
                                    <Image
                                        src="/Logo.svg"
                                        alt="VedicAstro Logo"
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <Image
                                        src="/VedicAstro-text.png"
                                        alt="VedicAstro"
                                        width={150}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                    />
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-secondary",
                                            activeSection === link.href.substring(1)
                                                ? "text-secondary"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-3 mt-4">
                                    <Button className="w-full justify-center bg-secondary hover:bg-secondary/90 text-white">
                                        Get App
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
