'use client'
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useMenuContext } from "@/app/(app)/context/menu";


interface ItemsProps {
	href?: string | null
	label?: string | null
	handleClick?: () => void
	icon?: JSX.Element
}

interface MenuItemsProps {
	items: ItemsProps[]
}


export function MenuItems({ items }: MenuItemsProps) {
	const path = usePathname();
	const isHome = path === '/';
	const primaryColor = 'hsl(var(--primary))';
	const neutralLightColor = 'hsl(var(--neutral-light-1))';
	const whiteColor = 'white';
	const transparentColor = 'transparent';

	const { active, before, setBefore } = useMenuContext();

	const [store, setStore] = useState({
		before: before,
		selected: active,
		activeColor: primaryColor,
	});

	useEffect(() => {
		if (isHome) {
			setStore({ before: -1, selected: -1, activeColor: primaryColor });
			setBefore && setBefore(-1);
		} else {
			const currentIndex = items.findIndex(item => item.href === path);
			if (currentIndex !== -1) {
				setStore({ before: currentIndex, selected: currentIndex, activeColor: primaryColor });
				setBefore && setBefore(currentIndex);
			}
		}
	}, [path, isHome, items, setBefore]);

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
			{items.map(({ label, href, handleClick, icon }, i) => {
				if (label === 'home') return null;

				const isSelected = i === store.selected;
				const initialColor = isHome ? transparentColor : (isSelected ? neutralLightColor : whiteColor);
				const animateColor = isHome ? (isSelected ? primaryColor : transparentColor) : (isSelected ? primaryColor : whiteColor);
				const textColor = isHome ? whiteColor : (isSelected ? whiteColor : primaryColor);

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
							className={classNames(
								"relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3",
								{
									"bg-transparent border border-white": isHome,
									"bg-white": !isHome
								}
							)}
							style={{ zIndex: isSelected ? 1000 : 999 }}
							initial={{ backgroundColor: initialColor }}
							animate={{ backgroundColor: animateColor }}
							onTap={() => setStore(prev => ({ ...prev, before: i, selected: i }))}
						>

							{isSelected && (
								<motion.div
									className="absolute top-0 left-0 w-full h-full rounded-full"
									layoutId="selected"
									initial={{ backgroundColor: initialColor }}
									animate={{ backgroundColor: animateColor }}
								/>
							)}
							<motion.div
								className={classNames("relative z-10 cursor-pointer", {
									"text-white": isHome || isSelected,
									"text-primary": !isHome && !isSelected,
								})}
								initial={{ color: textColor }}
								animate={{ color: textColor }}
								onTap={() => setStore(prev => ({ ...prev, before: i, selected: i }))}
								onPointerEnter={() => handleMouseEnter(i)}
								onPointerOut={handleMouseLeave}
							>
								{icon ? icon : label}
							</motion.div>
						</motion.div>
					</Link>
				);
			})}
		</div>
	);
}
