'use client'

import { Button } from "@/components/ui/button";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMenuContext } from "./context/menu";
const HomeVideo = dynamic(() => import('@/components/homeVideo'), { ssr: false })

export default function Home() {
	const [bgLoading, setBgLoading] = useState<string>('bg-[url(/bg-video-image.png)]');
	const handleVideoLoaded = () => {
		setBgLoading("bg-transparent")
	};
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
			<PageWrapper className={`h-screen bg-center bg-cover relative z-10 ${bgLoading}`}>
				<HomeVideo handleVideoLoaded={handleVideoLoaded} src={'/bg-video.mp4'} poster={'/bg-video-image.png'}></HomeVideo>
				<Container className="z-20 flex flex-col gap-16 p-40 text-2xl">
					<p className="text-white text-8xl text-primary font-italic">
						Sua presença digital<br />elevada ao nível mais alto.
					</p>

					<div className="w-5/12">
						<p className="inline text-2xl text-white shadow-sky-700 bg-primary">Dê vida ao seu projeto com a Platô. Desenvolvimento de websites totalmente customizados e design personalizado para impulsionar sua presença online.</p>
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