'use client'
import classNames from "classnames";
import { motion, type Transition } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react"

interface ItemsProps {
	href?: string | null
	label?: string | null
	handleClick?: () => void
	icon?: ReactNode
}

interface MenuItemsProps {
	items: ItemsProps[]
}

const MENU_LAYOUT_ID = 'main-menu-selected-pill';
const PILL_TRANSITION: Transition = { type: 'spring', stiffness: 450, damping: 35 };

export function MenuItems({ items }: MenuItemsProps) {
	const path = usePathname();
	const isHome = path === '/';
	const activeIndex = isHome ? -1 : items.findIndex(item => item.href === path);
	const [hoveredItem, setHoveredItem] = useState<{ path: string; index: number } | null>(null);
	const selectedIndex = hoveredItem?.path === path ? hoveredItem.index : activeIndex;

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick, icon }, i) => {
				if (label === 'home') return null;

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
								"relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3",
								{
									"bg-transparent border border-white": isHome,
									"bg-white": !isHome
								}
							)}
						>
							{isSelected && (
								<motion.div
									className="absolute inset-0 rounded-full bg-primary"
									layoutId={MENU_LAYOUT_ID}
									transition={PILL_TRANSITION}
								/>
							)}
							<span
								className={classNames("relative z-10 cursor-pointer", {
									"text-white": isHome || isSelected,
									"text-primary": !isHome && !isSelected,
								})}
							>
								{icon ? icon : label}
							</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
