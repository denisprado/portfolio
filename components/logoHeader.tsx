import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LOGO_WIDTH = 200;
const LOGO_HOME_WIDTH = 168;
const LOGO_HOME_HEIGHT = 31;
const LOGO_FULL_WIDTH = 840;
const LOGO_FULL_HEIGHT = 156;
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
					width={isImagePage ? LOGO_HOME_WIDTH : SMALL_LOGO_WIDTH}
					height={isImagePage ? LOGO_HOME_HEIGHT : LOGO_HEIGHT}
					alt="Logo principal"
					priority={isImagePage}
					style={{ width: "100%", height: "auto" }}
					sizes={`${LOGO_WIDTH}px`}
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
						width={LOGO_FULL_WIDTH}
						height={LOGO_FULL_HEIGHT}
						alt="Logo completo"
						style={{ width: "100%", height: "auto" }}
						sizes={`${LOGO_WIDTH}px`}
					/>
				</motion.div>
			)}
		</div>
	);
};
