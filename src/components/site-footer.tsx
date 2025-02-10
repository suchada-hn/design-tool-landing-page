import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container max-w-6xl py-6">
        <section className="flex max-lg:flex-col max-lg:gap-4 items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Layers Logo" className="h-10 w-auto"/>
          </Link>
          <nav className="flex items-center gap-6">
            <p
              className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
              Contact
            </p>
            <p
              className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
              Privacy Policy
            </p>
            <p
              className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
              Terms & Conditions
            </p>
            <p
              className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
              Docs
            </p>
          </nav>
        </section>
      </div>
    </footer>
  )
}