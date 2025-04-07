'use client'
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSubMenuContext } from "@/app/(app)/context/submenu";

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
	const primaryColor = 'hsl(var(--primary))';
	const neutralLightColor = 'hsl(var(--neutral-light-1))';
	const whiteColor = 'white';

	const { activeSubMenu, beforeSubMenu, setBeforeSubMenu } = useSubMenuContext();

	const [store, setStore] = useState({
		before: beforeSubMenu,
		selected: activeSubMenu,
		activeColor: primaryColor,
	});

	useEffect(() => {
		const currentIndex = items.findIndex(item => item.href === path);
		if (currentIndex !== -1) {
			setStore({ before: currentIndex, selected: currentIndex, activeColor: primaryColor });
			setBeforeSubMenu && setBeforeSubMenu(currentIndex);
		}
	}, [path, items, setBeforeSubMenu]);

	const handleMouseEnter = (index: number) => {
		setStore(prev => ({
			...prev,
			selected: index,
		}));
	};

	const handleMouseLeave = () => {
		setStore(prev => ({
			...prev,
			selected: prev.before,
		}));
	};

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick }, i) => {
				const isSelected = i === store.selected;
				const initialColor = isSelected ? neutralLightColor : whiteColor;
				const animateColor = isSelected ? primaryColor : whiteColor;
				const textColor = isSelected ? whiteColor : primaryColor;

				return (
					<Link
						key={href}
						href={href!}
						onClick={handleClick}
						className="relative font-sans text-xs font-semibold uppercase"
						onPointerEnter={() => handleMouseEnter(i)}
						onPointerOut={handleMouseLeave}
					>
						<motion.div
							className="relative px-3 py-2 m-0 mr-3 font-sans bg-white rounded-full cursor-pointer"
							style={{ zIndex: isSelected ? 1000 : 999 }}
							initial={{ backgroundColor: initialColor }}
							animate={{ backgroundColor: animateColor }}
							onTap={() => setStore(prev => ({ ...prev, before: i, selected: i }))}
							onPointerEnter={() => handleMouseEnter(i)}
							onPointerOut={handleMouseLeave}
						>
							{isSelected && (
								<motion.div
									className="absolute top-0 left-0 w-full h-full rounded-full"
									layoutId="selected"
									initial={{ backgroundColor: initialColor }}
									animate={{ backgroundColor: animateColor }}
								/>
							)}
							<motion.p
								className={classNames("relative z-10 cursor-pointer", {
									"text-white": isSelected,
									"text-primary": !isSelected,
								})}
								initial={{ color: textColor }}
								animate={{ color: textColor }}
								onPointerEnter={() => handleMouseEnter(i)}
								onPointerOut={handleMouseLeave}
							>{label}</motion.p>
						</motion.div>
					</Link>
				);
			})}
		</div>
	);
}