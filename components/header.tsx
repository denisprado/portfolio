"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { MenuItems } from "./menu";
import { useThemeContext } from "@/app/context/theme";
import { ModeToggle } from "./toggleTheme";


export const Header = () => {

	const items = [
		{ href: "/", label: "home" },
		{ href: "/quem-somos", label: "quem somos" },
		{ href: "/servicos", label: "serviços" },
		{ href: "/trabalho", label: "trabalho" },
	]

	const page = usePathname()

	const { color, setColor } = useThemeContext();

	return (
		<header className="relative z-10 w-full">
			<Container className={classNames("flex flex-row items-center w-full", { 'absolute': page === '/' })}>

				<Link href="/" className={classNames("h-16 pl-3 pr-5 pt-4 pb-3",
					{ "bg-neutral-dark-3": color === 'dark' },
					{ "bg-transparent": page === '/' },
				)}>
					<motion.img src={color === 'light' || page === '/' ? "./images/logo.svg" : "./images/logo-servicos.svg"} width={200} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-dark-1",
					{ 'bg-transparent': page === '/' },
					{ 'bg-neutral-light-1': color === 'light' },
					{ 'bg-neutral-dark-1': color === 'dark' },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
						<li><ModeToggle /></li>
					</ul>
				</nav>
			</Container>
		</header >
	);
};