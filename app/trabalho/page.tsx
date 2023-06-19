"use client";

import HorizontalScroller from "../../components/horizontalScroller";
import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";

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
		<PageWrapper className="overflow-hidden row-span-2">
			<Container className="grid grid-cols-12 row-span-4">
				<div className="col-span-2 bg-neutral-dark-1 py-12 pr-4 text-neutral-light-1">
					<h1 className="mb-4 text-6xl uppercase">Foldy</h1>
					<p className="mb-1 text-xl">$3,390</p>
					<p>It is a steal! I know you want it!</p>

					<div className="mt-auto">
						<h2 className="text-xl">Description</h2>
						<p className="mt-auto">
							The Foldy chair is our latest master piece combining all assets
							nature brings. Bamboo for keeping your cheeks happy, some other
							wood for the durability and a nice towel for the hot days.
						</p>
					</div>
				</div>
				<div id="slider" className="[&_img]:mr-4 col-span-10 bg-neutral-dark-2 flex w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
					<HorizontalScroller />
				</div>
			</Container>
		</PageWrapper>
	);
}