'use client';

import { ICategory } from '@/interfaces';
import { Card as FlowbiteCard, Badge } from 'flowbite-react';

export default function Card({ imgSrc, title, description, categories, client }: { imgSrc: string, title: string, description: string, client: ICategory | null, categories: ICategory | null }) {
    return (
        <FlowbiteCard
            imgAlt={title}
            imgSrc={imgSrc}
            horizontal
        >
            <h5 className="text-2xl font-sans tracking-tight text-neutral-dark-3 dark:text-neutral-light-1">
                <p>
                    {title}
                </p>
            </h5>
            <p className="font-normal text-neutral-dark-1 dark:text-neutral-light-2">
                <p>
                    {description}
                </p>
            </p>
            <div className='flex gap-2'>

            <Badge key={categories?.id} color={'gray'}>{categories?.name}</Badge>
            <Badge key={client?.id}>{client?.name}</Badge> 
            </div>
        </FlowbiteCard>
    )
}