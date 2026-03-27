import WorkCard from "@/components/workCard"
import WorkIntro from "@/components/workIntro"
import { getAllWorkCards } from "@/lib/works"

export default async function Work() {
	const rowCards = await getAllWorkCards();

	return (
		<>
			<WorkIntro />
			<WorkCard cards={rowCards} />
		</>

	);
}

export const revalidate = 60;
