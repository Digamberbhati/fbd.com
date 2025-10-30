import type React from "react"
export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 py-4">
      <div className="marquee whitespace-nowrap text-lg font-semibold text-primary">
        {children}
        <span className="mx-8">{children}</span>
      </div>
    </div>
  )
}
