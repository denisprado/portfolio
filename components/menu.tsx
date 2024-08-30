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
	const path = usePathname()
	const color = "hsl(var(--primary))"
	// const { theme: themeColor } = useTheme();
	const themeColor = 'light';
	const { active, before, setBefore } = useMenuContext()

	const [store, setStore] = useState({ before: before, selected: active, activeColor: color })

	useEffect(() => {
		path === '/' && setBefore && setBefore(0)
		return () => {
			setStore({ before: 0, selected: active, activeColor: color })
		}
	}, [])

	return (
		<div className="relative flex items-start content-start justify-start">
			{items.map(({ label, href, handleClick }, i) => {

				return label !== 'home' && (
					<Link key={href} href={href!} onClick={handleClick}
						className="relative font-sans text-xs uppercase"
						onPointerEnter={() => {
							setStore({
								activeColor: color,
								selected: i,
								before: store.before
							})
						}}
						onPointerOut={() => {
							setStore({
								activeColor: color,
								selected: store.before,
								before: store.before
							})
						}}
					>
						<motion.div
							className={classNames("relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3 ",
								{
									// "bg-neutral-dark-3 text-neutral-light-2": themeColor === 'dark' && path !== '/',
									"bg-white text-neutral-dark-2": themeColor === 'light' && path !== '/',
									"text-white border border-white ": path === '/'

								})}
							style={{ zIndex: 999 }}
							initial={{
								color:
									path !== '/' ?
										i === store.selected ?
											"hsl(var(--neutral-light-1))" :
											themeColor === 'light' ?
												"hsl(var(--primary))" : "hsl(var(--neutral-light-2))"
										:
										"#ffffff"

							}}
							animate={{
								color:
									path !== '/' ?
										i === store.selected ?
											"hsl(var(--neutral-light-1))" :
											themeColor === 'light' ?
												"hsl(var(--primary))" : "hsl(var(--neutral-light-2))"
										:
										"#ffffff"
							}}
							onTap={() => {
								setStore({
									activeColor: color,
									selected: i,
									before: i,
								})
							}}
							onPointerEnter={() => {
								setStore({
									activeColor: color,
									selected: i,
									before: store.before
								})
							}}
							onPointerOut={() => {
								setStore({
									activeColor: color,
									selected: store.before,
									before: store.before
								})
							}}
						>
							<span
								onPointerEnter={() => {
									setStore({
										activeColor: color,
										selected: i,
										before: store.before
									})
								}}
								onPointerOut={() => {
									setStore({
										activeColor: color,
										selected: store.before,
										before: store.before
									})
								}}
								className="relative z-10">

								{label}
							</span>

							{i === store.selected && (
								<motion.div
									className={"w-full h-full absolute rounded-full top-0 left-0"}
									layoutId="selected"
									initial={{
										backgroundColor: path !== '/' ? store.activeColor : 'transparent',
									}}
									animate={{ backgroundColor: color }}
									onPointerEnter={() => {
										setStore({
											activeColor: color,
											selected: i,
											before: store.before
										})
									}}
									onPointerOut={() => {
										setStore({
											activeColor: color,
											selected: store.before,
											before: store.before
										})
									}}
								/>
							)}
						</motion.div>
					</Link>
				)
			})}
		</div>
	)
}