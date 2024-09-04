import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import RowCard, { RowCardProps } from "@/components/rowCard";
import { AboutImage } from "./AboutImage";
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export default async function About() {
	const payload = getPayloadHMR({ config: configPromise })
	const members = (await (await payload).find({ collection: 'members' })).docs
	const cards: RowCardProps[] = members.map(m => {
		return { id: m.id, title: m.title, description: m.description, thumbnail: m.image!, color: m.color!, keys: m.skills! }
	})

	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper className="dark:bg-neutral-dark-3">
			<Container className="flex flex-col w-4/6 gap-12 px-24 py-16 pt-16 mx-0 bg-white dark:text-neutral-light-3 dark:bg-neutral-dark-3" >
				<AboutImage />
				<p className="font-serif text-4xl leading-snug">Na Platô, somos especializados em criar experiências digitais incríveis. Combinamos uma expertise abrangente e profunda em Tecnologia da Informação com pensamento e metodologia do Design <i>centrados no humano</i>. Tudo para atender às necessidades específicas de cada cliente.</p>

				{/* <div id="slider" className="[&_img]:mr-4 col-span-10 bg-neutral-dark-2 flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
					<HorizontalScroller />
				</div> */}
			</Container>
			<RowCard cards={cards} />

		</PageWrapper >
	);
}

export const revalidate = 60