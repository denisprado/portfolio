'use client'
import { useMenuContext } from "@/app/(app)/context/menu";
import { usePageContext } from "@/app/(app)/context/page";
import { useThemeContext } from "@/app/(app)/context/theme";
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
	const { color, setColor } = useThemeContext();
	const { active, setActive } = useMenuContext();


	console.log(page, color, active)
	return (
		<header className="relative w-full dark:bg-neutral-dark-1">
			<Container className={classNames("z-50 flex flex-row items-center w-full transition-transform delay-1000 dark:bg-neutral-dark-1")}>
				<Link href="/" className={classNames("h-16 pt-4 p-3 px-6 ",
					{ "bg-neutral-dark-3": color === 'dark' },
					{ "bg-white": color === 'light' },
					{ "bg-transparent": page === '/' },
				)}>
					<motion.img src={page === '/' ? "/images/logo-home.svg" : color === 'light' ? "/images/logo-signal.svg" : "/images/logo-signal.svg"} width={page === '/' ? 200 : 40} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-dark-1",
					{ 'bg-transparent': page === '/' },
					{ 'bg-neutral-light-1': color === 'light' },
					{ 'bg-neutral-dark-1': color === 'dark' },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
						{page !== '/' && <li><ModeToggle /></li>}
					</ul>
				</nav>
			</Container>
		</header >
	);
};