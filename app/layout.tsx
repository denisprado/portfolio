"use client"
import { Suspense } from "react"
import { authProvider } from "@/authProvider"
import { supabaseClient } from "@/utils/supabase"
import Footer from "@components/footer"
import { Header } from "@components/header"
import { useNotificationProvider, RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import { Refine } from "@refinedev/core"
import routerProvider from "@refinedev/nextjs-router/app"
import { dataProvider } from "@refinedev/supabase"
import ConfigProvider from "antd/es/config-provider"
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import { usePathname } from "next/navigation"
import React from "react"
import { ThemeContextProvider } from "./context/theme"
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
					<Suspense>
						<AntdRegistry>
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

											{
												name: "client",
												list: "/admin/client",
												create: "/admin/client/create",
												edit: "/admin/client/edit/:id",
												show: "/admin/client/show/:id",
												meta: {
													canDelete: true,
												},
											},
											{
												name: "images",
												list: "/admin/image",
												create: "/admin/image/create",
												edit: "/admin/image/edit/:id",
												show: "/admin/image/show/:id",
												meta: {
													canDelete: true,
												},
											},
											{
												name: "albums",
												list: "/admin/album",
												create: "/admin/album/create",
												edit: "/admin/album/edit/:id",
												show: "/admin/album/show/:id",
												meta: {
													canDelete: true,
												},
											},

										]}
										options={{
											syncWithLocation: true,
										}}
										notificationProvider={useNotificationProvider}
									>


										{children}
										<Footer />

									</Refine>
									:
									<>
										<Header />
										{children}

									</>
								}
							</ThemeContextProvider>
						</AntdRegistry>
					</Suspense>
				</body>
			</html>
		</ConfigProvider>
	)
}
