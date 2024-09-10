import { SubMenuItems } from "@/components/submenu"
import configPromise from '@payload-config'
import { getPayloadHMR } from "@payloadcms/next/utilities"


const WorkIntro = async () => {
	const payload = await getPayloadHMR({ config: configPromise })

	const dataCategories = await payload.find({
		collection: 'worksCategory',
		sort: 'id'
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


			<div className={'flex flex-row items-center gap-4 px-10 py-8 justify-center'}>
				<p className="text-sm uppercase">Filtros:</p>
				<SubMenuItems items={menuCategoriesItems} />
			</div>
		</>
	)
}

export default WorkIntro;