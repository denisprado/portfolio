import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 40;
const SMALL_LOGO_WIDTH = 40;

interface LogoProps {
	isImagePage?: boolean;
	isHovered?: boolean;
	variant?: 'default' | 'login';
}

export const LogoHeader = ({ isImagePage = false, isHovered = false }: LogoProps) => {

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
