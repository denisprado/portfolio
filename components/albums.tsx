
import { Tables } from '@/types/supabase';
import Album from '@/components/album'
export const revalidate = 60


const Albums = ({ albums }: { albums: Tables<'albums'>[] }) => {
	if (!albums) {
		return null
	}

	return (
		<div>
			{albums.map((album) => (
				<Album key={album.id} album={album} />))}
		</div>
	)
}

export default Albums