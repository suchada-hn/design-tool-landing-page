"use client"

import {Tag} from "@/components/ui/tag";
import {FeatureCard} from "@/components/ui/feature-card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {AvatarImage} from "@radix-ui/react-avatar";
import {KeyboardKey} from "@/components/ui/keyboard-key";

const FEATURES = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides"
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Features</Tag>
        <h1 className="text-6xl font-medium text-center mt-6 max-w-2xl">
          Where great powers meet <span className="text-lime-400">simplicity</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center w-full h-full">
              <Avatar className="size-20 border-4 border-blue-500 p-1 bg-background">
                <AvatarImage
                  src="/images/avatar-florence-shaw.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>FS</AvatarFallback>
              </Avatar>
              <Avatar className="size-20 border-4 border-indigo-500 p-1 bg-background -ml-6">
                <AvatarImage
                  src="/images/avatar-lula-meyers.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <Avatar className="size-20 border-4 border-yellow-500 p-1 bg-background -ml-6">
                <AvatarImage
                  src="/images/avatar-ashwin-santiago.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar className="size-20 border-4 border-pink-500 p-1 bg-background -ml-6">
                <AvatarImage
                  src="/images/avatar-owen-garcia.jpg"
                  className="rounded-full"
                />
                <AvatarFallback>FS</AvatarFallback>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center w-full h-full">
              <p className="text-4xl font-extrabold text-foreground/20 group-hover:text-foreground/10 transition duration-500 text-center">
                We&apos;ve achieved {" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incredible</span>
                  <video
                    src="/images/gif-incredible.mp4"
                    autoPlay loop muted playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  />
                </span> {" "}
                growth this year.
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center w-full h-full gap-4">
              <KeyboardKey className="w-28">shift</KeyboardKey>
              <KeyboardKey>alt</KeyboardKey>
              <KeyboardKey>C</KeyboardKey>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center xl:max-w-screen-md">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-900 border inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl items-center justify-center gap-3 hover:scale-105 transition duration-500 group cursor-pointer"
            >
              <span className="bg-lime-400 text-background size-5 rounded-full inline-flex items-center justify-center group-hover:rotate-45 transition duration-500">&#10038;</span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
