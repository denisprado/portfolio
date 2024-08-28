import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
import WorkCard, { RowCardProps } from "@/components/workCard"
import { Media } from "@/payload-types"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"

export default async function Work() {

	const payload = await getPayloadHMR({ config: configPromise })

	const dataWork = await payload.find({
		collection: 'works'
	})

	const dataWorkCategory = await payload.find({
		collection: 'worksCategory'
	})


	// const items = dataCategories.map((cat) => ({
	// 	label: cat.name!,
	// 	href: "#",
	// 	handleClick: () => handleCatActive(cat.id),

	// }));

	// const CategoriesMenu = () => {
	// 	return SubMenuItems({ items: items });
	// };

	const rowCards: RowCardProps[] = dataWork.docs.map((work) => ({
		id: work.id,
		title: work.title,
		description: work.description,
		color: 'hsl(var(--primary))',
		thumbnail: work.image as Media,
		category: work.category!.value,
		url: work.url!
	}));

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full dark:bg-neutral-dark-2 bg-neutral-light-1">

				<div className="relative flex justify-center w-full mt-8 mb-8 ">
					<p className="z-10 w-full p-10 font-serif font-light text-center text-7xl text-neutral-dark-3 dark:text-neutral-light-1">
						Criamos trabalhos bonitos, funcionais e com tecnologias avançadas que elevam e unificam as experiências em todas as superfícies da marca.
					</p>
				</div>


				<div className={'flex flex-row items-center justify-start gap-4 px-10 py-0'}>
					<p>Filtros:</p>
					{/* <CategoriesMenu /> */}
				</div>


				<WorkCard cards={rowCards} />
			</Container>
		</PageWrapper>
	);
}

export const revalidate = 60;
