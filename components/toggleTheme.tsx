"use client"

import { Moon, Sun } from "lucide-react"
import { Switch } from "./ui/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return setTheme ? (

		<div className="flex items-center justify-center gap-2">
			{theme === 'light' ? <Sun color={"#45464E"} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> :
				<Moon color={'#A1A4A8'} className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />}
			<Switch
				checked={theme === 'dark'}
				onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : "dark")}
			/>
			<span className="sr-only">Toggle theme</span>
		</div>
	) : <></>
}