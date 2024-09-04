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
				{children}
			</Container>
		</PageWrapper>
	);
}

export const revalidate = 60;
