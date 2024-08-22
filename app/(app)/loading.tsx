import { PageWrapper } from "@components/page-wrapper";
import Image from 'next/image'

export default function Loading() {

	return (
		<>
			{/* //bg-[url(/bg-home-plato.jpg)] */}
			<PageWrapper className={`flex flex-col`}>
				<Image
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