import Image from "next/image";

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 40;
const SMALL_LOGO_WIDTH = 40;

interface LogoProps {
	isImagePage?: boolean;
	isHovered?: boolean;
	variant?: 'default' | 'login';
}

export default function Logo() {

	return (
		<div className="relative w-[200px] h-[40px]">
			<Image
				src="/images/logo-signal.svg"
				width={400}
				height={80}
				alt="Logo principal"
			/>
		</div>
	)
}