"use client";

import { useForm, useSelect, Edit } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

import { IClient } from "interfaces";

const ClientEdit: React.FC = () => {
	const { formProps, saveButtonProps, queryResult } = useForm<IClient>();

	return (
		<Edit saveButtonProps={saveButtonProps}>
			<Form {...formProps} layout="vertical">
				<Form.Item label="Title" name="name">
					<Input />
				</Form.Item>
			</Form>
		</Edit>
	);
};

export default ClientEdit;
