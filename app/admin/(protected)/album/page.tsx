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

import { ICategory, IAlbums } from "interfaces";

const AlbumIAlbumsList: React.FC = () => {
	const { tableProps } = useTable<IAlbums>();
	
	return (
		<List>
			<Table {...tableProps} rowKey="id">

				<Table.Column dataIndex="id" title="id" />
				<Table.Column dataIndex="title" title="Title" />
				<Table.Column dataIndex="description" title="Description" />
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

export default AlbumIAlbumsList;
