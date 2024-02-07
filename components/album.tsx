'use client'

import supabaseLoader from '../supabase-image-loader'
import { Tables } from '@/types/supabase';
import supabase from "@/utils/supabase";
import Image, { ImageLoader } from 'next/image';
import { useEffect, useState } from 'react';
export const revalidate = 60


const Album = ({ album }: { album: Tables<'albums'> }) => {
	const [images, setImages] = useState<Tables<'images'>[]>([]);

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
		<div className='flex flex-col h-full gap-4'>
			<div className='flex flex-col gap-2'>

				<div>{album.title}</div>
				<div>{album.description}</div>
				<div className='grid grid-cols-3 gap-4'>
					{images.map((image) => {
						const file = image.file_path
						const src = image.id + '/' + JSON.parse(file)[0].name as string

						return (
							<div key={image.id}>
								<Image
									loader={supabaseLoader}
									src={src}
									alt={image.title}
									width={300}
									height={200}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Album