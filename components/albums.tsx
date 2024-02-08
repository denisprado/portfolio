
import { Tables } from '@/types/supabase';
import Album from '@/components/album'
export const revalidate = 60


const Albums = ({ albums }: { albums: Tables<'albums'>[] }) => {
	if (!albums) {
		return null
	}

	return (
		<div className='flex flex-col gap-8'>
			{albums.map((album, index) => (
				<Album key={album.id} album={album} index={index} />))}
		</div>
	)
}

export default Albums