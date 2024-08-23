"use client";

import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"
import RowCard, { RowCardProps } from "@/components/rowCard";
import Image from 'next/image';
import { useThemeContext } from '../../context/theme'
import config from '@payload-config'

const team: RowCardProps[] = [
	{
		id: "1",
		title: "Denis Forigo",
		description: "Designer e Desenvolvedor, trabalha há mais de 15 anos criando design gráfico, sistemas de identidades visuais, protótipos navegáveis e websites. Trabalho para uma gama variada de clientes nacionais e internacionais, artístas, instituições, movimentos sociais e empresas. Está focado em Design de Produto (UI/UX) e desenvolvimento web em squads com metodologia Ágile e Design Thinking.",
		keys: ["Desenvolvedor Full Stack",
			"Designer Gráfico",
			"UX/UI Designer",
		],
		color: "dark:text-neutral-light-3",
		image: "/images/denis.jpg"
	},

]

export default function About() {
	const { color } = useThemeContext()


	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper className="dark:bg-neutral-dark-3">
			<Container className="flex flex-col w-4/6 gap-12 px-24 py-16 pt-16 mx-0 dark:text-neutral-light-3">
				<Image src={`./images/logo-quem-somos${color === 'dark' ? '-dark' : ''}.svg`} alt="" width={860 * 2} height={157 * 2} className="object-contain" />
				<p className="font-serif text-4xl leading-snug">Na Platô, somos especializados em criar experiências digitais incríveis. Combinamos uma expertise abrangente e profunda em Tecnologia da Informação com pensamento e metodologia do Design <i>centrados no humano</i>. Tudo para atender às necessidades específicas de cada cliente.</p>

				{/* <div id="slider" className="[&_img]:mr-4 col-span-10 bg-neutral-dark-2 flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
					<HorizontalScroller />
				</div> */}
			</Container>
			<RowCard cards={team} />
		</PageWrapper >
	);
}