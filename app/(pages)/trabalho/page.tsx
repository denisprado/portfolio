
import Card from "@/components/card"
import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
import RowCard, { RowCardProps } from "@/components/rowCard"
import supabase from "@/utils/supabase"

import Link from 'next/link'

const parseJSON = (json: string | null) => {
	try {
		return json ? JSON.parse(json) : ''
	} catch (error) {
		return null
	}
}

export default async function Work() {
	const { data, error } = await getWork()

	if (error || !data) {
		return error
	}

	const rowCards: RowCardProps[] = data?.map((data) => {
		return {
			id: data.work_id,
			title: data.title,
			description: data.description,
			color: 'var(hsl(--primary))',
			thumbnail: data.thumbnail,
			category: data.category,
			clients: data.client,
			url: true
		}
	})

	return (
		<PageWrapper className="overflow-hidden">
			{/* {data?.map(async (item) => {
						const url = parseJSON(item?.thumbnail)
						return (
							<div className="col-span-3 w-full grid">
								<Link href={{ pathname: `/trabalho/${item?.id!}` }}>
									<Card imgSrc={url ? url[0]?.url : '/images/card-logo.svg'} title={item.title!} description={item.description!} categories={item.category} client={item.client} />
								</Link>
							</div>
						)
					})} */}
			<RowCard cards={rowCards} />
		</PageWrapper>
	)
}

async function getWork() {
	const { data, error } = await supabase
		.from('work')
		.select(`work_id, title, thumbnail, description, category (
		id, name
	), client ( id, name )`)

	return { data, error }
}






