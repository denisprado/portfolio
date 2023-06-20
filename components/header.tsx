"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { MenuItems } from "./menu";

const links = [
	{ href: "/quem-somos", label: "quem somos" },
	{ href: "/servicos", label: "serviços" },
	{ href: "/trabalho", label: "trabalho" },

];

export const Header = () => {
	const path = usePathname();
	const duration = 0.3;
	const servicos = path === '/servicos';

	return (
		<header className="relative z-10 w-full">
			<Container className="flex flex-row items-center">

				<Link href="/" className={classNames("h-16 px-4 py-3", { "bg-neutral-dark-3": servicos })}>
					<motion.img src={!servicos ? "./images/logo.svg" : "./images/logo-servicos.svg"} width={200} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center", { "bg-neutral-dark-1": servicos }, { "bg-neutral-light-1": !servicos })}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems />
					</ul>
				</nav>
			</Container>
		</header >
	);
};