'use client';

import { ICategory } from '@/interfaces';
import { Card as FlowbiteCard, Badge } from 'flowbite-react';

export default function Card({ imgSrc, title, description, categories, client }: { imgSrc: string, title: string, description: string, client: ICategory | null, categories: ICategory | null }) {
    return (
        <FlowbiteCard
            imgAlt={title}
            imgSrc={imgSrc}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    {title}
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    {description}
                </p>
            </p>
             <Badge key={categories?.id}>{categories?.name}</Badge> 
             <Badge key={client?.id}>{client?.name}</Badge> 
        </FlowbiteCard>
    )
}