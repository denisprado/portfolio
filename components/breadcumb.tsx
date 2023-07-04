'use client'

import { Breadcrumb as FlowbiteBreadcumb } from 'flowbite-react'
import { HomeIcon } from 'lucide-react';

export default function Breadcrumb({ title }: { title: string }) {
    return (
        <FlowbiteBreadcumb>
            <FlowbiteBreadcumb.Item
                href="/"
                icon={HomeIcon}
            >
                <p>Home</p>
            </FlowbiteBreadcumb.Item>
            <FlowbiteBreadcumb.Item
                href="/trabalho"
            >
                <p>Trabalhos</p>
            </FlowbiteBreadcumb.Item>
            <FlowbiteBreadcumb.Item
            >
                <p>{title}</p>
            </FlowbiteBreadcumb.Item>
        </FlowbiteBreadcumb>
    )
}