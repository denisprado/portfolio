
import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
import RowCard, { RowCardProps } from "@/components/rowCard"
import supabase from "@/utils/supabase"

export default async function Work() {
	const { data, error } = await getWork()

	if (error || !data) {
		return <>{error}</>
	}

	const rowCards = data.map((data) => {
		return {
			id: data.id,
			title: data.title,
			description: data.description,
			content: data.content,
			created_at: data.created_at,
			color: 'var(hsl(--primary))',
			thumbnail: data.thumbnail,
			category: data.category,
			clients: data.client,
			url: true
		} as unknown as RowCardProps
	})

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full dark:bg-neutral-dark-2 bg-neutral-light-1">
				<div className="relative flex justify-center w-full mt-32 mb-24 ">
					<p className="z-10 w-4/6 p-10 font-serif text-4xl font-light text-center text-neutral-dark-3 dark:text-neutral-light-1">
						Criamos trabalhos bonitos, funcionais e com tecnologias avançadas que eleva e unifica as experiências em todas as superfícies da marca.
					</p>
				</div>
				{/* <RowCard cards={rowCards} /> */}
			</Container>
		</PageWrapper>
	)
}

async function getWork() {
	const { data, error } = await supabase
		.from('work')
		.select(`*, category (
		id, name
	), client ( id, name )`)

	return { data, error }
}

export const revalidate = 60



