
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import RowCard, { RowCardProps } from "@/components/rowCard";
import configPromise from '@payload-config';
import { getPayloadHMR } from "@payloadcms/next/utilities";

export default async function Home() {

	const payload = getPayloadHMR({ config: configPromise })
	const services = (await (await payload).find({ collection: 'services' })).docs
	const cards: RowCardProps[] = services.map(m => {
		return { id: m.id, title: m.title, description: m.description, image: m.image!, color: m.color!, keys: m.skills! }
	})

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-white dark:bg-neutral-dark-1">
				<div className="w-full flex pt-44 justify-center relative min-h-[640px]">
					<p className="z-10 w-4/6 font-serif font-light text-center text-primary text-9xl">
						Da base ao topo,<br />
						tudo o que você precisa.
					</p>
				</div>

				{services ? <RowCard cards={cards} /> : <></>}

			</Container>
		</PageWrapper>
	);
}