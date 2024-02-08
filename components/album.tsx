'use client'

import supabaseLoader from '../supabase-image-loader'
import { Tables } from '@/types/supabase';
import supabase from "@/utils/supabase";
import Image, { ImageLoader } from 'next/image';
import { useEffect, useState } from 'react';
export const revalidate = 60


const Album = ({ album, index }: { album: Tables<'albums'>, index: number }) => {
	const [images, setImages] = useState<Tables<'images'>[]>([]);

	const isOdd = index % 2 !== 0
	console.log(isOdd)
	useEffect(() => {
		const fetchImages = async () => {
			if (album && album.id) {
				const { data: imagesData, error } = await supabase
					.from('images')
					.select('*')
					.eq('album_id', album.id);

				if (error) {
					console.error(error);
					return;
				}

				setImages(imagesData || []);
			}
		};

		fetchImages();
	}, [album]);

	return (
		<div className='flex flex-col h-full gap-4 m-8'>
			<div className='flex flex-row h-full gap-8'>
				<div className='flex flex-col w-3/12 gap-2 text-neutral-dark-3 dark:text-neutral-light-1'>

					<div>{album.title}</div>
					<div>{album.description}</div>
				</div>
				<div className='flex flex-col flex-1 w-full h-full gap-4'>
					{images.map((image) => {
						const file = image.file_path
						const title = image.title
						const description = image.description
						const src = image.id + '/' + JSON.parse(file)[0].name as string
						const video = JSON.parse(file)[0].url as string
						const ext = src && src!.match(/\.([^.]+)$/)![1]!;
						return (
							<div key={image.id} className={'flex flex-col gap-2 mb-4'}>
								<div className="min-w-full border mockup-browser bg-base-300">
									<div className="mockup-browser-toolbar">
										<div className="input">https://bcconsulting.com.br</div>
									</div>
									<div className="relative flex items-start justify-start w-full h-full bg-base-200">
										{ext !== 'mp4' ? <Image
											loader={supabaseLoader}
											src={src}
											alt={image.title}
											width={1920}
											height={914}
											style={{ objectFit: 'contain' }}
											className={'w-full h-full'}
										/> :
											<video
												autoPlay
												loop
												muted
												className={'object-cover w-full h-full'} // Removido "fixed" daqui
												style={{ height: '100%' }} // Definido altura para 100%
											>
												<source src={video} type="video/mp4" />
											</video>
										}
									</div>
								</div>
								<div className='flex flex-row gap-4'>
									<div>{title}</div>
									<div>{description}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Album