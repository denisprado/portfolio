"use client";

import getUrlFromTable from "@/utils/getUrlFromTable";
import {
	useTable,
	List,
	EditButton,
	ShowButton,
	DeleteButton,
	TagField,
	TextField,
	ImageField,
} from "@refinedev/antd";
import { useMany, BaseKey } from "@refinedev/core";
import { Table, Space, Image } from "antd";

import { ICategory, IPost } from "interfaces";

const PostList: React.FC = () => {
	const { tableProps } = useTable<IPost>();

	const categoryIds = tableProps?.dataSource?.map(
		(item) => item.category
	) ?? [""];

	const { data, isLoading } = useMany<ICategory>({
		resource: "category",
		ids: categoryIds as BaseKey[],
		queryOptions: {
			enabled: categoryIds.length > 0,
		},
	});

	return (
		<List>
			<Table {...tableProps} rowKey="id">

				<Table.Column dataIndex="work_id" title="id" colSpan={3}/>
				<Table.Column dataIndex="title" title="Title" colSpan={4}/>
				<Table.Column dataIndex="description" title="Description" colSpan={6} />
				<Table.Column dataIndex="content" title="Content" />
				<Table.Column<IPost>
					title="Image"
					dataIndex="thumbnail"
					render={(_, image) => {
						return <Image alt={image?.title} src={getUrlFromTable(image.thumbnail)} width={100} /> 
					}}
					width="50%"
				/>
				<Table.Column
					dataIndex={"category_id"}
					title="Categoria"
					sorter
					render={(value) => {
						if (isLoading) {
							return <TextField value="Loading..." />;
						}
						console.log(value)
						return (
							<TagField
								value={
									data?.data.find((item) => item.id === value)?.name
								}
							/>
						);
					}}
				/>
				<Table.Column<IPost>
					title="Actions"
					dataIndex="actions"
					render={(_text, record): React.ReactNode => {
						return (
							<Space>
								<EditButton
									size="small"
									recordItemId={record.work_id}
								/>
								<ShowButton
									size="small"
									recordItemId={record.work_id}
								/>
								<DeleteButton
									size="small"
									recordItemId={record.work_id}
								/>
							</Space>
						);
					}}
				/>
			</Table>
		</List>
	);
};

export default PostList;
