import { Metadata } from 'next'
import { Header } from "@components/header"
// import "@refinedev/antd/dist/reset.css"
import ConfigProvider from "antd/es/config-provider"
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import React from "react"
import { MenuContextProvider } from "./context/menu"

import { ThemeProvider } from 'next-themes'

import './globals.css'
import { SubMenuContextProvider } from "./context/submenu"

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


export const metadata: Metadata = {
	title: 'Platô Development',
	description: 'Dê vida ao seu projeto com a Platô. Desenvolvimento de websites totalmente customizados e design personalizado para impulsionar sua presença online.',
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {


	return (
		<html lang="en" suppressHydrationWarning className={`${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerifItalic.variable} dark:bg-neutral-dark-1 bg-primary`} >
			<head />
			<body >
				{/* <ThemeProvider attribute="class"> */}
				<MenuContextProvider>
					<SubMenuContextProvider>
						<Header />
						{children}
					</SubMenuContextProvider>
				</MenuContextProvider>
				{/* </ThemeProvider> */}
			</body>
		</html>
	)
}
