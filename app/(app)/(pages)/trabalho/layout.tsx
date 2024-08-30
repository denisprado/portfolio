import { Container } from "@/components/container"
import { MenuItems } from "@/components/menu"
import { PageWrapper } from "@/components/page-wrapper"
import { SubMenuItems } from "@/components/submenu"
import WorkCard, { RowCardProps } from "@/components/workCard"
import { Media } from "@/payload-types"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"

export default async function WorkLayout({
	children
}: {
	children: React.ReactNode
}) {

	const payload = await getPayloadHMR({ config: configPromise })

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
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-white dark:bg-neutral-dark-2">

				<div className="relative flex justify-center w-full mt-8 mb-8 ">
					<p className="z-10 w-full p-10 font-serif font-light text-center text-7xl text-neutral-dark-3 dark:text-neutral-light-1">
						Criamos trabalhos bonitos, funcionais e com tecnologias avançadas que elevam e unificam as experiências em todas as superfícies da marca.
					</p>
				</div>


				<div className={'flex flex-row items-center justify-start gap-4 px-10 py-10'}>
					<p>Filtros:</p>
					<SubMenuItems items={menuCategoriesItems} />
				</div>
				{children}
			</Container>
		</PageWrapper>
	);
}

export const revalidate = 60;
