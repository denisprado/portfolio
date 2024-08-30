'use client'
import { usePageContext } from "@/app/(app)/context/page";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { MenuItems } from "./menu";
import { ModeToggle } from "./toggleTheme";


export const Header = () => {

	const items = [
		{ href: "/", label: "home" },
		{ href: "/quem-somos", label: "quem somos" },
		{ href: "/servicos", label: "serviços" },
		{ href: "/trabalho", label: "trabalho" },
	]

	const { page } = usePageContext()
	const { resolvedTheme: theme } = useTheme();

	const isHome = page === '/'

	return (
		<header className="relative w-full bg-white dark:bg-neutral-dark-1">
			<Container className={classNames("z-50 flex flex-row items-center w-full transition-transform delay-1000 dark:bg-neutral-dark-1", { 'absolute': isHome })}>
				<Link href="/" className={classNames("h-16 pt-4 p-3 px-6 ",
					{ "bg-transparent": isHome },
					{ "bg-neutral-dark-3": theme === 'dark' && !isHome },
					{ "bg-white": theme === 'light' && !isHome },
				)}>
					<motion.img src={page === '/' ? "/images/logo-home.svg" : theme === 'light' ? "/images/logo-signal.svg" : "/images/logo-signal.svg"} width={page === '/' ? 200 : 40} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-light-1",
					{ 'bg-transparent': isHome },
					{ 'bg-neutral-light-1': theme === 'light' && !isHome },
					{ 'bg-neutral-dark-1': theme === 'dark' && !isHome },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
						{/* {page !== '/' && <li><ModeToggle /></li>} */}
					</ul>
				</nav>
			</Container>
		</header >
	);
};