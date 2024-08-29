'use client'

import { Gallery, Media } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';

export const revalidate = 60

const Album = ({ album }: { album: Gallery }) => {

	const Mockup = ({ children, url }: { children: ReactNode, url: string }) => {
		return (
			<div className="min-w-full border mockup-browser bg-base-300">
				<div className="mockup-browser-toolbar">
					<div className="input"><Link href={url} target='_blank'>{url}</Link></div>
				</div>
				<div className="relative flex items-start justify-start w-full h-full bg-base-200">
					{children}
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-col h-full gap-4 m-8'>
			<div className='flex flex-row h-full gap-8'>
				<div className='flex flex-col w-3/12 gap-2 text-neutral-dark-3 dark:text-neutral-light-1'>

					<div>{album.title}</div>
					<div>{album.description}</div>
				</div>
				<div className='flex flex-col flex-1 w-full h-full gap-4'>
					{album?.images?.map((image) => {

						const file = image.image as Media
						const description = image.description
						const src = "/api/media/file/" + file?.filename!
						const n = 1
						const img = image.image as Media
						const ext = img && img!.mimeType && img!.mimeType;
						console.log(ext)
						const MockyOrNot = image.urlMock!! ? Mockup : React.Fragment

						return (
							<div key={image.id} className={'flex flex-col gap-2 mb-4'}>
								<MockyOrNot url={image.urlMock!}>

									{ext !== 'mp4' ?
										!!image.iframe ?
											<iframe src={image.iframe} className='w-full border h-[914px]'></iframe>
											:
											<Image
												src={src}
												alt={description!}
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
											<source src={src} type="video/mp4" />
										</video>
									}

								</MockyOrNot>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Album