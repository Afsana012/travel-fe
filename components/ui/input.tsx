import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors outline-none placeholder:text-gray-400 focus-visible:border-emerald-400 focus-visible:ring-3 focus-visible:ring-emerald-400/20 disabled:pointer-events-none disabled:bg-gray-50 disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
