"use client";

import { useThemeContext } from "@/app/(app)/context/theme";
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import RowCard, { RowCardProps } from "@/components/rowCard";
import Image from "next/image";

export default function Home() {

	const services: RowCardProps[] = [
		{
			id: "1",
			title: "Desenvolvimento total.",
			description: "Somos especialistas na criação de websites/frontends dinâmicos e backoffices robustos para atender às suas necessidades digitais. Com uma combinação de habilidades técnicas e expertise em design, construímos interfaces de usuário atraentes e responsivas que cativam os usuários desde a primeira visita. Além disso, nossos backoffices são desenvolvidos com foco na eficiência e na facilidade de uso, proporcionando a você e sua equipe as ferramentas necessárias para gerenciar com eficácia o seu negócio online. Do conceito à implementação, estamos comprometidos em entregar soluções web de alta qualidade que elevam sua presença online e impulsionam o sucesso do seu negócio.",
			keys: ["Websites personalizados",
				"Backoffices (admin)",
				"Responsividade",
				"Usabilidade"
			],
			color: "dark:text-neutral-light-3"
		},
		{
			id: "2",
			title: "Pensando bem, <br/>Design Thinking",
			description: "Em nosso processo de desenvolvimento, adotamos o design thinking como uma abordagem fundamental. Buscamos compreender profundamente os usuários de nossos produtos e seus desafios. O design thinking nos permite mergulhar nas necessidades e aspirações do público-alvo, gerando soluções inovadoras e centradas no humano. Desde a fase de pesquisa e síntese até a prototipagem e testes de usuário, cada etapa é cuidadosamente planejada para garantir que o produto final não apenas atenda, mas supere as expectativas dos nossos clientes. O resultado é uma experiência digital que não apenas funciona bem, mas também ressoa emocionalmente com seu público-alvo, criando conexões duradouras e significativas.",
			keys: ["Pesquisa", "Sintese", 'Protótipos', "testes de usuário"],
			color: "dark:text-neutral-light-3"
		},
		{
			id: "3",
			title: `Um logotipo <br/><span>para chamar de seu</span>`,
			description: "Se sua organização busca ser reconhecida e lembrada ou se você precisa se destacar no mercado, investir no desenvolvimento de uma identidade visual forte é fundamental. Aqui, nos dedicamos a criar uma imagem única e impactante para sua marca. Desde a concepção do logotipo até a definição de paletas de cores e tipografia, trabalhamos para garantir que sua identidade visual transmita a essência e os valores da sua empresa ou organização de forma eficaz. Nosso objetivo é criar uma identidade visual memorável e coesa, que não apenas destaque sua marca, mas também estabeleça uma conexão duradoura com seu público-alvo.",
			keys: ["Logotipo",
				"Paleta de cores",
				"Tipografia",
				"Manual de Identidade",
			],
			color: "dark:text-neutral-light-3"
		},

	]

	const { color } = useThemeContext()

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-neutral-light-1 dark:bg-neutral-dark-2">
				<div className="w-full flex pt-44 justify-center relative min-h-[640px]">
					<p className="z-10 w-4/6 font-serif font-light text-center text-primary text-9xl">
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