import { Container } from "@/components/container"
import { PageWrapper } from "@/components/page-wrapper"

export default async function SlugLayout({
	children
}: {
	children: React.ReactNode
}) {

	return (
		<PageWrapper className="overflow-hidden">
			<Container className="flex flex-col w-full bg-white dark:bg-neutral-dark-2">
				{children}
			</Container>
		</PageWrapper>
	);
}

export const revalidate = 60;
