import {ReactNode} from "react";
import {cn} from "@/lib/utils";

type FeatureCardProps = {
  title: string,
  description: string,
  children: ReactNode
  className?: string
}

export function FeatureCard({title, description, className, children}: FeatureCardProps) {
  return (
    <section className={cn("border bg-neutral-950 p-6 rounded-3xl", className)}>
      <div className="aspect-video">
        {children}
      </div>
      <h4 className="text-2xl font-medium mt-6">{title}</h4>
      <p className="text-primary/50 mt-2 text-balance">{description}</p>
    </section>
  )
}
