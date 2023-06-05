"use client";

import { notificationProvider, ThemedLayoutV2 } from "@refinedev/antd";
import { Authenticated, Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { authProvider } from "src/authProvider";
import { API_URL } from "src/constants";
import routerProvider from "@refinedev/nextjs-router/app";
export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Authenticated redirectOnFail="/login">
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

				<ThemedLayoutV2>{children}</ThemedLayoutV2>
			</Refine>
		</Authenticated>
	);
}
