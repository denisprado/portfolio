"use client";

// import HorizontalScroller from "../../components/horizontalScroller";
import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";
import { Breadcumb } from "@/components/breadcumb";
import Image from 'next/image'

const items = [
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
	{
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
		exit: { opacity: 0, x: 20 },
		className: "h-full w-full object-cover",
		src: "/chair.jpg",
		alt: "Nice chair"
	},
];



export default function Home() {
	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper className="">
			<Container className="flex flex-col py-16 mx-auto gap-8 w-4/6 mt-12">
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
			<Container>
				<Breadcumb variant={"secondary"} className="mt-12"><p>HOME/QUEM SOMOS/EQUIPE</p>s</Breadcumb>
				<div className="w-full bg-neutral-dark-2 p-12">
					<div className="w-full bg-neutral-dark-1 border-y border-y-neutral-light-3 p-8 flex flex-col md:flex-row gap-4 justify-between">
						<p className="text-8xl text-primary">Denis <span className="font-serif">Forigo</span></p>
						<p className="text-neutral-light-2 w-full md:w-2/6 text-md">Graphic designer with over 10 years of experience, recently working with Product Design (UI/UX) and mobile development in squads with Scrum and Design Thinking methodology.</p>
					</div>
				</div>
			</Container>
		</PageWrapper >
	);
}