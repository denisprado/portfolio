'use client';

import { Footer as FooterBite } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

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
							<FooterBite.Link href="#">
								Discord Server
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Twitter
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Facebook
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Contact Us
							</FooterBite.Link>
						</FooterBite.LinkGroup>
					</div>
					<div>
						<FooterBite.Title title="Trabalho" />
						<FooterBite.LinkGroup col>
							<FooterBite.Link href="#">
								Privacy Policy
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Licensing
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Terms & Conditions
							</FooterBite.Link>
						</FooterBite.LinkGroup>
					</div>
					<div>
						<FooterBite.Title title="download" />
						<FooterBite.LinkGroup col>
							<FooterBite.Link href="#">
								iOS
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Android
							</FooterBite.Link>
							<FooterBite.Link href="#">
								Windows
							</FooterBite.Link>
							<FooterBite.Link href="#">
								MacOS
							</FooterBite.Link>
						</FooterBite.LinkGroup>
					</div>
				</div>
				<div className="w-full bg-neutral-dark-1 px-4 py-6 sm:flex sm:items-center sm:justify-between">
					<FooterBite.Copyright
						by="Platô"
						href="/"
						year={2022}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterBite.Icon
							href="#"
							icon={BsFacebook}
						/>
						<FooterBite.Icon
							href="#"
							icon={BsInstagram}
						/>
						<FooterBite.Icon
							href="#"
							icon={BsTwitter}
						/>
						<FooterBite.Icon
							href="#"
							icon={BsGithub}
						/>
					</div>
				</div>
			</div>
		</FooterBite>
	)
}


