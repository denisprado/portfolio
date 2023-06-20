import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const tabs = [

	{ href: "/quem-somos", label: "quem somos", color: "hsl(var(--primary))" },
	{ href: "/servicos", label: "serviços", color: "hsl(var(--primary))" },
	{ href: "/trabalho", label: "trabalho", color: "hsl(var(--primary))" },
]



export function MenuItems() {

	const [store, setStore] = useState({ before: 0, selected: 0, formerColor: tabs[0].color })

	return (



		<div className="relative rounded-full flex content-start justify-start items-start">
			{tabs.map(({ label, color, href }, i) => (
				<motion.div
					className="relative h-8 px-4 py-1 m-0 font-sans cursor-pointer text-neutral-dark-2"
					key={i}
					initial={{
						color:
							i === store.selected ? "hsl(var(--neutral-light-1))" : "hsl(var(--neutral-dark-2))",
					}}
					animate={{
						color:
							i === store.selected ? "hsl(var(--neutral-light-1))" : "hsl(var(--neutral-dark-2))",
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
						/>
					)}
				</motion.div>
			))}
		</div>
	)
}