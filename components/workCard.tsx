import Image from 'next/image';
import imageLoader from '@/app/helpers/loader';
import Link from 'next/link';

import { Media, WorksCategory } from '@/payload-types';
import { ReactElement } from 'react';
import classNames from 'classnames';

export type RowCardProps = {
	id: number,
	slug: string,
	title: string | null,
	description?: string | null,
	keys?: string[],
	color?: string,
	thumbnail?: Media | null | number,
	category?: WorksCategory | number,
	// clients?: ClientsProps | null,
	url?: string | null,
}

type CardsProps = { cards: RowCardProps[] }

function FinalRow({ children, card }: { children: ReactElement, card: RowCardProps }) {
	return card.url!! ? <Link href={card.url ? '/trabalho/' + card.slug : ''}>{children}</Link> : <>{children}</>
}



const WorkCard = ({ cards }: CardsProps) => {
	const cols = cards.length > 6 ? 'grid-cols-6' : 'grid-cols-' + cards.length

	return <div className={classNames(`grid w-full gap-10 px-20 py-14 dark:bg-neutral-dark-2 bg-neutral-light-1 grid-cols-10`)}>
		{cards &&
			cards?.map((card, index) => {
				const image = typeof card.thumbnail! !== 'number' && card.thumbnail?.filename !== undefined ? card.thumbnail?.filename! : '/'

				const { category } = card
				const { title } = category as WorksCategory
				return (
					<div key={card.id} className='relative col-span-2'>
						<FinalRow card={card}>
							<div className='flex-wrap items-start justify-start gap-4 rounded-3xl dark:text-neutral-light-2 group'>
								<div className='relative overflow-hidden transition-all duration-300 ease-in-out transform border rounded-3xl border-primary group-hover:scale-110'>
									{card.thumbnail! && (
										<div
											className={`relative size-full aspect-square rounded-3xl overflow-hidden`}
										>
											{card && card.thumbnail && (
												<Image
													loader={imageLoader}
													src={image}
													fill
													alt={card!.title!}
													objectFit='cover'
													className={`absolute object-left-top`}
												/>
											)}
										</div>
									)}
									{!card.thumbnail! && (
										<div className='flex items-center justify-center size-full bg-secondary aspect-square rounded-3xl'>
											<Image loader={imageLoader} src={'/images/logo-signal.svg'} width={180} height={180} alt="" />
										</div>
									)}
									<div className='absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100'>
										{card.title && (
											<h3 className={`${card.color} text-xl font-medium font-sans text-white`}>
												{card.title}
											</h3>
										)}
										<span className='bg-white text-primary text-xs font-medium mt-2 px-1.5 py-0.5 rounded self-start'>{title}</span>
									</div>
								</div>
							</div>
						</FinalRow>
					</div>
				);
			})}
	</div>
}

export default WorkCard

