
import Card from "@/components/card"
import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
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

	if (error) {
		return error
	}

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full dark:bg-neutral-dark-2 bg-white">
				<div className="grid grid-cols-12 w-full gap-4 p-4 container">
					{data?.map(async (item) => {
						const url = parseJSON(item?.thumbnail)
						return (
							<div className="col-span-6 w-full grid"><Link  href={`trabalho/${item?.id!}`}><Card imgSrc={url ? url[0]?.url : '/images/card-logo.svg'} title={item.title!} description={item.description!} categories={item.category} client={item.client} /></Link></div>
						)
					})}
				</div>
			</Container>

		</PageWrapper>
	)
}

async function getWork() {
	const { data, error } = await supabase
		.from('work')
		.select(`id, title, thumbnail, description, category (
		id, name
	), client ( id, name )`)

	return { data, error }
}






