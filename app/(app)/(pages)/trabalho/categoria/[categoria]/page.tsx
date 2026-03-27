import WorkCard from "@/components/workCard"
import WorkIntro from "@/components/workIntro"
import { getWorkCardsByCategorySlug } from "@/lib/works"

export default async function WorkList({ params }: { params: Promise<{ categoria: string }> }) {
	const { categoria } = await params;
	const rowCards = await getWorkCardsByCategorySlug(categoria);

	return (
		<>
			<WorkIntro />
			<WorkCard cards={rowCards} />
		</>
	);
}

export const revalidate = 60;
