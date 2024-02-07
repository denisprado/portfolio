"use client";

import { AuthPage } from "@refinedev/antd";

export default function Login() {
	return (
		<AuthPage
			formProps={{
				initialValues: {
					email: "denisforigo@gmail.com",
					password: "clipper02",
				},
			}}
		/>
	);
}

Login.layout = "auth";
