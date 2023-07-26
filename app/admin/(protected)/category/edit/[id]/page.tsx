"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

import { IPost } from "interfaces";

const PostEdit: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<IPost>();

	return (
		<Edit saveButtonProps={saveButtonProps}>
			<Form {...formProps} layout="vertical">
				<Form.Item label="Name" name="name">
					<Input />
				</Form.Item>
			</Form>
		</Edit>
	);
};

export default PostEdit;
