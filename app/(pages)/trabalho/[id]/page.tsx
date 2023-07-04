import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import supabase from "@/utils/supabase"
import ReactMarkdown from 'react-markdown';

export default async function Work({ params }: { params: { id: string } }) {
    const { data, error } = await getWork()

    const work = data?.filter(w => w.id === params.id)

    if (!work) {
        return
    }
    const markdown = await work[0]?.content!

    return (
        <PageWrapper className="overflow-hidden">
            <Container className="flex flex-col w-full dark:bg-neutral-dark-3 bg-white ">
                <div className="dark:bg-neutral-light-3 justify-center items-center container h-screenHeightWithoutHeader">
                    <h1>{work[0].title}</h1>
                    <p>{work[0].description}</p>
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

