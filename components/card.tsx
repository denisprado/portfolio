'use client';


import { Card as FlowbiteCard, Badge } from 'flowbite-react';

export default function Card({ imgSrc, title, description, categories, client }: { imgSrc: string, title: string, description: string, client: any, categories: any }) {
	return (
		<FlowbiteCard imgAlt={title} imgSrc={imgSrc}>
			<h5 className="font-sans text-2xl tracking-tight text-neutral-dark-3 dark:text-neutral-light-1">{title}</h5>
			<p className="font-normal text-neutral-dark-1 dark:text-neutral-light-2">{description}</p>
			<div className='flex gap-2'>
				<Badge key={categories?.id} color={'gray'}>{categories?.name}</Badge>
				<Badge key={client?.id}>{client?.name}</Badge>
			</div>
		</FlowbiteCard>
	)
}