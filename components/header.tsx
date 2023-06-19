"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const links = [
	{ href: "/quem-somos", label: "quem somos" },
	{ href: "/servicos", label: "serviços" },
	{ href: "/trabalho", label: "trabalho" },

];

export const Header = () => {
	const path = usePathname();
	const duration = 0.3;


	return (
		<header className="relative z-10 w-full">
			<Container className="flex flex-row items-center">

				<Link href="/" className="h-20 px-4 py-5">
					<motion.img src={"./images/logo.svg"} width={200} height={40} />
				</Link>

				<nav className="bg-neutral-light-1 border w-full h-20 px-4 py-5">
					<ul className="[&_li]:ml-4 mr-12 flex justify-end items-center">
						{links.map((link, i) => {
							const selected = link.href === path;
							return (
								<motion.li key={link.href}
									layoutId="selected"
									className="rounded-full py-2 px-3 bg-neutral-light-2 text-neutral-dark-1 text-xs relative uppercase"
									initial={{
										color: selected ? "rgb(199 201 204)" : "rgb(60 60 66 )"
									}}
									animate={{
										color: selected ? "rgb(60 60 66 )" : "rgb(199 201 204 )"
									}}
									transition={{ duration }}
								>

									<Link href={link.href} className={classNames("relative z-10 text-neutral-dark-1", { 'text-neutral-light-1': selected })}>
										{link.label}
									</Link>
									{
										selected && (
											<motion.div
												className="bg-neutral-dark-2 rounded-full text-xs text-neutral-light-1 absolute w-full h-full top-0 left-0"
												layoutId="selected"
												initial={{ backgroundColor: "rgb(199 201 204 )", color: "rgb(60 60 66 )" }}
												animate={{ backgroundColor: "rgb(60 60 66 )", color: "rgb(199 201 204 )" }}
												transition={{ duration }}
											/>
										)
									}

								</motion.li>
							)
						})}
					</ul>
				</nav>
			</Container>
		</header >
	);
};