"use client";

import { useMenuContext } from "@/app/context/menu";
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
	const page = usePathname()

	const [hideNav, setHideNav] = useState<boolean>(true)
	const { color, setColor } = useThemeContext();
	const { active, setActive } = useMenuContext();

	useEffect(function mount() {
		page === '/' && setActive && setActive(0)
		setHideNav(true)
		setActive && setActive(0)

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

	return (
		<header className="relative w-full dark:bg-neutral-dark-1">
			<Container className={classNames("z-50 flex flex-row items-center w-full transition-transform delay-1000 dark:bg-neutral-dark-1", { 'absolute': page === '/' && hideNav }, { 'fixed': page === '/' && !hideNav })}>
				<Link href="/" className={classNames("h-16 pt-4 p-3 px-6 ",
					{ "bg-neutral-dark-3": color === 'dark' },
					{ "bg-white": color === 'light' && !hideNav },
					{ "bg-transparent": page === '/' && hideNav },
				)}>
					<motion.img src={hideNav && page === '/' ? "/images/logo-home.svg" : color === 'light' ? "/images/logo-signal.svg" : "/images/logo-signal.svg"} width={page === '/' ? 200 : 40} height={40} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center bg-neutral-dark-1",
					{ 'bg-transparent': page === '/' && hideNav },
					{ 'bg-neutral-light-1': color === 'light' },
					{ 'bg-neutral-dark-1': color === 'dark' },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
						{!(hideNav && page === '/') && <li><ModeToggle /></li>}
					</ul>
				</nav>
			</Container>
		</header >
	);
};