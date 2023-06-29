"use client";

import { supabaseClient } from "@/utils/supabase";
import { useForm, useSelect, Create } from "@refinedev/antd";
import { Form, Select, Input, Upload } from "antd";

import { ICategory } from "interfaces";
import { normalizeFile } from "@/utils/normalizeFile";
import { RcFile } from "antd/es/upload";

const PostCreate: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<ICategory>();
	
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
