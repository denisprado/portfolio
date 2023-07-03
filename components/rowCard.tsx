import Image from 'next/image'
export type RowCardProps = {
	id: number
	title: string,
	descriptions: string,
	keys: string[],
	color: string,
	image?: string
}

type CardsProps = { cards: RowCardProps[] }

const RowCard = ({ cards }: CardsProps) => {
	console.log(cards)
	return <div className='p-24 dark:bg-neutral-dark-2 bg-neutral-light-1'>
		{
			cards && cards?.map(card => (
				<div key={card.id} className="flex flex-col md:items-center md:flex-row justify-between dark:bg-neutral-dark-1 dark:text-neutral-light-2 dark:border-neutral-light-3 border-t bg-white border-neutral-dark-1 last:border-b p-12">
					<div className='flex flex-row items-center justify-center gap-4'>
						{card.image && <div className='aspect-square w-24 h-24'>
							<Image src={card.image} width={96} height={96} alt={card.title} className={'grayscale'} style={{ objectFit: 'cover' }}></Image>
						</div>
						}
						<h3 className={`${card.color} text-8xl`}>
							<span className="font-sans">{card.title.substring(0, card.title.indexOf(" "))}</span>
							<span className="font-serif">{card.title.substring(card.title.indexOf(" "))}</span>
						</h3>
					</div>
					<div className="w-2/6 flex flex-col">
						<p className="dark:text-neutral-light-2 mb-4 text-sm">
							{card.descriptions}
						</p>
						<div className="columns-2">
							{card?.keys?.map((key, i) => <p className="text-mono dark:text-neutral-light-1" key={i}>{key}</p>)}
						</div>
					</div>
				</div>
			)
			)
		}
	</div>
}

export default RowCard

