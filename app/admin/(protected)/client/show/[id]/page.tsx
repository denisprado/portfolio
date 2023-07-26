"use client";

import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";


const { Title, Text } = Typography;

const PostShow: React.FC = () => {
	const { queryResult } = useShow();
	const { data, isLoading } = queryResult;
	const record = data?.data;

	return (
		<Show isLoading={isLoading}>
			<Title level={5}>Name</Title>
			<Text>{record?.name}</Text>
		</Show>
	);
};

export default PostShow;
