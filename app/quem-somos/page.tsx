"use client";

// import HorizontalScroller from "../../components/horizontalScroller";
import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";
import { Breadcumb } from "@/components/breadcumb";
import Image from 'next/image'
import RowCard, { RowCardProps } from "@/components/rowCard";

const team: RowCardProps[] = [
	{
		title: "Denis Forigo",
		descriptions: "Designer gráfico com mais de 10 anos de experiência, recentemente trabalhando com Design de Produto (UI/UX) e desenvolvimento mobile em squads com metodologia Scrum e Design Thinking.",
		keys: ["Desenvolvedor Full Stack",
			"Designer Gráfico",
			"UX/UI Designer", "Frontend developer",
		],
		color: "text-primary"
	},

]


export default function Home() {
	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper>
			<Container className="flex flex-col py-16 mx-auto gap-8 w-4/6 my-12">
				<Image src={"./images/logo-quem-somos.svg"} alt="" width={860 * 2} height={157 * 2} className="object-contain" />
				<p className="text-4xl font-serif">Na Platô, somos apaixonados por desenvolvimento web e acreditamos no poder de uma presença online eficaz. Somos especializados em criar experiências digitais excepcionais, combinando a expertise em UX/UI com uma abordagem personalizada para atender às necessidades específicas de cada cliente.</p>
				<div className="columns-3">
					<p>Na Platô, unimos expertise em UX/UI a uma abordagem personalizada para criar soluções web que atendem às necessidades únicas de cada cliente. Nossa paixão é desenvolver experiências digitais belas e envolventes.</p>
					<p>Compreendemos seu público-alvo, definimos metas claras e projetamos interfaces intuitivas, amigáveis e memoráveis. Valorizamos a personalização, adaptando nossos serviços para refletir a identidade da sua marca.</p>
					<p>Utilizamos tecnologias modernas e otimizadas para um desempenho excepcional e escalabilidade futura. Priorizamos seu atendimento e trabalhamos em estreita colaboração em todas as etapas do processo.</p>
				</div>
				{/* <div id="slider" className="[&_img]:mr-4 col-span-10 bg-neutral-dark-2 flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
					<HorizontalScroller />
				</div> */}
			</Container>
			<RowCard cards={team} />
		</PageWrapper >
	);
}