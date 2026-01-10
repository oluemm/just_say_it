import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = (
	{ variant = "default", size = "default", className = "" }:
		{ variant?: "default" | "outline" | "ghost" | "link", size?: "default" | "sm" | "lg" | "icon", className?: string }
) => {
	const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"

	const variants = {
		default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
		outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline",
	}

	const sizes = {
		default: "h-9 px-4 py-2",
		sm: "h-8 rounded-md px-3 text-xs",
		lg: "h-10 rounded-md px-8",
		icon: "h-9 w-9",
	}

	return cn(baseStyles, variants[variant], sizes[size], className)
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost" | "link"
	size?: "default" | "sm" | "lg" | "icon"
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
		// Basic slot behavior: if asChild is true, we should merge props with the child.
		// For now, let's ignore asChild optimization to keep it simple without @radix-ui/react-slot
		// If the user uses asChild, we might produce a wrapper or just warn.
		// Given the props, standard HTML button is safest.

		return (
			<button
				className={buttonVariants({ variant, size, className })}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
