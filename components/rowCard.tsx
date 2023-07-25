import getUrlFromTable from '@/utils/getUrlFromTable';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

type CategoryProps = {
	id?: string;
	name?: string | null;
}
type ClientsProps = {
	id?: string;
	name?: string | null;
}

export type RowCardProps = {
	id: string,
	title: string | null,
	description: string | null,
	keys?: string[],
	color: string,
	image?: string,
	thumbnail?: string | null,
	category?: CategoryProps | null,
	clients?: ClientsProps | null,
	url?: boolean,
}

type CardsProps = { cards: RowCardProps[] }

function FinalRow({ children, url, id }: { children: ReactElement, url: boolean, id?: string | null }) {
	return url ? <Link href={id ? '/trabalho/' + id : ''}>{children}</Link> : <>{children}</>
}

const RowCard = ({ cards }: CardsProps) => {
	return <div className='p-24 dark:bg-neutral-dark-2 bg-neutral-light-1'>
		{
			cards && cards?.map(card => (
				<FinalRow url={card?.url!} id={card?.id!} key={card?.id!}>
					<div key={card.id} className="flex flex-col md:items-center md:flex-row justify-between dark:bg-neutral-dark-1 dark:text-neutral-light-2 dark:border-neutral-light-3 border-t bg-white border-neutral-dark-1 last:border-b p-12">
						<div className='flex flex-row items-center justify-center gap-4'>
							{card.image && <div className='aspect-square w-24 h-24'>
								<Image src={card.image} width={96 * 2} height={96 * 2} alt={card.title!} className={'grayscale'} style={{ objectFit: 'cover' }}></Image>
							</div>
							}
							{card.thumbnail && <div className='aspect-square w-48 h-48'>
								<Image src={getUrlFromTable(card.thumbnail)} width={96} height={96} alt={card.title!} className={'grayscale'} style={{ objectFit: 'cover' }} />
							</div>
							}
							{card.title && <h3 className={`${card.color} text-8xl`}>
								<span className="font-sans">{card.title.substring(0, card.title.indexOf(" "))}</span>
								<span className="font-serif">{card.title.substring(card.title.indexOf(" "))}</span>
							</h3>}
						</div>
						<div className="w-2/6 flex flex-col">
							<p className="dark:text-neutral-light-2 mb-4 text-sm">
								{card.description}
							</p>
							<div className="columns-2">
								{card?.keys?.map((key, i) => <p className="text-mono dark:text-neutral-light-1" key={i}>{key}</p>)}
								{<p className="text-mono dark:text-neutral-light-1">{card.category?.name}</p>}
								{<p className="text-mono dark:text-neutral-light-1">{card.clients?.name}</p>}
							</div>
						</div>
					</div>
				</FinalRow>
			))
		}
	</div>
}

export default RowCard

