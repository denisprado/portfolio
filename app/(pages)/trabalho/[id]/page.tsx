import supabase from "@/utils/supabase"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from "react"

export default async function Work({ params }: { params: { id: string } }) {
    const { data, error } = await getWork()

    const work = data?.filter(w => w.id === params.id)

    if (!work) {
        return
    }
    const markdown = await work[0]?.content!

    return (
        <>
            <h1>{work[0].title}</h1>
            <Suspense fallback={<>Loading...</>}>
                <MDXRemote
                    source={markdown}
                />
            </Suspense>
        </>
    )
}

async function getWork() {
    const { data, error } = await supabase
        .from('work')
        .select(`id, title, thumbnail, description, category (
		id, name
	), client ( id, name )`)


    return { data, error }
}

