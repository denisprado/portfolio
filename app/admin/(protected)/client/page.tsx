"use client";

import {
	useTable,
	List,
	EditButton,
	ShowButton,
	DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

import { IClient } from "interfaces";

const ClientList: React.FC = () => {
	const { tableProps } = useTable<IClient>();

	return (
		<List resource="client">
			<Table {...tableProps} rowKey="id">
				<Table.Column dataIndex="id" title="ID" />
				
				<Table.Column dataIndex="name" title="Name" />
				<Table.Column<IClient>
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

export default ClientList;
