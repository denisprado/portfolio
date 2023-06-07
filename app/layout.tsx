"use client"

import React from "react"
import { notificationProvider, RefineThemes } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"
import { ConfigProvider } from "antd"
import '@styles/globals.css'
import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { Source_Sans_Pro, Source_Code_Pro } from 'next/font/google';
import { Refine } from "@refinedev/core"
import { authProvider } from "@/authProvider"
import { API_URL } from "@/constants"
import dataProvider from "@refinedev/simple-rest"
import routerProvider from "@refinedev/nextjs-router/app";

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
				</body>
			</html>
		</ConfigProvider>
	)
}
