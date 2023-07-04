"use client";

import { useThemeContext } from "@/app/context/theme";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

	const [hideNav, setHideNav] = useState<boolean>(true)


	useEffect(function mount() {
		function onScroll() {
			if (window.scrollY >= 80) {
				setHideNav(false)
			}
			else {
				setHideNav(true)
			}
		}

		window.addEventListener("scroll", onScroll);

		return function unMount() {
			window.removeEventListener("scroll", onScroll);
		};
	});


	useEffect(() => {
		() => setHideNav(true)
		return () => setHideNav(false)
	})

	const page = usePathname()

	const { color, setColor } = useThemeContext();

	return (
		<header className="relative z-10 w-full">
			<Container className={classNames("flex flex-row items-center w-full", { 'absolute': page === '/' && hideNav }, { 'fixed': page === '/' && !hideNav })}>

				<Link href="/" className={classNames("h-16 pl-6 pr-5 pt-4 pb-3 ",
					{ "bg-neutral-dark-3": color === 'dark' },
					{ "bg-white": color === 'light' && !hideNav },
					{ "bg-transparent": page === '/' && hideNav },
				)}>
					<motion.img src={color === 'light' ? "./images/logo.svg" : "./images/logo-servicos.svg"} width={200} height={40} />
				</Link>

				<nav className={classNames("rounded-bl-sm w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-dark-1",
					{ 'bg-transparent': page === '/' && hideNav },
					{ 'bg-neutral-light-1': color === 'light' },
					{ 'bg-neutral-dark-1': color === 'dark' },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
						{!hideNav && <li><ModeToggle /></li>}
					</ul>
				</nav>
			</Container>
		</header >
	);
};