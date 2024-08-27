import { Header } from "@components/header"
// import "@refinedev/antd/dist/reset.css"
import ConfigProvider from "antd/es/config-provider"
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import React from "react"
import { MenuContextProvider } from "./context/menu"
import { PageContextProvider } from "./context/page"
import { ThemeProvider } from 'next-themes'

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


	return (
		<html lang="en" suppressHydrationWarning className={`${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerifItalic.variable} dark:bg-neutral-dark-1`}>
			<head />
			<body >
				<ThemeProvider attribute="class">
					<PageContextProvider>
						<MenuContextProvider>
							<Header />
							{children}
						</MenuContextProvider>
					</PageContextProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
