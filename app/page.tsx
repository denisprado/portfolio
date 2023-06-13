import Link from "next/link";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";

export default function Home() {
	return (
		<PageWrapper className="h-screenHeightWithoutHeader bg-[url(/bg-home-plato.jpg)] bg-cover bg-center ">
			<Container className=" flex h-full flex-col pt-24 text-center text-2xl">

				<p className="mx-auto max-w-xl text-5xl text-neutral-light-1 font-italic">
					Sua presença digital<br />elevada ao mais alto nível.
				</p>


			</Container>
		</PageWrapper>
	);
}