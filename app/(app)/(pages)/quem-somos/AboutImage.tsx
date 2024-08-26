'use client'
import Image from "next/image";
import { useThemeContext } from "../../context/theme";

export const AboutImage = () => {
	const { color } = useThemeContext();
	return <Image src={`./images/logo-quem-somos${color === 'dark' ? '-dark' : ''}.svg`} alt="" width={860 * 2} height={157 * 2} className="object-contain" />;
};
