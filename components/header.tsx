'use client'
import { useTheme } from "next-themes";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { MenuItems } from "./menu";
import { ModeToggle } from "./toggleTheme";
import { usePathname } from "next/navigation";
import { FaEnvelope } from 'react-icons/fa'; // Importe o ícone de envelope

export const Header = () => {

	const items = [
		{ href: "/", label: "home" },
		{ href: "/quem-somos", label: "quem somos" },
		{ href: "/servicos", label: "serviços" },
		{ href: "/trabalho", label: "trabalho" },
		{ href: "/contato", label: "contato", icon: <FaEnvelope size={20} /> }, // Novo item adicionado
	]

	const page = usePathname()
	const { resolvedTheme: theme } = useTheme();

	const isHome = page === '/'
	const isContact = page === '/contato'
	const isImagePage = isHome || isContact

	return (
		<header className="relative w-full bg-white dark:bg-neutral-dark-1">
			<Container className={classNames("z-50 flex flex-row items-center w-full transition-transform delay-1000 dark:bg-neutral-dark-1", { 'absolute': isImagePage })}>
				<Link href="/" className={classNames("h-16 pt-4 p-3 px-6 ",
					{ "bg-transparent": isImagePage },
					{ "bg-neutral-dark-3": theme === 'dark' && !isImagePage },
					{ "bg-white": theme === 'light' && !isImagePage },
				)}>
					<motion.img src={isImagePage ? "/images/logo-home.svg" : theme === 'light' ? "/images/logo-signal.svg" : "/images/logo-signal.svg"} width={isImagePage ? 200 : 40} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-light-1",
					{ 'bg-transparent': isImagePage },
					{ 'bg-neutral-light-1': theme === 'light' && !isImagePage },
					{ 'bg-neutral-dark-1': theme === 'dark' && !isImagePage },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
					</ul>
				</nav>
			</Container>
		</header >
	);
};