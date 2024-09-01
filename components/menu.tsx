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
	const backgroundColor = whiteColor;

	const themeColor = 'light'; // Pode ser extraído de `useTheme` se necessário
	const { active, before, setBefore } = useMenuContext();

	const [store, setStore] = useState({
		before: before,
		selected: active,
		activeColor: primaryColor,
	});

	useEffect(() => {
		if (isHome) {
			setBefore && setBefore(0);
		}
		return () => {
			setStore({ before: 0, selected: active, activeColor: primaryColor });
		};
	}, []);

	const handleMouseEnter = (index: number) => {
		setStore({
			activeColor: primaryColor,
			selected: index,
			before: store.before,
		});
	};

	const handleMouseLeave = () => {
		setStore({
			activeColor: primaryColor,
			selected: store.before,
			before: store.before,
		});
	};

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick }, i) => {
				if (label === 'home') return null;

				const isSelected = i === store.selected;
				const initialColor = isSelected ? neutralLightColor : primaryColor;
				const animateColor = isSelected ? whiteColor : primaryColor;

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
							className={classNames("relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3 bg-white text-neutral-dark-2")}
							style={{ zIndex: 999 }}
							initial={{ color: initialColor }}
							animate={{ color: animateColor }}
							onTap={() => setStore({ activeColor: primaryColor, selected: i, before: i })}
							onPointerEnter={() => handleMouseEnter(i)}
							onPointerOut={handleMouseLeave}
						>

							{isSelected && (
								<motion.div
									className="absolute top-0 left-0 w-full h-full rounded-full"
									layoutId="selected"
									initial={{ backgroundColor: backgroundColor, color: animateColor }}
									animate={{ backgroundColor: primaryColor, color: animateColor }}
									onPointerEnter={() => handleMouseEnter(i)}
									onPointerOut={handleMouseLeave}
								/>
							)}
							<motion.p
								className={classNames("relative z-10 cursor-pointer", {
									"text-white": isHome,
									"text-neutral-dark-2": !isHome && themeColor === 'light',
								})}
								initial={{ color: initialColor }}
								animate={{ color: animateColor }}
								onTap={() => setStore({ activeColor: primaryColor, selected: i, before: i })}
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
