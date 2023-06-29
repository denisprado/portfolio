
import supabase from "@/utils/supabase";
import { Suspense } from "react";
import Image from 'next/image'

const parseJSON = (json: string | null) => {
    try {
        return json ? JSON.parse(json):''
    } catch (error) {
        return null
    }
}

export default async function Work() {
	const { data, error } = await getWork()
	
	if (error) {
		return error;
	}

	return (
		<div>
			{data?.map(async (item) => {
			
			const url = parseJSON(item?.thumbnail);
			
				return (
					<>
						<div key={item.id}>{item.title}</div>
						{url&&<div><img src={url.url} width={100} height={100} alt=""/></div>}
						<Suspense fallback={<div>Loading...</div>}>
							<div>category: {item.category?.id} - {item.category?.name}</div>
						</Suspense>
					</>
				)
			})}
		</div>
	);
};

async function getWork() {
	const { data, error } = await supabase.from('work').select(`id, title, thumbnail, category (
		id, name
	)`);

	return { data, error }
};






