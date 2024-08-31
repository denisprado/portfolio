import imageLoader from '@/app/helpers/loader'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function ServiceImage() {
	const { resolvedTheme: theme } = useTheme()
	return (
		<Image loader={imageLoader} alt="backgroound" src={`./images/bg-servicos${theme === 'dark' ? '-dark' : ''}.svg`} fill className="relative" style={{ 'objectFit': 'cover', objectPosition: 'top' }} />
	)
}