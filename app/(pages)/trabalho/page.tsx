
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
			id: data.work_id,
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
				<div className="w-full flex pt-44 justify-center relative min-h-[640px]">
					<p className="text-primary font-serif text-9xl font-light w-4/6 text-center z-10">
						Trabalhando com dedicação,<br />
						subindo o mesmo caminho.
					</p>
				</div>
				<RowCard cards={rowCards} />
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






