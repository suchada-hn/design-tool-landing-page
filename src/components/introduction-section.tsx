import {Tag} from "@/components/ui/tag";

const argument = " You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves. "

export function IntroductionSection() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Introducing Layers</Tag>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 text-pretty max-w-5xl lg:max-w-7xl">
          <span>Your creative process deserves better.</span>
          <span className="text-primary/15">{argument}</span>
          <span className="text-lime-400">That's why we built Layers.</span>
        </div>
      </div>
    </section>
  )
}