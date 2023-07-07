import Breadcrumb from "@/components/breadcumb";
import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import supabase from "@/utils/supabase";
import ReactMarkdown from 'react-markdown';

export default async function Work({ params }: { params: { id: string } }) {
    const { data, error } = await getWork()

    const work = data?.filter(w => w.id === params.id)

    if (!work) {
        return <></>
    }

    // const galleryData = await getGallery(work[0]?.id!)  
    // console.log(galleryData)

     const markdown = work[0]?.content!

    return (
        <PageWrapper className="overflow-hidden">
            <Container className="flex flex-col w-full bg-neutral-light-1/70 dark:bg-neutral-dark-2">
                <div className='px-6 py-6 border-b border-neutral-light-3 dark:border-neutral-dark-1 bg-white dark:bg-neutral-dark-3 dark:neutral-light-3'>
                    <Breadcrumb title={work[0]?.title!}></Breadcrumb>
                </div>
                <div className="px-96 dark:bg-neutral-dark-2  justify-center items-center container">
                    <h1 className="font-serif text-primary mt-10  text-6xl">{work[0]?.title!}</h1>
                    <p className="font-italic py-6 text-3xl dark:text-neutral-light-2">{work[0]?.description!}</p>
                    <ReactMarkdown className="text-2xl dark:text-neutral-light-1">{markdown}</ReactMarkdown>
                </div>
            </Container>
        </PageWrapper>
    )
}

async function getWork() {
    const { data, error } = await supabase
        .from('work')
        .select(`id, title, thumbnail, content, description, category (
		id, name
	), client ( id, name )`)


    return { data, error }
}

async function getGallery(id: string) {
    const { data, error } = await supabase.storage
        .from("project-images")
        .list(id + "/", {
            limit: 100,
            offset: 0,
        });

    if (data !== null) {
        return data;
    } else {

        console.log(error);
    }
}