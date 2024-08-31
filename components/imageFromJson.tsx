import imageLoader from '@/app/helpers/loader';
import Image, { ImageProps, } from 'next/image'

export default function ImageFromTable({ image, props }: { image: string, props: ImageProps }) {
	const img = image && typeof image === "string" ? JSON.parse(image) : "";
	const url = img ? img[0]?.url : "/images/card-logo.svg"
	return <Image loader={imageLoader}  {...props} src={url} />
}