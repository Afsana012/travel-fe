import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors outline-none placeholder:text-gray-400 focus-visible:border-emerald-400 focus-visible:ring-3 focus-visible:ring-emerald-400/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
