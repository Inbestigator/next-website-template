import { cn } from "@/lib/utils"

export default function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("container grid w-full gap-4", className)}>
      {children}
    </div>
  )
}
