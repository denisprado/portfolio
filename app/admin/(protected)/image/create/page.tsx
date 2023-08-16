"use client";

import { normalizeFile } from "@/utils/normalizeFile";
import { supabaseClient } from "@/utils/supabase";
import { Create, useForm, useSelect } from "@refinedev/antd";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { Form, Input, Select, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { IAlbums, IImage } from "interfaces";
import dynamic from "next/dynamic";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);

const ImageCreate: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<IImage>();

	const idUuid = uuid()

	const [id, setId] = useState(idUuid)

	const { selectProps: albumSelectProps } = useSelect<IAlbums>({
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
				<Form.Item label="Image">
					<Form.Item
						name="file_path"
						valuePropName="fileList"
						normalize={normalizeFile}
						noStyle
					>
						<Upload.Dragger
							name="file_path"
							listType="picture"
							customRequest={async ({ file, onError, onSuccess }) => {
								try {
									const rcFile = file as RcFile;

									const { data, error } = await supabaseClient.storage
										.from("albums")
										.upload(`${id}/${rcFile.name}`, file, {
											cacheControl: "3600",
											upsert: true,
										});
									if (error) {
										console.log(error)
									} else {
										// Handle success
									}
									const { data: resData } = supabaseClient.storage
										.from("albums")
										.getPublicUrl(`${id}/${rcFile.name}`);

									const xhr = new XMLHttpRequest();
									onSuccess && onSuccess({ url: resData?.publicUrl }, xhr);
								} catch (error) {
									onError && onError(new Error("Upload Error"));
								}
							}}
						>
							<p className="ant-upload-text">Arraste um arquivo</p>
						</Upload.Dragger>
					</Form.Item>
					<Form.Item label="Album"
					name="album_id"
					rules={[
						{
							required: true,
						},
					]}>
					<Select {...albumSelectProps} />
				</Form.Item>
				</Form.Item>
			</Form>
		</Create>
	);
};

export default ImageCreate;
