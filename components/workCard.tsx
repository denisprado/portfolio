import Image from 'next/image';
import Link from 'next/link';

import { Media, WorksCategory } from '@/payload-types';
import { ReactElement } from 'react';

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
	console.log("cards", cards)

	return <div className='grid w-full grid-cols-6 gap-4 px-6 py-12 dark:bg-neutral-dark-2 bg-neutral-light-1'>
		{cards &&
			cards?.map((card, index) => {
				const image = typeof card.thumbnail! !== 'number' && card.thumbnail?.filename !== undefined ? '/api/media/file/' + card.thumbnail?.filename! : '/'

				const { category } = card
				return (
					<div key={card.id} className='flex-wrap items-start justify-start gap-4 rounded-3xl dark:text-neutral-light-2'>
						<FinalRow card={card}>
							<>
								<div className='flex flex-col items-start justify-start rounded-3xl'>
									{card.thumbnail! && (
										<div
											className={`relative size-full aspect-square rounded-3xl overflow-hidden`}

										>
											{card && card.thumbnail && <Image src={image} fill alt={card!.title!} objectFit='cover' objectPosition='top left' className={`image transition-transform duration-300 transform absolute object-left-top`} />}
										</div>
									)}
									{!card.thumbnail! && (
										<div className='flex items-center justify-center size-full bg-secondary aspect-square rounded-3xl'>
											<Image src={'/images/logo-signal.svg'} width={180} height={180} alt="" />
										</div>
									)}
								</div>
								<div className='flex flex-col mt-4'>
									{card.title && (
										<h3 className={`${card.color} text-xl font-medium font-sans`}>
											{card.title}
										</h3>
									)}
									<div className='columns-2'>
										{card.keys?.map((key, i) => (
											<p className='text-mono dark:text-neutral-light-1' key={i}>
												{key}
											</p>
										))}
										{/* {card.category && <p className='text-mono dark:text-neutral-light-1'>{category}</p>} */}

									</div>
								</div>
							</>
						</FinalRow>
					</div>
				);
			})}
	</div>
}

export default WorkCard

