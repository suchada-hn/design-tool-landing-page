"use client"

import {Tag} from "@/components/ui/tag";
import {useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";

const argument = " You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves. "
const words = argument.split(" ")

export function IntroductionSection() {
  const scrollTarget = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({target: scrollTarget, offset: ["start end", "end end"]})

  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length -1] )

  useEffect(() => {
    wordIndex.on("change", (value) => {
      setCurrentWord(value)
    })
  }, [wordIndex])

  return (
    <section className="py-24">
      <div className="container">
        <div className="sticky top-40 md:top-48 flex flex-col items-center justify-center">
          <Tag>Introducing Layers</Tag>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 text-pretty max-w-5xl lg:max-w-7xl">
            <span>Your creative process deserves better.</span>
            <span className="text-primary/15">
              {words.map((word, index) => (
                <span key={index} className={cn(index < currentWord && "text-white transition duration-500")}>
                  {word + " "}
                </span>
              ))}
            </span>
            <span className="text-lime-400">That&apos;s why we built Layers.</span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  )
}
