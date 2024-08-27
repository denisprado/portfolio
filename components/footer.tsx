'use client';

import { Footer as FooterBite } from 'flowbite-react';
import { LinkedinIcon } from 'lucide-react';
import { BsInstagram } from 'react-icons/bs';
import { RowCardProps } from './rowCard';


const services: RowCardProps[] = [
	{
		id: 1,
		title: "Sua Marca",
	},
	{
		id: 2,
		title: `Design System`,
	},
	{
		id: 3,
		title: "Presença digital",
	}
]

const works: RowCardProps[] = [
	{
		id: 1,
		title: "Sua Marca",
	},
	{
		id: 2,
		title: `Design System`,
	},
	{
		id: 3,
		title: "Presença digital",
	}
]

export default function Footer() {
	return (
		<FooterBite bgDark>
			<div className="w-full">
				<div className="grid w-full grid-cols-6 gap-8 px-24 py-10 sm:grid-cols-6 bg-neutral-dark-3 content">
					<div>
						<FooterBite.Brand
							alt="Platô Logo"
							href="/"
							src="/images/logo-servicos.svg"
						/>
					</div>
					<div></div>
					<div>
						<FooterBite.Title title="Quem somos" />
						<FooterBite.LinkGroup col>
							<FooterBite.Link href="#">
								A Platô
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Equipe
							</FooterBite.Link>
						</FooterBite.LinkGroup>
					</div>
					<div>
						<FooterBite.Title title="Serviços" />
						<FooterBite.LinkGroup col>
							{services.map(service =>
								<FooterBite.Link href="/servicos" key={service.id}>
									{service.title}
								</FooterBite.Link>)
							}
						</FooterBite.LinkGroup>
					</div>
					<div>
						<FooterBite.Title title="Trabalho" />
						<FooterBite.LinkGroup col>
							{/* {services.map(service =>
								<FooterBite.Link href="/servicos">
									{service.title}
								</FooterBite.Link>)
							} */}
						</FooterBite.LinkGroup>
					</div>
				</div>
				<div className="w-full px-4 py-6 bg-neutral-dark-1 sm:flex sm:items-center sm:justify-between">
					<FooterBite.Copyright
						by="Platô"
						href="/"
						year={2022}
					/>
					<div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">

						<FooterBite.Icon
							href="#"
							icon={BsInstagram}
						/>
						<FooterBite.Icon
							href="#"
							icon={LinkedinIcon}
						/>
					</div>
				</div>
			</div>
		</FooterBite>
	)
}


