
import Card from "@/components/card";
import supabase from "@/utils/supabase";

const parseJSON = (json: string | null) => {
	try {
		return json ? JSON.parse(json) : ''
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

		<div className="grid grid-cols-4 w-full gap-4 p-4 container">
			{data?.map(async (item) => {
				const url = parseJSON(item?.thumbnail)
				return (
					<div className="col-span-1 w-full grid"><Card imgSrc={url ? url[0]?.url : '/images/card-logo.svg'} title={item.title!} description={item.description!} categories={item.category} client={item.client} /></div>
				)
			})}
		</div>

	);
};

async function getWork() {
	const { data, error } = await supabase
		.from('work')
		.select(`id, title, thumbnail, description, category (
		id, name
	), client ( id, name )`);

	return { data, error }
};






