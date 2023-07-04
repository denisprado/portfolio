import { Container } from "@/components/container";
import Breadcrumb from "@/components/breadcumb";
import { PageWrapper } from "@/components/page-wrapper";
import supabase from "@/utils/supabase"
import ReactMarkdown from 'react-markdown';

export default async function Work({ params }: { params: { id: string } }) {
    const { data, error } = await getWork()

    const work = data?.filter(w => w.id === params.id)

    if (!work) {
        return
    }
    const markdown = work[0]?.content!

    return (
        <PageWrapper className="overflow-hidden">
            <Container className="flex flex-col w-full dark:bg-neutral-light-3 bg-white">
                <div className='px-8 py-6 border-b border-neutral-light-3'>
                    <Breadcrumb title={work[0]?.title!}></Breadcrumb>
                </div>
                <div className="px-96 dark:bg-neutral-light-3 justify-center items-center container">
                    <h1 className="font-serif text-primary mt-8 mb-4 text-6xl">{work[0]?.title!}</h1>
                    <p className="font-italic py-9 text-3xl">{work[0]?.description!}</p>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
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

