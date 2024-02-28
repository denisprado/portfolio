"use client";

import { normalizeFile } from "@/utils/normalizeFile";
import { supabaseClient } from "@/utils/supabase";
import { useForm, useSelect, Edit, useModalForm, } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import dynamic from "next/dynamic";
import { ICategory, IPost } from "interfaces";
import { BaseKey } from "@refinedev/core";

const PostEdit: React.FC = () => {
	const { formProps, saveButtonProps, queryResult } = useForm<IPost>();
	const { id } = useModalForm({
		action: "edit",
	});
	const { selectProps: categorySelectProps } = useSelect<ICategory>({
		resource: "category",
		optionLabel: "name",
		defaultValue: queryResult?.data?.data?.category_id as BaseKey | BaseKey[] | undefined,
	});

	const MDEditor = dynamic(
		() => import("@uiw/react-md-editor"),
		{ ssr: false }
	);

	return (
		<Edit saveButtonProps={saveButtonProps}>
			<Form {...formProps} layout="vertical">
				<Form.Item label="Id" name="id">
					<Input disabled />
				</Form.Item>
				<Form.Item label="Title" name="title">
					<Input />
				</Form.Item>

				<Form.Item label="Description" name="description">
					<Input />
				</Form.Item>

				<Form.Item label="Use Mock Browser" name="use_mock_browser">

				</Form.Item>

				<Form.Item label="Content" name="content">
					<MDEditor data-color-mode="light" />
				</Form.Item>

				<Form.Item label="Category" name="category_id">
					<Select {...categorySelectProps} />
				</Form.Item>
				<Form.Item
					name="thumbnail"
					valuePropName="image"
					normalize={normalizeFile}
					noStyle
				>
					<Upload.Dragger
						name="thumbnail"
						listType="picture"
						multiple
						customRequest={async ({ file, onError, onSuccess }) => {
							try {
								const rcFile = file as RcFile;
								console.log(file)
								const { data, error } = await supabaseClient.storage
									.from("project-images")
									.upload(`images/${id}/${rcFile.name}`, file, {
										cacheControl: "3600",
										upsert: true,
									});
								if (error) {
									console.log(error)
								} else {
									// Handle success
								}
								const { data: resData } = supabaseClient.storage
									.from("project-images")
									.getPublicUrl(`images/${id}/${rcFile.name}`);

								const xhr = new XMLHttpRequest();
								onSuccess && onSuccess({ url: resData?.publicUrl }, xhr);
							} catch (error) {
								onError && onError(new Error("Upload Error"));
							}
						}}
					>
						<p className="ant-upload-text">Drag & drop a file in this area</p>
					</Upload.Dragger>
				</Form.Item>
			</Form>
		</Edit>
	);
};

export default PostEdit;
