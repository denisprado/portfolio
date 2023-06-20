import { useThemeContext } from "@/app/context/theme";
import classNames from "classnames";
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const tabs = [

	{ href: "/", label: "home", color: "hsl(var(--primary))" },
	{ href: "/quem-somos", label: "quem somos", color: "hsl(var(--primary))" },
	{ href: "/servicos", label: "serviços", color: "hsl(var(--primary))" },
	{ href: "/trabalho", label: "trabalho", color: "hsl(var(--primary))" },
]



export function MenuItems() {
	const { color: themeColor, setColor } = useThemeContext();
	const [store, setStore] = useState({ before: 0, selected: 0, formerColor: tabs[0].color })

	return (



		<div className="relative flex content-start justify-start items-start">
			{tabs.map(({ label, color, href }, i) => {

				return i > 0 && (
					<motion.div
						className={classNames("relative px-3 py-1 m-0 font-sans cursor-pointer rounded-full mr-2", { "bg-neutral-dark-3 text-neutral-light-2": themeColor === 'dark', "bg-white text-neutral-dark-2": themeColor === 'light' })}
						key={i}
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
								formerColor: tabs[store.selected].color,
								selected: i,
								before: i,
							})
						}}
						onPointerEnter={() => {
							setStore({
								formerColor: tabs[store.selected].color,
								selected: i,
								before: store.before
							})
						}}
						onPointerOut={() => {
							setStore({
								formerColor: tabs[store.selected].color,
								selected: store.before,
								before: store.before
							})
						}}
					>
						<Link href={href}
							className="text-xs uppercase font-sans"
							style={{ position: "relative", zIndex: 1 }}
							onPointerEnter={() => {
								setStore({
									formerColor: tabs[store.selected].color,
									selected: i,
									before: store.before
								})
							}}
							onPointerOut={() => {
								setStore({
									formerColor: tabs[store.selected].color,
									selected: store.before,
									before: store.before
								})
							}}
						>
							{label}
						</Link>
						{i === store.selected && (
							<motion.div
								className={"w-full h-full absolute rounded-full top-0 left-0"}
								layoutId="selected"
								initial={{
									backgroundColor: store.formerColor,
								}}
								animate={{ backgroundColor: color }}
								onPointerEnter={() => {
									setStore({
										formerColor: tabs[store.selected].color,
										selected: i,
										before: store.before
									})
								}}
								onPointerOut={() => {
									setStore({
										formerColor: tabs[store.selected].color,
										selected: store.before,
										before: store.before
									})
								}}
							/>
						)}
					</motion.div>
				)
			})}
		</div>
	)
}