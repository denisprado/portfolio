"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

import { IClient } from "interfaces";

const PostCreate: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<IClient>();
	
	return (
		<Create saveButtonProps={saveButtonProps}>
			<Form {...formProps} layout="vertical">
				<Form.Item label="Name" name="name">
					<Input />
				</Form.Item>
				
			</Form>
		</Create>
	);
};

export default PostCreate;
