"use client";

import { Breadcumb } from "@/components/breadcumb";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";
import { useThemeContext } from "../context/theme";

export default function Home() {

	type serviceProps = {
		title: string,
		descriptions: string,
		keys: string[],
		color: string
	}

	const { color, setColor } = useThemeContext();

	useEffect(() => {
		setColor && setColor('dark')
		return () => setColor && setColor('light')
	}, [color])

	const services: serviceProps[] = [
		{
			title: "Sua Marca",
			descriptions: "A marca é a interface da empresa com seu público. Definimos todos os seus aspectos: do projeto estratégico para a linguagem visual ao tom de voz, criamos marcas distintas, relevantes e voltadas para o futuro.",
			keys: ["Identidade Visual",
				"Naming",
				"Visual Systems", "Voice & Narrative",
				"Messaging Frameworks",
				"Brand Strategy"],
			color: "text-destructive"
		},
		{
			title: `Design System`,
			descriptions: "Dispositivos e telas são a principal oportunidade para uma marca interagir com seus usuários e aumentar sua relevância. Projetamos e desenvolvemos sites e aplicativos que aumentam as oportunidades de engajamento de forma propositiva e imersiva.",
			keys: ["Identidade Visual",
				"Naming",
				"Visual Systems", "Voice & Narrative",
				"Messaging Frameworks",
				"Brand Strategy"],
			color: "text-info"
		},
		{
			title: "Presença digital",
			descriptions: "Os sistemas de design permitem que uma marca cresça infinitamente sem comprometer sua identidade. Ajudamos as empresas a criar sistemas escaláveis, digitais, interativos e atraentes, para uma experiência de marca consistente em todos os pontos de contato.",
			keys: ["UX Design",
				"Prototipação",
				"Website & Mobile Design",
				"Full Stack Development",
				"Backoffice",
				"Estatatísticas de acesso"
			],
			color: "text-accent"
		}
	]

	return (
		// Hiding the overflow for now, we're not building building the scrolling
		// functionality of the images ;)
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-neutral-dark-2">
				<div className="w-full flex pt-36 justify-center relative min-h-[640px]">
					<p className="font-serif italic text-8xl font-light text-neutral-light-1 w-3/6 text-center z-10">
						Da base ao topo,<br />
						tudo o que você precisa.
					</p>
					<Image alt="backgroound" src="./images/bg-servicos.svg" fill className="relative" style={{ 'objectFit': 'cover', objectPosition: 'top' }} />
				</div>
				<div className="bg-neutral-dark-2 p-8">
					{services.map(service => {
						return (
							<div key={service.title} className="flex flex-col md:flex-row justify-between bg-neutral-dark-1 text-neutral-light-2 border-t border-neutral-light-3 last:border-b p-12">
								<h3 className={`${service.color} text-8xl`}>
									<span className="font-sans">{service.title.substring(0, service.title.indexOf(" "))}</span>
									<span className="font-serif">{service.title.substring(service.title.indexOf(" "))}</span>
								</h3>
								<div className="w-2/6 flex flex-col">
									<p className="text-neutral-light-2 mb-4">
										{service.descriptions}
									</p>
									<div className="columns-2">
										{service?.keys?.map(key => <p className="text-neutral-light-1" key={service.title}>{key}</p>)}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</Container>
		</PageWrapper>
	);
}