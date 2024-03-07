'use client'
import { SubMenuContextProvider } from "@/app/context/submenu"
import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
import WorkCard, { RowCardProps } from "@/components/workCard"
import { SubMenuItems } from "@/components/submenu"
import { Tables } from "@/types/supabase"
import supabase from "@/utils/supabase"
import { useEffect, useState } from "react"

export default function Work() {
	const [dataWork, setDataWork] = useState<RowCardProps[]>([]);
	const [dataCategories, setDataCategories] = useState<Tables<'category'>[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [errorCategories, setErrorCategories] = useState<Error | null>(null);
	const [catActive, setCatActive] = useState<string>('c896bf85-293b-4f71-8b0c-63192b60c48b');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: workData, error: workError } = await getWork();
				if (workError) throw new Error(workError.message);
				setDataWork(workData || []);
				const { data: categoriesData, error: categoriesError } = await getCategories();

				if (categoriesError) throw new Error(categoriesError.message);
				setDataCategories(categoriesData || []);

			} catch (error) {
				setError(error as Error);
			}
		};

		fetchData();
	}, []);

	const handleCatActive = (catId: string) => {
		setCatActive(catId);
	};

	const items = dataCategories.map((cat) => ({
		label: cat.name!,
		href: "#",
		handleClick: () => handleCatActive(cat.id),

	}));

	const CategoriesMenu = () => {
		return SubMenuItems({ items: items });
	};

	const rowCards: RowCardProps[] = dataWork.map((work) => ({
		id: work.id,
		title: work.title,
		image: work.image,
		description: work.description,
		color: 'var(hsl(--primary))',
		thumbnail: work.thumbnail,
		category: work.category,
		url: true
	})).filter(work => work.category?.id === catActive);

	console.log("rowCards", rowCards, "catActive", catActive)

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full dark:bg-neutral-dark-2 bg-neutral-light-1">


				<div className="relative flex justify-center w-full mt-8 mb-8 ">
					<p className="z-10 w-full p-10 font-serif font-light text-center text-7xl text-neutral-dark-3 dark:text-neutral-light-1">
						Criamos trabalhos bonitos, funcionais e com tecnologias avançadas que elevam e unificam as experiências em todas as superfícies da marca.
					</p>
				</div>

				<SubMenuContextProvider >
					<div className={'flex flex-row items-center justify-start gap-4 px-10 py-0'}>
						<p>Filtros:</p>
						<CategoriesMenu />
					</div>
				</SubMenuContextProvider>

				<WorkCard cards={rowCards} />
			</Container>
		</PageWrapper>
	);
}

async function getWork() {
	const { data, error } = await supabase
		.from('work')
		.select(`*, category (
            id, name
        ), client ( id, name )`);
	return { data, error };
}

async function getCategories() {
	const { data, error } = await supabase
		.from('category')
		.select(`*`)
		.order('created_at', { ascending: false });
	return { data, error };
}

export const revalidate = 60;
