"use client"

import { supabaseClient } from "@/utils/supabase"
import { useForm, useSelect, Create } from "@refinedev/antd"
import { Form, Select, Input, Upload } from "antd"
import { IAlbums, ICategory, IPost } from "interfaces"
import { normalizeFile } from "@/utils/normalizeFile"
import { RcFile } from "antd/es/upload"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import dynamic from "next/dynamic"
import { v4 as uuid } from "uuid"
import { useState } from "react"

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
)

const PostCreate: React.FC = () => {
	const { formProps, saveButtonProps } = useForm<IAlbums>()

	const idUuid = uuid()

	const [id, setId] = useState(idUuid)

	
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
			</Form>
		</Create>
	)
}

export default PostCreate
