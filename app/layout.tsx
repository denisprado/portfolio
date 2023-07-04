"use client"

import React from "react"
import { notificationProvider, RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import './globals.css'
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { Instrument_Serif } from 'next/font/google';
import { Refine } from "@refinedev/core"
import { authProvider } from "@/authProvider"
import { dataProvider } from "@refinedev/supabase"
import routerProvider from "@refinedev/nextjs-router/app";
import { usePathname } from "next/navigation"
import localFont from 'next/font/local'
import { ThemeContextProvider } from "./context/theme"
import { supabaseClient } from "@/utils/supabase"
import ConfigProvider from "antd/es/config-provider"



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
		<ConfigProvider theme={RefineThemes.Purple}>
			<html lang="en" suppressHydrationWarning className={`${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerifItalic.variable}`}>
				<head />
				<body >
					<ThemeContextProvider>
						{isAdmin ?
							<Refine
								authProvider={authProvider}
								routerProvider={routerProvider}
								dataProvider={dataProvider(supabaseClient)}
								resources={[
									{
										name: "work",
										list: "/admin/work",
										create: "/admin/work/create",
										edit: "/admin/work/edit/:id",
										show: "/admin/work/show/:id",
										meta: {
											canDelete: true,
										},
									},
									{
										name: "category",
										list: "/admin/category",
										create: "/admin/category/create",
										edit: "/admin/category/edit/:id",
										show: "/admin/category/show/:id",
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
					</ThemeContextProvider>
				</body>
			</html>
		</ConfigProvider>
	)
}
