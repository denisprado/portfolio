import WorkCard, { RowCardProps } from "@/components/workCard"
import WorkIntro from "@/components/workIntro"
import { WorksCategory } from "@/payload-types"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"

export default async function WorkList({ params: { categoria } }: { params: { categoria: string } }) {

	const payload = await getPayloadHMR({ config: configPromise })

	const dataWork = await payload.find({
		collection: 'works',
		sort: 'order'
	})

	const dataWorkOfCat = dataWork.docs.filter(work => {
		const workDoc = work.category?.value as WorksCategory
		const WorkId = workDoc.slug
		return WorkId === categoria
	})

	const rowCards: RowCardProps[] = dataWorkOfCat.map((work) => {
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
