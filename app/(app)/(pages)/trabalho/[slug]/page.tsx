import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";

export const revalidate = 60

export default async function Work({ params: { slug } }: { params: { slug: string } }) {

	return (
		<PageWrapper className="">
			<Container className="flex flex-col w-full bg-neutral-light-1/70 dark:bg-neutral-dark-2">
				<></>
				{/* <div className='px-6 py-6 bg-white border-b border-neutral-light-3 dark:border-neutral-dark-1 dark:bg-neutral-dark-3 '>
					<Breadcrumb title={data?.title!}></Breadcrumb>
				</div>
				<div className="gap-8 px-8 dark:bg-neutral-dark-2">
					<div className="container px-8 my-24 dark:bg-neutral-dark-2">
						<h1 className="mt-10 font-serif text-6xl text-primary text-neutral-dark-3 dark:text-neutral-light-1">{data?.title!}</h1>
						<p className="py-6 text-3xl font-italic dark:text-neutral-light-2">{data?.description!}</p>
						<ReactMarkdown className="text-2xl dark:text-neutral-light-1">{data?.content!}</ReactMarkdown>
					</div>
					{albumsData && <Albums albums={albumsData} />}
				</div> */}
			</Container>
		</PageWrapper>
	)
}