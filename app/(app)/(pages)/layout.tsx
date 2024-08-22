"use client"

import React from "react"
import { useThemeContext } from "../context/theme"
import './../globals.css'

export default function Layout({
	children
}: {
	children: React.ReactNode
}) {

	const { color, setColor } = useThemeContext();

	return (
		<span className={color}>
			{children}
		</span>
	)
}