'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import imageLoader from '@/app/helpers/loader';
export default function DefaultCarousel() {
	return (
		<Carousel>
			<Image
				alt="..."
				src="/images/carousel.png"
				width={400}
				height={400}
			/>
			<Image
				alt="..."
				src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
				width={400}
				height={400}
			/>
			<Image
				alt="..."
				src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
				width={400}
				height={400}
			/>
			<Image
				alt="..."
				src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
				width={400}
				height={400}
			/>
			<Image
				alt="..."
				src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
				width={400}
				height={400}
			/>
		</Carousel>
	)
}