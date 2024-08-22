"use client"
import { Header } from "@components/header"
import { RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import ConfigProvider from "antd/es/config-provider"
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import { usePathname } from "next/navigation"
import React from "react"

import './globals.css'

const instrumentSans = Instrument_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-instrument-sans', adjustFontFallback: false })
const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-instrument-serif',
	weight: "400",
	adjustFontFallback: false
});

const instrumentSerifItalic = Instrument_Serif({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-instrument-italic',
	weight: "400", style: 'italic', adjustFontFallback: false
});


export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const path = usePathname();
	const isAdmin = path.includes('admin')

	return (
		<ConfigProvider theme={RefineThemes.Purple}>
			<html lang="en" suppressHydrationWarning className={`${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerifItalic.variable} dark:bg-neutral-dark-1`}>
				<head />
				<body >
					<>
						<Header />
						{children}
					</>
				</body>
			</html>
		</ConfigProvider>
	)
}
