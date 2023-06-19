import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const breadcumbVariants = cva(
	"inline-flex text-xs px-8 py-6 w-full",
	{
		variants: {
			variant: {
				default: "bg-white text-neutral-dark-2",
				secondary: "bg-neutral-light-1",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface BreadcumbProps
	extends
	VariantProps<typeof breadcumbVariants> {
	className?: String;
	children: React.ReactNode
}

const Breadcumb = React.forwardRef<React.ReactNode, BreadcumbProps>(
	({ className, variant, ...props }) => {
		return (
			<div
				className={breadcumbVariants({ variant, className })}
				{...props}
			/>
		)
	}
)
Breadcumb.displayName = "Breadcumb"

export { Breadcumb, breadcumbVariants }
