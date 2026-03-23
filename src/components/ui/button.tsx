import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-green-900 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-green-400 text-green-900 hover:bg-green-500 active:bg-green-600 disabled:bg-grey-100 disabled:text-grey-300",
        secondary:
          "bg-green-100 text-green-900 hover:bg-green-200 active:bg-green-300 disabled:bg-green-50 disabled:text-grey-300",
        tertiary:
          "bg-grey-100 text-grey-900 hover:bg-grey-200 active:bg-grey-300 disabled:bg-grey-100 disabled:text-grey-300",
        outline:
          "border border-grey-200 text-grey-900 hover:bg-grey-100 hover:border-grey-300 active:bg-grey-200 active:border-grey-300 disabled:border-grey-100 disabled:text-grey-300",
        ghost:
          "underline underline-offset-4 text-green-900 hover:text-grey-900 active:bg-grey-100 active:text-grey-900 disabled:text-grey-300 disabled:no-underline",
        danger:
          "border border-danger-500 text-danger-500 hover:bg-danger-600 hover:text-white hover:border-danger-600 active:bg-danger-700 active:text-white active:border-danger-700 disabled:border-danger-100 disabled:text-danger-100 focus-visible:ring-danger-500 focus-visible:ring-offset-2",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-full px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
