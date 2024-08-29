import { Media } from '@/payload-types';
import getUrlFromTable from '@/utils/getUrlFromTable';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

type CategoryProps = {
	id?: number;
	name?: string | null;
}
type ClientsProps = {
	id?: number;
	name?: string | null;
}

type KeysProps = {
	id?: string | null;
	skill?: string | null;
}

export type RowCardProps = {
	id: number,
	title: string | null,
	description?: string | null,
	keys?: KeysProps[] | null,
	color?: string | null,
	thumbnail?: Media | null | number,
	category?: CategoryProps | null,
	clients?: ClientsProps | null,
	url?: boolean,
}

type CardsProps = { cards: RowCardProps[] }

function FinalRow({ children, url, id }: { children: ReactElement, url: boolean, id?: number | null }) {
	return url ? <Link href={id ? '/trabalho/' + id : ''}>{children}</Link> : <>{children}</>
}


const RowCard = ({ cards }: CardsProps) => {
	return <div className='px-24 py-12 dark:bg-neutral-dark-2 bg-neutral-light-1'>
		{
			cards && cards?.map(card => {
				console.log(card.thumbnail)
				const image = typeof card.thumbnail! !== 'number' && card.thumbnail?.filename !== undefined ? '/api/media/file/' + card.thumbnail?.filename! : '/api/media/file/card-logo.svg'

				return (
					<FinalRow url={card?.url!} id={card?.id!} key={card.id}>
						<div key={card.id} className="flex flex-col justify-between p-12 bg-white border-t md:items-end md:flex-row dark:bg-neutral-dark-1 dark:text-neutral-light-2 dark:border-neutral-light-3 border-neutral-dark-1 last:border-b">
							<div className='flex flex-row items-end justify-start w-3/5 gap-4'>
								{card.thumbnail && <div className='w-48 h-48 max-h-full aspect-square grayscale'>
									<Image src={image} width={96 * 2} height={96 * 2} alt={card.title ? card.title : ''} style={{ objectFit: 'cover', objectPosition: 'center', maxHeight: '100%' }} />
								</div>
								}
								{card.title && <h3 className={`${card.color} text-7xl leading-tight
								`}>
									<span className="font-sans" dangerouslySetInnerHTML={{ __html: card.title }}></span>
								</h3>}
							</div>
							<div className="flex flex-col w-2/5">
								<p className="mb-4 text-sm dark:text-neutral-light-2">
									{card.description}
								</p>
								<div className="columns-2">
									{card?.keys?.map((key, i) => <p className="text-mono dark:text-neutral-light-1" key={key.id}>{key.skill}</p>)}
									{<p className="text-mono dark:text-neutral-light-1">{card.category?.name}</p>}
									{<p className="text-mono dark:text-neutral-light-1">{card.clients?.name}</p>}
								</div>
							</div>
						</div>
					</FinalRow>
				)
			})
		}
	</div>
}

export default RowCard

