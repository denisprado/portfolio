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

    const { data: dataGallery, error: errorGalery } = await getGallery(id!)

    const imageLoader = ({ src = '', width = 250, quality = 75 }) => {
        return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project-images/images/${data?.id!}/${src}?width=${width}&quality=${quality || 75}`
    }


    return (
        <PageWrapper className="overflow-hidden">
            <Container className="flex flex-col w-full bg-neutral-light-1/70 dark:bg-neutral-dark-2">
                <div className='px-6 py-6 border-b border-neutral-light-3 dark:border-neutral-dark-1 bg-white dark:bg-neutral-dark-3 dark:neutral-light-3'>
                    <Breadcrumb title={data?.title!}></Breadcrumb>
                </div>
                <div className="px-96 dark:bg-neutral-dark-2  justify-center items-center container">
                    <h1 className="font-serif text-primary mt-10  text-6xl">{data?.title!}</h1>
                    <p className="font-italic py-6 text-3xl dark:text-neutral-light-2">{data?.description!}</p>
                    <ReactMarkdown className="text-2xl dark:text-neutral-light-1">{data?.content!}</ReactMarkdown>
                    {dataGallery?.map((file: any) =>
                        <Image key={file.id} src={`${file?.name!}`} alt={data?.title ? data?.title : ''} width={648} height={648} quality={100} loader={imageLoader} />)}
                    {/* <Suspense fallback={<div>Loading...</div>}>
                        <Gallery id={data?.id!} />
                    </Suspense>  */}
                </div>
            </Container>
        </PageWrapper>
    )
}