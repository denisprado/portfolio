import { PageWrapper } from "@components/page-wrapper";
import Image from 'next/image'
import imageLoader from "../helpers/loader";

export default function Loading() {

	return (
		<>
			{/* //bg-[url(/bg-home-plato.jpg)] */}
			<PageWrapper className={`flex flex-col`}>
				<Image loader={imageLoader}
					src={'/bg-video-image.png'}
					alt={''}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
					}} />
			</PageWrapper>
		</>
	);
}