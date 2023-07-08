'use client'

import Breadcrumb from "@/components/breadcumb";
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import supabase from "@/utils/supabase";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';


async function getWork(id: string) {
    const { data, error } = await supabase
        .from('work')
        .select(`work_id, title, thumbnail, description, content, category (
		id, name
	), client ( id, name )`)
        .eq('work_id', id)
        .single()

    return { data, error }

}

async function getGallery(id: string) {
    const { data, error } = await supabase.storage
        .from("project-images")
        .list("images/" + id + "/", {
            limit: 100,
            offset: 0,
        })
    console.log(data)

    return { data, error }

}

export default async function Work({ params }: { params: { id: string } }) {
    const { data, error } = await getWork(params?.id)
    const { data: dataGallery, error: errorGalery } = await getGallery(params?.id)

    const CDNURL = process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images/" + params.id + '/';
    // const galleryData = await getGallery(work[0]?.id!)  
    // console.log(galleryData)

    const imageLoader = ({ src = '', width = 250, quality = 75 }) => {
        return `https://${process.env.NEXT_PUBLIC_SUPABASE_URL}.supabase.co/storage/v1/object/public/project-images/images/${src}?width=${width}&quality=${quality || 75}`
    }


    return (
        <PageWrapper className="overflow-hidden">
            <Container className="flex flex-col w-full bg-neutral-light-1/70 dark:bg-neutral-dark-2">
                <div className='px-6 py-6 border-b border-neutral-light-3 dark:border-neutral-dark-1 bg-white dark:bg-neutral-dark-3 dark:neutral-light-3'>
                    <Breadcrumb title={data?.title!}></Breadcrumb>
                </div>
                <div className="px-96 dark:bg-neutral-dark-2  justify-center items-center container">
                    <h1 className="font-serif text-primary mt-10  text-6xl">{data?.title}</h1>
                    <p className="font-italic py-6 text-3xl dark:text-neutral-light-2">{data?.description}</p>
                    <ReactMarkdown className="text-2xl dark:text-neutral-light-1">{data?.content!}</ReactMarkdown>
                    {dataGallery?.map((file: any) =>
                        <Image srcSet={file.name} alt={file.name} width={250} height={250} style={{ objectFit: 'cover' }} quality={100} loader={imageLoader}>

                        </Image>)}
                    {/* <Suspense fallback={<div>Loading...</div>}>
                        <Gallery id={data?.work_id!} />
                    </Suspense>  */}
                </div>
            </Container>
        </PageWrapper>
    )
}