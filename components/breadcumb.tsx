'use client'

import { Breadcrumb, BreadcrumbItem } from 'flowbite-react'
import { HomeIcon } from 'lucide-react';

export default function BreadcrumbNav({ title }: { title: string }) {
    return (
        <Breadcrumb>
            <BreadcrumbItem
                href="/"
                icon={HomeIcon}
            >
                <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbItem
                href="/trabalho"
            >
                <p>Trabalhos</p>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <p>{title}</p>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
