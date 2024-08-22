import { useThemeContext } from "@/app/(app)/context/theme";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSubMenuContext } from "@/app/(app)/context/submenu";

interface ItemsProps {
	href: string;
	label: string;
	handleClick?: () => void;
}

interface MenuItemsProps {
	items: ItemsProps[];
}

export function SubMenuItems({ items }: MenuItemsProps) {
	const path = usePathname();
	const color = "hsl(var(--primary))";
	const { color: themeColor } = useThemeContext();
	const { activeSubMenu, beforeSubMenu, setBeforeSubMenu } = useSubMenuContext();

	const [storeSubMenu, setStoreSubMenu] = useState({
		beforeSubMenu: beforeSubMenu,
		selectedSubMenu: activeSubMenu,
		activeColorSubMenu: color
	});

	useEffect(() => {
		setStoreSubMenu({
			beforeSubMenu: activeSubMenu,
			selectedSubMenu: activeSubMenu,
			activeColorSubMenu: color
		});
	}, [activeSubMenu, color]);

	const handleSubMenuClick = (i: number) => {
		setStoreSubMenu(prevState => ({
			...prevState,
			activeColorSubMenu: color,
			selectedSubMenu: i,
			beforeSubMenu: i
		}));
		setBeforeSubMenu && setBeforeSubMenu(i);
	};

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick }, i) => (
				<Link
					key={i}
					href={href}
					onClick={() => {
						handleSubMenuClick(i);
						handleClick && handleClick();
					}}
					className="relative font-sans text-xs uppercase"
					onPointerEnter={() =>
						setStoreSubMenu({
							activeColorSubMenu: color,
							selectedSubMenu: i,
							beforeSubMenu: storeSubMenu.beforeSubMenu
						})
					}
					onPointerOut={() =>
						setStoreSubMenu({
							activeColorSubMenu: color,
							selectedSubMenu: storeSubMenu.beforeSubMenu,
							beforeSubMenu: storeSubMenu.beforeSubMenu
						})
					}
				>
					<motion.div
						className={classNames("relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3", {
							"bg-neutral-dark-3 text-neutral-light-2": themeColor === "dark",
							"bg-white text-neutral-dark-2": themeColor === "light"
						})}
						style={{ zIndex: 999 }}
						initial={{
							color:
								i === storeSubMenu.selectedSubMenu
									? "hsl(var(--neutral-light-1))"
									: themeColor === "light"
										? "hsl(var(--primary))"
										: "hsl(var(--neutral-light-2))"
						}}
						animate={{
							color:
								i === storeSubMenu.selectedSubMenu
									? "hsl(var(--neutral-light-1))"
									: themeColor === "light"
										? "hsl(var(--primary))"
										: "hsl(var(--neutral-light-2))"

						}}
						onTap={() => handleSubMenuClick(i)}
						onClick={() => handleSubMenuClick(i)}
						onPointerEnter={() =>
							setStoreSubMenu({
								activeColorSubMenu: color,
								selectedSubMenu: i,
								beforeSubMenu: storeSubMenu.beforeSubMenu
							})
						}
						onPointerOut={() =>
							setStoreSubMenu({
								activeColorSubMenu: color,
								selectedSubMenu: storeSubMenu.beforeSubMenu,
								beforeSubMenu: storeSubMenu.beforeSubMenu
							})
						}
					>
						<span onPointerEnter={() => {
							setStoreSubMenu({
								activeColorSubMenu: color,
								selectedSubMenu: i,
								beforeSubMenu: storeSubMenu.beforeSubMenu
							})
						}}
							onPointerOut={() => {
								setStoreSubMenu({
									activeColorSubMenu: color,
									selectedSubMenu: storeSubMenu.beforeSubMenu,
									beforeSubMenu: storeSubMenu.beforeSubMenu
								})
							}}
							className="relative z-10 ">{label}</span>

						{i === storeSubMenu.selectedSubMenu && (
							<motion.div
								className="absolute top-0 left-0 w-full h-full rounded-full"
								layoutId="selectedSubMenu"
								initial={{
									backgroundColor: path !== "/" ? storeSubMenu.activeColorSubMenu : "transparent"
								}}
								animate={{ backgroundColor: color }}
								onPointerEnter={() =>
									setStoreSubMenu({
										activeColorSubMenu: color,
										selectedSubMenu: i,
										beforeSubMenu: storeSubMenu.beforeSubMenu
									})
								}
								onClick={() => handleSubMenuClick(i)}
								onPointerOut={() =>
									setStoreSubMenu({
										activeColorSubMenu: color,
										selectedSubMenu: storeSubMenu.beforeSubMenu,
										beforeSubMenu: storeSubMenu.beforeSubMenu
									})
								}
							/>
						)}
					</motion.div>
				</Link>
			))}
		</div>
	);
}