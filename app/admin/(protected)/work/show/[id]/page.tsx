"use client";

import { useOne, useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography, Tag } from "antd";

import { ICategory } from "interfaces";

const { Title, Text } = Typography;

const PostShow: React.FC = () => {
	const { queryResult } = useShow();
	const { data, isLoading } = queryResult;
	const record = data?.data;

	const { data: categoryData } = useOne<ICategory>({
		resource: "category",
		id: record?.category?.id || "",
		queryOptions: {
			enabled: !!record?.category?.id,
		},
	});

	return (
		<Show isLoading={isLoading}>
			<Title level={5}>Title</Title>
			<Text>{record?.title}</Text>

			<Title level={5}>Category</Title>
			<Text>{categoryData?.data.name}</Text>
		</Show>
	);
};

export default PostShow;
