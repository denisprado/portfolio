'use client';

import {
	Footer as FooterBite,
	FooterBrand,
	FooterCopyright,
	FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from 'flowbite-react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
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
		title: "Presenca digital",
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
		title: "Presenca digital",
	}
]

export default function Footer() {
	return (
		<FooterBite bgDark>
			<div className="w-full">
				<div className="grid w-full grid-cols-6 gap-8 px-24 py-10 sm:grid-cols-6 bg-neutral-dark-3 content">
					<div>
						<FooterBrand
							alt="Plato Logo"
							href="/"
							src="/images/logo-servicos.svg"
						/>
					</div>
					<div></div>
					<div>
						<FooterTitle title="Quem somos" />
						<FooterLinkGroup col>
							<FooterLink href="#">
								A Plato
							</FooterLink>
							<FooterLink href="#">
								Equipe
							</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<FooterTitle title="Servicos" />
						<FooterLinkGroup col>
							{services.map(service =>
								<FooterLink href="/servicos" key={service.id}>
									{service.title}
								</FooterLink>)
							}
						</FooterLinkGroup>
					</div>
					<div>
						<FooterTitle title="Trabalho" />
						<FooterLinkGroup col>
							{works.map(work =>
								<FooterLink href="/trabalho" key={work.id}>
									{work.title}
								</FooterLink>)
							}
						</FooterLinkGroup>
					</div>
				</div>
				<div className="w-full px-4 py-6 bg-neutral-dark-1 sm:flex sm:items-center sm:justify-between">
					<FooterCopyright
						by="Plato"
						href="/"
						year={2022}
					/>
					<div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
						<FooterIcon
							href="#"
							icon={BsInstagram}
						/>
						<FooterIcon
							href="#"
							icon={BsLinkedin}
						/>
					</div>
				</div>
			</div>
		</FooterBite>
	)
}
