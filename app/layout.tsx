"use client"

import React from "react"
import { RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import { ConfigProvider } from "antd"
import '@styles/globals.css'
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { Source_Sans_Pro, Source_Code_Pro } from 'next/font/google';

const source = Source_Sans_Pro({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-source',
	weight: "400"
});

const fira = Source_Code_Pro({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-source-code',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {


	return (
		<ConfigProvider theme={RefineThemes.Blue}>
			<html lang="en" className={`${source.variable} ${fira.variable}`}>
				<head />
				<body >
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ConfigProvider>
	)
}
