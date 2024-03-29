"use client";

import getUrlFromTable from "@/utils/getUrlFromTable";
import {
	DeleteButton,
	EditButton,
	List, ShowButton, TagField, TextField, useTable
} from "@refinedev/antd";
import { useMany, BaseKey } from "@refinedev/core";
import { Image, Space, Table } from "antd";

import { IAlbums, IImage } from "interfaces";

const ImageList: React.FC = () => {
	const { tableProps } = useTable<IImage>();
	const AlbumsIds = tableProps?.dataSource?.map(
		(item) => item.album_id!
	) ?? [""];

	const { data, isLoading } = useMany<IAlbums>({
		resource: "albums",
		ids: AlbumsIds as BaseKey[],
		queryOptions: {
			enabled: AlbumsIds.length > 0,
		},
	});
	
	return (
		<List>
			<Table {...tableProps} rowKey="id">

				<Table.Column dataIndex="id" title="id" />
				<Table.Column dataIndex="title" title="Title" />
				<Table.Column dataIndex="description" title="Description" />
				<Table.Column<IImage>
					title="Image"
					dataIndex="file_path"
					render={(_, image) => {
						console.log(image)
						return <Image alt={image.title!} src={getUrlFromTable(image?.file_path!)} width={100} /> 
					}}
					width="50%"
				/>
				<Table.Column
					dataIndex={"album_id"}
					title="Album"
					sorter
					render={(value) => {
						if (isLoading) {
							return <TextField value="Loading..." />;
						}
						console.log(data)
						return (
							<TagField
								value={
									data?.data.find((item) => item.id === value)?.title
								}
							/>
						);
					}}
				/>
				<Table.Column<IAlbums>
					title="Actions"
					dataIndex="actions"
					render={(_text, record): React.ReactNode => {
						console.log(_text)
						return (
							<Space>
								<EditButton
									size="small"
									recordItemId={record?.id!}
								/>
								<ShowButton
									size="small"
									recordItemId={record?.id!}
								/>
								<DeleteButton
									size="small"
									recordItemId={record?.id!}
									
								/>
							</Space>
						);
					}}
				/>
			</Table>
		</List>
	);
};

export default ImageList;
