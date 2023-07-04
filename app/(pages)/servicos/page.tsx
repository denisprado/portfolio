"use client";

import { useThemeContext } from "@/app/context/theme";
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import RowCard, { RowCardProps } from "@/components/rowCard";
import Image from "next/image";

export default function Home() {

	const services: RowCardProps[] = [
		{
			id: 1,
			title: "Sua Marca",
			descriptions: "A marca é a interface da empresa com seu público. Definimos todos os seus aspectos: do projeto estratégico para a linguagem visual ao tom de voz, criamos marcas distintas, relevantes e voltadas para o futuro.",
			keys: ["Identidade Visual",
				"Naming",
				"Visual Systems",
				"Brand Strategy"],
			color: "text-destructive"
		},
		{
			id: 2,
			title: `Design System`,
			descriptions: "Dispositivos e telas são a principal oportunidade para uma marca interagir com seus usuários e aumentar sua relevância. Projetamos e desenvolvemos sites e aplicativos que aumentam as oportunidades de engajamento de forma propositiva e imersiva.",
			keys: ["Sistema de Cores",
				"UI Kits",
				"Tipografia", "UX Research",
			],
			color: "text-info"
		},
		{
			id: 3,
			title: "Presença digital",
			descriptions: "Os sistemas de design permitem que uma marca cresça infinitamente sem comprometer sua identidade. Ajudamos as empresas a criar sistemas escaláveis, digitais, interativos e atraentes, para uma experiência de marca consistente em todos os pontos de contato.",
			keys: ["UX Design",
				"Website & Mobile Design",
				"Prototyping",
				"Full Stack Development",
				"Gerenciadores de COnteúdo",
				"SEO & SEM",
				"User Testing",
				"Monitoring & Optimization"
			],
			color: "text-accent"
		}
	]

	const { color } = useThemeContext()

	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full dark:bg-neutral-dark-2 bg-neutral-light-1">
				<div className="w-full flex pt-44 justify-center relative min-h-[640px]">
					<p className="text-primary font-serif text-9xl font-light w-4/6 text-center z-10">
						Da base ao topo,<br />
						tudo o que você precisa.
					</p>
					<Image alt="backgroound" src={`./images/bg-servicos${color === 'dark' ? '-dark' : ''}.svg`} fill className="relative" style={{ 'objectFit': 'cover', objectPosition: 'top' }} />
				</div>

				{services ? <RowCard cards={services} /> : <></>}

			</Container>
		</PageWrapper>
	);
}