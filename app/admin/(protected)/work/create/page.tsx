"use client";

import { supabaseClient } from "@/utils/supabase";
import { useForm, useSelect, Create } from "@refinedev/antd";
import { Form, Select, Input, Upload } from "antd";
import { IAlbums, ICategory, IPost } from "interfaces";
import { normalizeFile } from "@/utils/normalizeFile";
import { RcFile } from "antd/es/upload";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);

const PostCreate: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<IPost>();

	const idUuid = uuid()

	const [id, setId] = useState(idUuid)

	const { selectProps: categorySelectProps } = useSelect<ICategory>({
		resource: "category",
		optionLabel: "name"
	});

	const { selectProps: clientelectProps } = useSelect<ICategory>({
		resource: "client",
		optionLabel: "name"
	});

	const { selectProps:AlbumsSelectProps } = useSelect<IAlbums>({
		resource: "albums",
		optionLabel: "title"
	});

	return (
		<Create saveButtonProps={saveButtonProps} >
			<Form {...formProps} layout="vertical" onLoad={() => setId(idUuid)}>
				<Form.Item label="Id" name="id" initialValue={id!} >
					{id && <Input value={id!} disabled />}
				</Form.Item>
				<Form.Item label="Title" name="title">
					<Input />
				</Form.Item>
				<Form.Item label="Description" name="description">
					<MDEditor data-color-mode="light" />
				</Form.Item>

				<Form.Item label="Category"
					name="category_id"
					rules={[
						{
							required: true,
						},
					]}>
					<Select {...categorySelectProps} />
				</Form.Item>
				<Form.Item label="Client"
					name="client_id"
					rules={[
						{
							required: true,
						},
					]}>
					<Select {...clientelectProps} />
				</Form.Item>

				<Form.Item label="Albums"
					name="albums_id"
					
					rules={[
						{
							required: true,
						},
					]}>
					<Select mode="multiple" {...AlbumsSelectProps} />
				</Form.Item>
				

				<Form.Item label="Image">
					<Form.Item
						name="thumbnail"
						valuePropName="fileList"
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
				</Form.Item>
			</Form>
		</Create>
	);
};

export default PostCreate;
