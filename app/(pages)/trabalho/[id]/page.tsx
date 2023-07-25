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
        .select('work_id')
    console.log(data)
    return data.map(({ id }: { id?: string }) => ({
        id,
    }))

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

type ParamsWork = { work_id?: string | undefined }
type WorkParams = {
    param?: ParamsWork | undefined
}

export default async function Work() {
    const params = useParams()
    console.log(params)
    

    const { data } = await supabase.from('work').select().match({ 'work_id': params?.id }).single()
    if (!data) {
        return <></>
    }
    const { data: dataGallery, error: errorGalery } = await getGallery(params?.id!)

    const imageLoader = ({ src = '', width = 250, quality = 75 }) => {
        return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/project-images/images/${data?.work_id!}/${src}?width=${width}&quality=${quality || 75}`
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
                        <Image key={file.id} src={`${file?.name!}`} alt={data?.title!} width={250} height={250} quality={100} loader={imageLoader} />)}
                    {/* <Suspense fallback={<div>Loading...</div>}>
                        <Gallery id={data?.work_id!} />
                    </Suspense>  */}
                </div>
            </Container>
        </PageWrapper>
    )
}