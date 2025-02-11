import logo from "@/assets/logo.svg"
import Image from "next/image"
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Star} from "lucide-react";
import {cn} from "@/lib/utils";

export default function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="container max-w-6xl py-6">
          <section className="flex max-md:flex-col max-md:gap-4 items-center justify-between">
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
                Privacy
              </p>
              <p
                className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
                Terms & Conditions
              </p>
            </nav>
          </section>
        </div>
      </footer>
      <section className="bg-neutral-950 border-t-2 p-4">
        <div className="container max-w-6xl flex max-md:flex-col max-md:gap-4 items-center justify-between">
          <div className="text-sm text-muted-foreground max-md:text-center max-md:text-balance">
            Build by <a href="https://github.com/MrInspection" target="_blank" rel="noreferrer" className="underline underline-offset-4">Moussa</a>.
            The source is available on <a href="https://github.com/MrInspection/design-tool-landing-page" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub</a>.
          </div>
          <div className="max-md:hidden">
            <Link
              href="https://github.com/MrInspection/design-tool-landing-page"
              target="_blank" rel="noreferrer" className={cn(buttonVariants({variant: "outline", size: "sm"}))}
            >
              <Star className="size-4 fill-lime-400 stroke-lime-400" /> Star on GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}