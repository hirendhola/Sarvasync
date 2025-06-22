import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("w-full space-y-3", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group rounded-lg border bg-card shadow-xs transition-all duration-300 ease-in-out hover:bg-secondary/50 hover:shadow-md focus-within:border-primary/50 data-[state=open]:border-primary/30 data-[state=open]:bg-secondary/30",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-card-foreground transition-colors duration-300 focus-visible:outline-none data-[state=open]:text-primary",
          className
        )}
        {...props}
      >
        {children}
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary transition-all duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:bg-primary">
          <ChevronDownIcon className="h-4 w-4 text-secondary-foreground transition-colors duration-300 group-data-[state=open]:text-primary-foreground" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn("px-6 pb-5 pt-1 leading-relaxed text-muted-foreground", className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }