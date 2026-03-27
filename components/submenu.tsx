'use client'
import classNames from "classnames";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react"

interface ItemsProps {
	href?: string | null
	label?: string | null
	handleClick?: () => void
}

interface SubMenuItemsProps {
	items: ItemsProps[]
}

export function SubMenuItems({ items }: SubMenuItemsProps) {
	const path = usePathname();
	const activeIndex = items.findIndex(item => item.href === path);
	const [hoveredItem, setHoveredItem] = useState<{ path: string; index: number } | null>(null);
	const selectedIndex = hoveredItem?.path === path ? hoveredItem.index : activeIndex;

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick }, i) => {
				const isSelected = i === selectedIndex;

				return (
					<Link
						key={href}
						href={href!}
						onClick={handleClick}
						className="relative font-sans text-xs font-semibold uppercase"
						onPointerEnter={() => setHoveredItem({ path, index: i })}
						onPointerLeave={() => setHoveredItem(null)}
						aria-current={isSelected ? 'page' : undefined}
					>
						<div
							className={classNames(
								"relative px-3 py-2 m-0 mr-3 font-sans rounded-full cursor-pointer transition-colors duration-200",
								{
									"bg-primary": isSelected,
									"bg-white": !isSelected,
								}
							)}
						>
							<p
								className={classNames("relative z-10 cursor-pointer transition-colors duration-200", {
									"text-white": isSelected,
									"text-primary": !isSelected,
								})}
							>{label}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
