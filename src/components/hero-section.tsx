import {CustomButton} from "@/components/ui/custom-button";
import DesignExample1 from "@/assets/design-example-1.png";
import DesignExample2 from "@/assets/design-example-2.png";
import {Sparkle} from "lucide-react";
import Image from "next/image";
import {Pointer} from "@/components/ui/pointer";

export function HeroSection() {
  return (
    <section className="py-24 overflow-hidden">
      <section className="container relative">
        <div className="absolute -left-32 top-16 max-xl:hidden">
          <Image src={DesignExample1} alt="Design Example 1" width={310} height={438}/>
        </div>
        <div className="absolute -right-32 -top-16 max-xl:hidden">
          <Image src={DesignExample2} alt="Design Example 2" width={310} height={438}/>
        </div>
        <div className="absolute left-56 top-96 max-xl:hidden">
          <Pointer displayName="Moussa" color="red"/>
        </div>
        <div className="absolute right-80 -top-4 max-xl:hidden">
          <Pointer displayName="Clarisse" color="pink"/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div
            className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950">
            <Sparkle className="size-4 mr-2"/> $7.5M seed round raised
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-medium text-center tracking-tight mt-6 text-balance max-w-2xl lg:max-w-4xl">Impactful
            design, created effortlessly</h1>
          <p className="text-center text-xl text-muted-foreground mt-8 max-w-prose text-balance">
            Design tools shouldn&apos;t slow down. Layers combines powerful features with an intuitive interface that keeps you
            in your creative flow.
          </p>
          <form className="flex items-center justify-between gap-2 border rounded-full p-2 mt-8 max-w-lg">
            <input type="text" placeholder="Enter your email"
                   className="bg-transparent px-4 focus:outline-none md:flex-1"/>
            <CustomButton variant="primary" className="whitespace-nowrap" type="submit" size="sm">
              Sign Up
            </CustomButton>
          </form>
        </div>
      </section>
    </section>
  )
}
