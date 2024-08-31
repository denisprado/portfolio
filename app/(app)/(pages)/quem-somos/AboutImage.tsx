'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import imageLoader from "@/app/helpers/loader";

export const AboutImage = () => {
	const { resolvedTheme: theme } = useTheme();
	return <Image loader={imageLoader} src={`./images/logo-quem-somos${theme === 'dark' ? '-dark' : ''}.svg`} alt="" width={860 * 2} height={157 * 2} className="object-contain" />;
};
