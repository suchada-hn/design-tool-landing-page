import Image from "next/image";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {CustomButton} from "@/components/ui/custom-button";
import LayersLogo from "@/assets/logo.svg";

export default function SiteHeader() {
  return (
    <header className="py-4">
      <div className="container max-w-5xl max-md:px-4">
        <div className="flex justify-between border rounded-full px-4 py-2 md:pr-2 items-center">
          <Link href="/">
            <Image
              src={LayersLogo}
              alt="Layers Logo"
              width={200} height={50}
              className="h-9 md:h-11 w-fit"/>
          </Link>
          <nav className="hidden lg:flex gap-6 font-medium items-center text-primary/80">
            <Link href="#">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">FAQs</Link>
          </nav>
          <div>
            <div className={cn(
              buttonVariants({
                variant: "ghost",
                className: "-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              }))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="!size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
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

      </div>
    </header>
  )
}