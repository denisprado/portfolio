import WorkCard, { RowCardProps } from "@/components/workCard"
import WorkIntro from "@/components/workIntro"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"

export default async function Work() {

	const payload = await getPayloadHMR({ config: configPromise })

	const dataWork = await payload.find({
		collection: 'works',
		sort: 'order'
	})

	const rowCards: RowCardProps[] = dataWork.docs.map((work) => {
		return {
			id: work.id,
			slug: work.slug!,
			title: work.title,
			description: work.description,
			color: 'hsl(var(--primary))',
			thumbnail: work.image,
			category: work.category!.value,
			url: work.url!
		}
	});

	return (
		<>
			<WorkIntro />
			<WorkCard cards={rowCards} />
		</>

	);
}

export const revalidate = 60;
