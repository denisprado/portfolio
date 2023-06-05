"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";

const links = [
	{ href: "/quem somos", label: "quem somos" },
	{ href: "/o que fazemos", label: "Our Story" },
	{ href: "/workshop", label: "Workshop" },

];

export const Header = () => {
	const path = usePathname();
	const duration = 0.3;
	const [hover, setHover] = useState<number | null>(null);

	const handleMouseEnter = (i: number | null) => {
		setHover(i);
	};

	return (
		<header className="relative z-10 w-full">
			<Container className="grid grid-cols-12 grid-rows-[12] items-center">
				<div className="col-span-2 row-span-4 bg-slate-300 h-16 place-content-center px-4 py-8">
					<Link href="/">
						<motion.img src={"./images/logo.svg"} width={200} height={40} />
					</Link>
				</div>
				<nav className="bg-neutral-light-1 grid row-span-4 col-span-10 h-16">
					<ul className="[&_li]:ml-4 mr-12 flex justify-end items-center">
						{links.map((link, i) => {
							const selected = link.href === path;
							return (
								<motion.li key={link.href}
									layoutId="selected"
									onMouseEnter={() => handleMouseEnter(i)}
									onMouseLeave={() => setHover(null)}
									className="rounded-full py-2 px-3 bg-neutral-light-2 text-xs relative uppercase"
									initial={{
										color: selected || hover ? "rgb(199 201 204 / var(--tw-bg-opacity))" : "rgb(60 60 66 / var(--tw-bg-opacity))"
									}}
									animate={{
										color: selected ? "rgb(60 60 66 / var(--tw-bg-opacity))" : "rgb(60 60 66 / var(--tw-bg-opacity))"
									}}
									transition={{ duration }}
								>

									<Link href={link.href} className={classNames("relative z-10", { "text-neutral-light-1": hover === i })}>
										{link.label}
									</Link>
									{
										hover === i && (
											<motion.div
												className="bg-neutral-dark-2 rounded-full text-xs text-neutral-light-1 absolute w-full h-full top-0 left-0"
												layoutId="selected"
												initial={{ backgroundColor: "rgb(199 201 204 / var(--tw-bg-opacity))", color: hover ? "rgb(199 201 204 / var(--tw-bg-opacity))" : "rgb(60 60 66 / var(--tw-bg-opacity))" }}
												animate={{ backgroundColor: "rgb(60 60 66 / var(--tw-bg-opacity))", color: "rgb(199 201 204 / var(--tw-bg-opacity))" }}
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