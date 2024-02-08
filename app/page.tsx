'use client'

import DefaultCarousel from "@/components/caroussel";
import { Button } from "@/components/ui/button";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMenuContext } from "./context/menu";

export default function Home() {


	const { active, setActive, setBefore } = useMenuContext();
	useEffect(function mount() {
		setActive && setActive(0)
		setBefore && setBefore(0)
	}, [setBefore]);

	const router = useRouter();

	// This function will be called when the user enters the page
	const handleEnterPage = () => {
		// Force a rerender by reloading the current page
		router.refresh();
	};

	// Register the enter event
	useEffect(() => {
		handleEnterPage();

		// Clean up the event listener on component unmount
		return () => {
			handleEnterPage();
		};
	}, []); // Empty dependency array to run the effect only once

	const test = typeof window !== 'undefined' && document.querySelector('video');
	if (test) {
		test.playbackRate = .4
	}

	return (
		<>
			{/* //bg-[url(/bg-home-plato.jpg)] */}
			<PageWrapper className="h-screen bg-center bg-cover ">
				<video autoPlay muted loop className={'video'} poster={'/bg-video-image.png'}>
					<source src="./bg-video.mp4" type="video/mp4" />
				</video>
				<Container className="flex flex-col gap-16 p-40 text-2xl">
					<p className="text-white text-8xl text-primary font-italic">
						Sua presença digital<br />elevada ao nível mais alto.
					</p>

					<div className="w-5/12 ">
						<p className="text-2xl text-white shadow-sky-700">Dê vida à sua visão com a Platô. Desenvolvimento de sites totalmente customizados e design personalizado para impulsionar sua presença online. Entre em contato conosco hoje mesmo para começar. </p>
					</div>
					<Link href="servicos">
						<Button variant={"default"}>
							Comece seu projeto agora
						</Button>
					</Link>
					{/* <div className="flex items-center justify-center w-6/12 h-full">
					<DefaultCarousel />
				</div> */}
				</Container>
			</PageWrapper>
		</>
	);
}