import { cn } from "@/lib/utils";
import {HTMLAttributes} from "react";

export function Tag({className, children, ...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full items-center uppercase", className)} {...props}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  )
}
