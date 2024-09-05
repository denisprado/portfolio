'use client'
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { MenuItems } from "./menu";
import { usePathname } from "next/navigation";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import Image from "next/image";
const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 40;
const SMALL_LOGO_WIDTH = 40;

const items = [
	{ href: "/", label: "home" },
	{ href: "/quem-somos", label: "quem somos" },
	{ href: "/servicos", label: "serviços" },
	{ href: "/trabalho", label: "trabalho" },
	{ href: "/contato", label: "contato", icon: <FaEnvelope size={20} /> },
];

const Logo = ({ isImagePage, isHovered }: { isImagePage: boolean; isHovered: boolean }) => {
	return (
		<div className="relative w-[200px] h-[40px]">
			<motion.div
				className="absolute top-0 left-0"
				initial={false}
				animate={{
					width: isImagePage || isHovered ? LOGO_WIDTH : SMALL_LOGO_WIDTH,
					opacity: isImagePage || !isHovered ? 1 : 0
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Image
					src={isImagePage ? "/images/logo-home.svg" : "/images/logo-signal.svg"}
					width={isImagePage ? LOGO_WIDTH : SMALL_LOGO_WIDTH}
					height={LOGO_HEIGHT}
					alt="Logo principal"
				/>
			</motion.div>

			{!isImagePage && (
				<motion.div
					className="absolute top-0 left-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					<Image
						src="/images/logo-quem-somos.svg"
						width={LOGO_WIDTH}
						height={LOGO_HEIGHT}
						alt="Logo completo"
					/>
				</motion.div>
			)}
		</div>
	);
};

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
					<Logo isImagePage={isImagePage} isHovered={isHovered} />
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