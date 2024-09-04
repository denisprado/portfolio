import WorkCard, { RowCardProps } from "@/components/workCard"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"
import { SubMenuItems } from "@/components/submenu"

export default async function Work() {

	const payload = await getPayloadHMR({ config: configPromise })

	const dataWork = await payload.find({
		collection: 'works'
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

	const dataCategories = await payload.find({
		collection: 'worksCategory',
	})
	const categories = dataCategories.docs
	const menuCategoriesItems = categories.map((cat) => {
		return {
			href: "/trabalho/categoria/" + cat.slug,
			label: cat.title
		}
	})
	menuCategoriesItems.unshift({ href: '/trabalho', label: "todos" })
	return (
		<>
			<div className="relative flex justify-center w-full mt-8 mb-8 ">
				<p className="z-10 w-full p-10 font-serif font-light text-center text-7xl text-neutral-dark-3 dark:text-neutral-light-1">
					Criamos trabalhos bonitos, funcionais e com tecnologias avançadas que elevam e unificam as experiências em todas as superfícies da marca.
				</p>
			</div>
			<div className={'flex flex-row items-center justify-start gap-4 px-10 py-10 bg-neutral-light-1'}>
				<p>Filtros:</p>
				<SubMenuItems items={menuCategoriesItems} />
			</div>
			<WorkCard cards={rowCards} />
		</>

	);
}

export const revalidate = 60;
