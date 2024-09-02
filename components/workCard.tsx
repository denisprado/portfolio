import Image from 'next/image';
import imageLoader from '@/app/helpers/loader';
import Link from 'next/link';

import { Media, WorksCategory } from '@/payload-types';
import { ReactElement } from 'react';
import classNames from 'classnames';

type CategoryProps = {
	id?: number;
	name?: string | null;
}
type ClientsProps = {
	id?: number;
	name?: string | null;
}

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
					<div key={card.id} className='flex-wrap items-start justify-start gap-4 rounded-3xl dark:text-neutral-light-2 col-span-2'>
						<FinalRow card={card}>
							<>
								<div className='flex flex-col items-start justify-start border rounded-3xl border-primary'>
									{card.thumbnail! && (
										<div
											className={`relative size-full aspect-square rounded-3xl overflow-hidden img-wrapper `}

										>
											{card && card.thumbnail && <Image loader={imageLoader} src={image} fill alt={card!.title!} objectFit='cover' className={`image transition-transform duration-300 transform absolute object-left-top `} />}
										</div>
									)}
									{!card.thumbnail! && (
										<div className='flex items-center justify-center size-full bg-secondary aspect-square rounded-3xl'>
											<Image loader={imageLoader} src={'/images/logo-signal.svg'} width={180} height={180} alt="" />
										</div>
									)}
								</div>
								<div className='flex flex-row items-baseline mt-4'>
									<div className='flex flex-col flex-1 '>
										{card.title && (
											<h3 className={`${card.color} text-xl font-medium font-sans`}>
												{card.title}
											</h3>
										)}


									</div>
									<span className='bg-white text-primary text-xs font-medium me-2 px-1.5 py-0.5 rounded'>{title}</span></div>
							</>
						</FinalRow>
					</div>
				);
			})}
	</div>
}

export default WorkCard

