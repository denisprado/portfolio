'use client'
import { LogoHeader } from "@components/logoHeader";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Container } from "./container";
import { MenuItems } from "./menu";

const items = [
	{ href: "/", label: "home" },
	{ href: "/quem-somos", label: "quem somos" },
	{ href: "/servicos", label: "serviços" },
	{ href: "/trabalho", label: "trabalho" },
	{ href: "/contato", label: "contato", icon: <FaEnvelope size={20} /> },
];

export const Header = () => {
	const [isHovered, setIsHovered] = useState(false);
	const page = usePathname();
	const isImagePage = page === '/' || page === '/contato';

	return (
		<header className="relative w-full bg-white">
			<Container className={classNames("z-50 flex flex-row items-center w-full transition-transform delay-1000", { 'absolute': isImagePage })}>
				<Link
					href="/"
					className={classNames(
						"h-16 pt-4 p-3 px-6 relative overflow-visible",
						{
							"bg-transparent": isImagePage,
							"bg-white": !isImagePage,
							"w-[320px]": isImagePage || isHovered,
							"w-24": !isImagePage && !isHovered
						}
					)}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<LogoHeader isImagePage={isImagePage} isHovered={isHovered} />
				</Link>

				<nav className={classNames("w-full h-16 px-4 py-3 flex flex-col justify-center",
					{ 'bg-transparent': isImagePage, 'bg-neutral-light-1': !isImagePage },
				)}>
					<ul className="[&_li]:ml-4 mr-6 flex justify-end items-center">
						<MenuItems items={items} />
					</ul>
				</nav>
			</Container>
		</header>
	);
};