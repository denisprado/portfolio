"use client";

import {
	useTable,
	List,
	EditButton,
	ShowButton,
	DeleteButton,
	TagField,
	TextField,
} from "@refinedev/antd";
import { useMany, BaseKey } from "@refinedev/core";
import { Table, Space } from "antd";

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
				<Table.Column dataIndex="id" title="ID" />
				<Table.Column dataIndex="description" title="Description" />
				<Table.Column dataIndex="title" title="Title" />
				<Table.Column
					dataIndex={"category_id"}
					title="Categoria"
					sorter
					render={(value) => {
						if (isLoading) {
							return <TextField value="Loading..." />;
						}

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
									recordItemId={record.id}
								/>
								<ShowButton
									size="small"
									recordItemId={record.id}
								/>
								<DeleteButton
									size="small"
									recordItemId={record.id}
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
