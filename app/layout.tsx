"use client"

import React from "react"
import { notificationProvider, RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import { ConfigProvider } from "antd"
import './globals.css'
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { Instrument_Serif } from 'next/font/google';
import { Refine } from "@refinedev/core"
import { authProvider } from "@/authProvider"
import { API_URL } from "@/constants"
import dataProvider from "@refinedev/simple-rest"
import routerProvider from "@refinedev/nextjs-router/app";
import { usePathname } from "next/navigation"
import localFont from 'next/font/local'

const instrumentSans = localFont({ src: './InstrumentSans-VariableFont_wdth,wght.ttf', variable: '--font-instrument-sans' })


const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-instrument-serif',
	weight: "400"
});

const instrumentSerifItalic = Instrument_Serif({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-instrument-italic',
	weight: "400", style: 'italic'
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {

	const path = usePathname();

	const isAdmin = path.includes('admin')

	return (
		<ConfigProvider theme={RefineThemes.Blue}>
			<html lang="en" className={`${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerifItalic.variable}`}>
				<head />
				<body >
					{isAdmin ?
						<Refine
							authProvider={authProvider}
							routerProvider={routerProvider}
							dataProvider={dataProvider(API_URL)}
							resources={[
								{
									name: "posts",
									list: "/posts",
									create: "/posts/create",
									edit: "/posts/edit/:id",
									show: "/posts/show/:id",
									meta: {
										canDelete: true,
									},
								},
							]}
							options={{
								syncWithLocation: true,
							}}
							notificationProvider={notificationProvider}
						>
							<Header />
							{children}
							<Footer />
						</Refine>
						:
						<>
							<Header />
							{children}
							<Footer />
						</>
					}
				</body>
			</html>
		</ConfigProvider>
	)
}
