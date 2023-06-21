
import supabase from "@/utils/supabase";

export default async function MinhaPagina() {
	const { data, error } = await getWork()
	if (error) {
		console.error('Erro ao buscar os dados:', error);
		return error;
	}

	return (
		<div>
			{data?.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
};

async function getWork() {
	const { data, error } = await supabase.from('work').select();

	return { data, error }
};



