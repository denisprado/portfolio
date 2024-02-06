'use client'

import { useParams } from 'next/navigation'
import Breadcrumb from "@/components/breadcumb";
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import supabase from "@/utils/supabase";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation'

export const revalidate = 60
export async function generateStaticParams() {
	const { data, error } = await supabase
		.from('work')
		.select('id')

	return data?.map(({ id }) => ({
		id: id,
	})) as any[] | Promise<any[]>

}

async function getAlbum(id: string) {
	const { data, error } = await supabase
		.from('albums')
		.select('id')
		.eq('id', id)

	return { data, error }
}

async function getImagesFromAlbum(albumId: string) {
	const { data, error } = await supabase
		.from('images')
		.select()
		.eq('album_id', albumId)
	console.log(data)
	return { data, error }
}

async function getGallery(id: string) {
	const { data, error } = await supabase.storage
		.from("project-images")
		.list("images/" + id + "/", {
			limit: 100,
			offset: 0,
		})

	return { data, error }

}

export default async function Work({ params: { id } }: { params: { id: string } }) {

	const { data } = await supabase.from('work').select().match({ 'id': id }).single()

	const { data: dataGallery, error: errorGalery } = await getImagesFromAlbum(id!)

	const imageLoader = ({ src = '', width = 250, quality = 75 }) => {
		return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/albums/${data?.id!}/${src}?width=${width}&quality=${quality || 75}`
	}

	console.log(data?.albums_id)

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-neutral-light-1/70 dark:bg-neutral-dark-2">
				<div className='px-6 py-6 bg-white border-b border-neutral-light-3 dark:border-neutral-dark-1 dark:bg-neutral-dark-3 dark:neutral-light-3'>
					<Breadcrumb title={data?.title!}></Breadcrumb>
				</div>
				<div className="container items-center justify-center px-96 dark:bg-neutral-dark-2">
					<>
						<h1 className="mt-10 font-serif text-6xl text-primary">{data?.title!}</h1>
						<p className="py-6 text-3xl font-italic dark:text-neutral-light-2">{data?.description!}</p>
						<ReactMarkdown className="text-2xl dark:text-neutral-light-1">{data?.content!}</ReactMarkdown>
						{
							data?.albums_id!.map(async (albumId: string) => {
								const { data: dataAlbum, error: errorAlbum } = await getAlbum(albumId!)


								return <div key={albumId}></div>
							}

							)
						}
					</>
				</div>
			</Container>
		</PageWrapper>
	)
}