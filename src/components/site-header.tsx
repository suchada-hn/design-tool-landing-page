"use client"

import Image from "next/image";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {CustomButton} from "@/components/ui/custom-button";
import LayersLogo from "@/assets/logo.svg";
import {useState} from "react";
import {X} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

const NAV_LINKS = [
  {href: "#", label: "Home"},
  {href: "#", label: "Features"},
  {href: "#", label: "Integrations"},
  {href: "#", label: "FAQs"},
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 fixed w-full top-0 z-50">
      <div className="container max-w-5xl max-md:px-4">
        <div
          className="border rounded-[27px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex justify-between px-4 py-2 md:pr-2 items-center">
            <Link href="/">
              <Image
                src={LayersLogo}
                alt="Layers Logo"
                width={200} height={50}
                className="h-9 md:h-11 w-fit"/>
            </Link>
            <nav className="hidden lg:flex gap-6 font-medium items-center">
              {NAV_LINKS.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span
                    className="text-sm text-primary/60 hover:text-primary transition duration-300">{link.label}</span>
                </Link>
              ))}
            </nav>
            <div>
              <div className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition duration-300 cursor-pointer"
                }))}
                   onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={cn("!size-6", isOpen && "hidden")}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
                <X className={cn("!size-6 text-muted-foreground", !isOpen && "hidden")}/>
                <span className="sr-only">Toggle Menu</span>
              </div>
              <div className="max-md:hidden inline-flex items-center gap-2">
                <CustomButton variant="secondary">
                  Log In
                </CustomButton>
                <CustomButton variant="primary">
                  Sign Up
                </CustomButton>
              </div>
            </div>
          </div>
          <MobileNav isOpen={isOpen}/>
        </div>
      </div>
    </header>
  )
}

function MobileNav({isOpen}: { isOpen: boolean }) {
  return (
    <section className={cn(isOpen && "px-4 pb-4", "overflow-hidden")}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 overflow-hidden"
          >
            {NAV_LINKS.map((link, index) => (
              <Link key={index} href={link.href}>
                <span>{link.label}</span>
              </Link>
            ))}
            <CustomButton variant="secondary" size="sm">
              Log In
            </CustomButton>
            <CustomButton variant="primary" size="sm">
              Sign Up
            </CustomButton>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
