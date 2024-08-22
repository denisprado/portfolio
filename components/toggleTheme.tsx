"use client"

import { Moon, Sun } from "lucide-react"
import { Switch } from "./ui/switch"

import { useThemeContext } from "@/app/(app)/context/theme"

export function ModeToggle() {
	const { color, setColor } = useThemeContext()

	return setColor ? (

		<div className="flex items-center justify-center gap-2">
			{color === 'light' ? <Sun color={"#45464E"} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> :
				<Moon color={'#A1A4A8'} className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />}
			<Switch
				checked={color === 'dark'}
				onCheckedChange={() => setColor(color === 'dark' ? 'light' : "dark")}
			/>
			<span className="sr-only">Toggle theme</span>
		</div>
	) : <></>
}