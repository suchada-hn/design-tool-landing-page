import {ButtonHTMLAttributes} from "react";
import {cn} from "@/lib/utils";
import {cva} from "class-variance-authority";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
  size?: "sm"
}

const buttonVariants = cva(
  "border h-12 rounded-full px-6 font-medium text-sm hover:bg-muted transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 hover:bg-lime-400/80 text-neutral-950 border-none shadow focus:outline-none",
        secondary: "border-muted",
      },
      size: {
        sm: "h-10"
      }
    }
  }
)

export function CustomButton({variant, className, children, size, ...props}: CustomButtonProps) {
  return (
    <button className={cn(className, buttonVariants({variant, size}))} {...props}>
      {children}
    </button>
  )
}
