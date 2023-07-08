"use client";

import { normalizeFile } from "@/utils/normalizeFile";
import { supabaseClient } from "@/utils/supabase";
import { useForm, useSelect, Edit } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import dynamic from "next/dynamic";
import { ICategory, IPost } from "interfaces";

const PostEdit: React.FC = () => {
	const { formProps, saveButtonProps, queryResult } = useForm<IPost>();

	const { selectProps: categorySelectProps } = useSelect<ICategory>({
		resource: "category",
		optionLabel: "name",
		defaultValue: queryResult?.data?.data?.category?.id,
	});

	const MDEditor = dynamic(
		() => import("@uiw/react-md-editor"),
		{ ssr: false }
	);

	return (
		<Edit saveButtonProps={saveButtonProps}>
			<Form {...formProps} layout="vertical">
				<Form.Item label="Id" name="work_id">
					<Input disabled/>
				</Form.Item>
				<Form.Item label="Title" name="title">
					<Input />
				</Form.Item>

				<Form.Item label="Description" name="description">
					<Input />
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
						name="image"
						listType="picture"
						customRequest={async ({ file, onError, onSuccess }) => {
							const rcFile = file as RcFile;
							const fileUrl = `images/${rcFile.name}`;

							const { error } = await supabaseClient.storage
								.from("project-images")
								.upload(fileUrl, file, {
									cacheControl: "3600",
									upsert: true,
								});

							if (error) {
								return onError?.(error);
							}
							const { data } = supabaseClient.storage
								.from("project-images")
								.getPublicUrl(fileUrl);

							onSuccess?.({ url: data?.publicUrl }, new XMLHttpRequest());
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
