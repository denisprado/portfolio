import Image from 'next/image'
export type RowCardProps = {
	title: string,
	descriptions: string,
	keys: string[],
	color: string,
	image?: string
}

type CardsProps = { cards: RowCardProps[] }

const RowCard = ({ cards }: CardsProps) => {
	return <div className='p-24 bg-neutral-dark-2'>
		{
			cards && cards?.map(card => (
				<div key={card.title} className="flex flex-col md:flex-row justify-between bg-neutral-dark-1 text-neutral-light-2 border-t border-neutral-light-3 last:border-b p-12">
					{card.image && <Image src={card.image} width={88} height={88} alt={card.title}></Image>}
					<h3 className={`${card.color} text-8xl`}>
						<span className="font-sans">{card.title.substring(0, card.title.indexOf(" "))}</span>
						<span className="font-serif">{card.title.substring(card.title.indexOf(" "))}</span>
					</h3>
					<div className="w-2/6 flex flex-col">
						<p className="text-neutral-light-2 mb-4 text-sm">
							{card.descriptions}
						</p>
						<div className="columns-2">
							{card?.keys?.map(key => <p className="text-mono text-neutral-light-1" key={card.title}>{key}</p>)}
						</div>
					</div>
				</div>
			)
			)
		}
	</div>
}

export default RowCard

