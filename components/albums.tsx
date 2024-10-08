

import Album from '@/components/album'
import { Gallery } from '@/payload-types'
export const revalidate = 60


const Albums = ({ albums }: { albums: Gallery[] }) => {
	if (!albums) {
		return null
	}

	return (
		<div className='flex flex-col gap-8'>
			{albums.map((album) => (
				<Album key={album.id} album={album} />
			))}
		</div>
	)
}

export default Albums