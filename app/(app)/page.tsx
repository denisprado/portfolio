'use client'

import classNames from "classnames";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";
import { useMenuContext } from "./context/menu";

const HomeVideo = dynamic(() => import('@/components/homeVideo'), { ssr: false })

export default function Home() {
	const [isVideoReady, setIsVideoReady] = useState(false);
	const { setActive, setBefore } = useMenuContext();

	useEffect(function mount() {
		setActive && setActive(0);
		setBefore && setBefore(0);
	}, [setActive, setBefore]);

	return (
		<PageWrapper className="relative h-screen overflow-hidden bg-primary">
			<div className="absolute inset-0 bg-primary" />
			<Image
				src="/bg-video-image.png"
				alt=""
				fill
				priority
				sizes="100vw"
				className={classNames(
					"absolute inset-0 object-cover transition-opacity duration-500",
					{
						"opacity-100": !isVideoReady,
						"opacity-0": isVideoReady,
					}
				)}
			/>
			<HomeVideo
				handleVideoLoaded={() => setIsVideoReady(true)}
				src="/bg-video.mp4"
				poster="/bg-video-image.png"
				playbackRate={0.4}
				className={classNames(
					"absolute inset-0 size-full object-cover transition-opacity duration-700",
					{
						"opacity-0": !isVideoReady,
						"opacity-100": isVideoReady,
					}
				)}
			/>
			<div className="pointer-events-none absolute inset-0 bg-black/20" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary via-primary/80 to-transparent" />

			<Container className="relative z-20 flex flex-col gap-16 p-40 text-2xl">
				<p className="text-8xl text-white font-italic">
					Sua presenca digital
					<br />
					elevada ao nivel mais alto.
				</p>

				<div className="w-5/12">
					<p className="inline text-2xl text-white shadow-sky-700 bg-primary">
						Traga vida ao seu projeto com a Plato. Desenvolvimento de websites totalmente customizados e design personalizado para impulsionar sua presenca online.
					</p>
				</div>
				<Link href="/servicos">
					<Button variant={"default"}>
						Comece seu projeto agora
					</Button>
				</Link>
			</Container>
		</PageWrapper>
	);
}
