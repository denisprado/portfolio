import { useThemeContext } from '@/app/context/theme';
import getUrlFromTable from '@/utils/getUrlFromTable';
import { motion } from 'framer-motion';
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
	description?: string | null,
	keys?: string[],
	color?: string,
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


const WorkCard = ({ cards }: CardsProps) => {
	const { color, setColor } = useThemeContext();
	return <div className='grid w-full grid-cols-4 gap-4 px-6 py-12 dark:bg-neutral-dark-2 bg-neutral-light-1'>
		{
			cards && cards?.map(card => {

				return (
					<div key={card.id} className="flex-wrap items-start justify-start gap-4 rounded-3xl dark:text-neutral-light-2 ">
						<FinalRow url={card?.url!} id={card?.id!} key={card.id}>
							<>
								<div className='flex flex-col items-start justify-start rounded-3xl'>
									{card.thumbnail!! ? <div className='relative size-full aspect-square rounded-3xl'>
										<Image src={getUrlFromTable(card.thumbnail!)} fill alt={card.title!} style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '1.5rem' }}></Image></div>
										:
										<div className='flex items-center justify-center size-full bg-secondary aspect-square rounded-3xl'>
											<motion.img src={color === 'light' ? "/images/logo-signal.svg" : "/images/logo-signal.svg"} width={180} height={180} />
										</div>
									}
								</div>
								<div className="flex flex-col mt-4">
									{card.title && <h3 className={`${card.color} text-xl font-medium font-sans`}>
										{card.title}
									</h3>}
									<div className="columns-2">
										{card?.keys?.map((key, i) => <p className="text-mono dark:text-neutral-light-1" key={i}>{key}</p>)}
										{<p className="text-mono dark:text-neutral-light-1">{card.category?.name}</p>}
										{<p className="text-mono dark:text-neutral-light-1">{card.clients?.name}</p>}
									</div>
								</div>
							</>
						</FinalRow>
					</div>
				)
			})
		}
	</div>
}

export default WorkCard

