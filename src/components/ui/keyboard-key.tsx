import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";

export function KeyboardKey({children, className, ...props}: HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950", className)} {...props}>
      {children}
    </div>
  )
}
