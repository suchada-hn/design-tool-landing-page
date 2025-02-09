import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";

interface KeyboardKeyProps extends HTMLAttributes<HTMLElement> {}

export function KeyboardKey({children, className, ...props}: KeyboardKeyProps) {
  return (
    <div className={cn("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950", className)} {...props}>
      {children}
    </div>
  )
}