'use client'

import DefaultCarousel from "@/components/caroussel";
import { Button } from "@/components/ui/button";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";
import Link from "next/link";
import { useEffect } from "react";
import { useMenuContext } from "./context/menu";

export default function Home() {

	
	const { active, setActive } = useMenuContext();
	useEffect(function mount() {
		setActive && setActive(0)
	});
	
	return (
		<>
			<PageWrapper className="h-screen bg-[url(/bg-home-plato.jpg)] bg-cover bg-center ">
				<Container className="flex h-full flex-col pt-36 text-center text-2xl">
					<p className=" mx-auto text-7xl text-primary font-italic">
						Sua presença digital<br />elevada ao nível mais alto.
					</p>
				</Container>
			</PageWrapper>
			<Container className="bg-neutral-dark-2 h-screenHeightWithoutHeader flex gap-24 p-24 w-full justify-center items-center">
				<div className="flex flex-col justify-center gap-4 w-6/12">
					<p className="text-neutral-light-1 text-2xl">Dê vida à sua visão com a Platô. Desenvolvimento de sites totalmente customizáveis e design personalizado para impulsionar sua presença online. Entre em contato conosco hoje mesmo para começar. </p>
					<Link href="servicos">
						<Button variant={"default"}>
							Mais detalhes
						</Button>
					</Link>
				</div>
				<div className="w-6/12 h-full flex items-center justify-center">
					<DefaultCarousel />
				</div>
			</Container>
		</>
	);
}