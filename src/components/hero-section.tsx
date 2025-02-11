"use client"

import {CustomButton} from "@/components/ui/custom-button";
import DesignExample1 from "@/assets/design-example-1.png";
import DesignExample2 from "@/assets/design-example-2.png";
import CursorYou from "@/assets/cursor-you.svg";
import {Sparkle} from "lucide-react";
import Image from "next/image";
import {Pointer} from "@/components/ui/pointer";
import {motion, useAnimate} from "framer-motion";
import {useEffect} from "react";

export function HeroSection() {

  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, {opacity: 1}, {duration: 0.5}],
      [leftDesignScope.current, {x: 0, y: 0}, {duration: 0.5}],
    ])
    leftPointerAnimate([
      [leftPointerScope.current, {opacity: 1}, {duration: 0.5}],
      [leftPointerScope.current, {x: -100, y: 0}, {duration: 0.5}],
      [leftPointerScope.current, {x: 0, y: [0, 16, 0]}, {duration: 0.5, ease: "easeInOut"}],
    ])
    rightDesignAnimate([
      [rightDesignScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
      [rightDesignScope.current, {x: 0, y: 0}, {duration: 0.5}],
    ])
    rightPointerAnimate([
      [rightPointerScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
      [rightPointerScope.current, {x: 175, y: 0}, {duration: 0.5}],
      [rightPointerScope.current, {x: 0, y: [0, 20, 0]}, {duration: 0.5}],
    ])
  }, [])

  return (
    <section className="py-24 mt-24 overflow-hidden" style={{cursor: `url(${CursorYou.src}), auto`}}>
      <section className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{opacity: 0, x: -100, y: 100}}
          drag dragSnapToOrigin={true}
          className="absolute -left-32 top-16 max-xl:hidden"
        >
          <Image src={DesignExample1} alt="Design Example 1" width={310} height={438} draggable={false}/>
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{opacity: 0, x: -100, y: 100}}
          className="absolute left-56 top-96 max-xl:hidden"
        >
          <Pointer displayName="Moussa" color="red"/>
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          drag dragSnapToOrigin={true}
          initial={{opacity: 0, x: 100, y: 100}}
          className="absolute -right-32 -top-16 max-xl:hidden"
        >
          <Image src={DesignExample2} alt="Design Example 2" width={310} height={438} draggable={false}/>
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{opacity: 0, x: 275, y: 100}}
          className="absolute right-80 -top-4 max-xl:hidden"
        >
          <Pointer displayName="Clarisse" color="pink"/>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <div
            className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950">
            <Sparkle className="size-4 mr-2"/> $7.5M seed round raised
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-medium text-center tracking-tight mt-6 text-balance max-w-2xl lg:max-w-4xl">Impactful
            design, created effortlessly</h1>
          <p className="text-center text-xl text-muted-foreground mt-8 max-w-prose text-balance">
            Design tools shouldn&apos;t slow down. Layers combines powerful features with an intuitive interface that
            keeps you
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
