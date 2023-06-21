import { useThemeContext } from "@/app/context/theme";
import classNames from "classnames";
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"


interface ItemsProps {
	href: string
	label: string
}

interface MenuItemsProps {
	items: ItemsProps[]
}


export function MenuItems({ items }: MenuItemsProps) {
	const color = "hsl(var(--primary))"
	const { color: themeColor, setColor } = useThemeContext();
	const [store, setStore] = useState({ before: 0, selected: 0, activeColor: color })


	return (



		<div className="relative flex content-start justify-start items-start">
			{items.map(({ label, href }, i) => {

				return i > 0 && (
					<Link href={href}
						className="text-xs uppercase font-sans relative"
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
					><motion.div
						className={classNames("relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3", { "bg-neutral-dark-3 text-neutral-light-2": themeColor === 'dark', "bg-white text-neutral-dark-2": themeColor === 'light' })}
						key={i}
						style={{ zIndex: 999 }}
						initial={{
							color:
								i === store.selected ? "hsl(var(--neutral-light-1))" : themeColor === 'light' ? "hsl(var(--neutral-dark-1))" : "hsl(var(--neutral-light-2))",
						}}
						animate={{
							color:
								i === store.selected ? "hsl(var(--neutral-light-1))" : themeColor === 'light' ? "hsl(var(--neutral-dark-1))" : "hsl(var(--neutral-light-2))",
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
							<span onTap={() => {
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
								className="z-10 relative">

								{label}
							</span>

							{i === store.selected && (
								<motion.div
									className={"w-full h-full absolute rounded-full top-0 left-0"}
									layoutId="selected"
									initial={{
										backgroundColor: store.activeColor,
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