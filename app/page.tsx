import { Button } from "@/components/ui/button";
import { Container } from "@components/container";
import { PageWrapper } from "@components/page-wrapper";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<PageWrapper className="h-screenHeightWithoutHeader bg-[url(/bg-home-plato.jpg)] bg-cover bg-center ">
				<Container className=" flex h-full flex-col pt-64 text-center text-2xl">

					<p className="mx-auto max-w-xl text-5xl text-neutral-light-1 font-italic">
						Sua presença digital<br />elevada ao mais alto nível.
					</p>
				</Container>
			</PageWrapper>
			<Container className="bg-neutral-dark-2 h-screenHeightWithoutHeader flex gap-4">
				<div className="flex flex-col justify-center gap-4 w-4/12 m-24">
					<p className="text-neutral-light-1 text-2xl">Dê vida à sua visão com a Platô. Desenvolvimento de sites totalmente customizáveis e design personalizado para impulsionar sua presença online. Entre em contato conosco hoje mesmo para começar. </p>
					<Link href="servicos">
						<Button variant={"default"}>
							Mais detalhes
						</Button>
					</Link>
				</div>

				<div className="w-4/12 m-24 flex flex-col justify-center ">
					<img className="text-neutral-light-1" src="./images/carousel.png" width={536} height={464} />
				</div>
			</Container>
		</>
	);
}