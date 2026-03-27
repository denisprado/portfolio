import { RowCardProps } from "@/components/workCard";
import { Gallery, Work, WorksCategory } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayload } from "payload";

const getPayloadClient = () => getPayload({ config: configPromise });

const getCategoryValue = (category: Work["category"]): WorksCategory | undefined => {
	if (!category || typeof category === "number") {
		return undefined;
	}

	return typeof category.value === "number" ? undefined : (category.value as WorksCategory);
};

export const mapWorkToRowCard = (work: Work): RowCardProps => ({
	id: work.id,
	slug: work.slug ?? "",
	title: work.title,
	description: work.description,
	color: "hsl(var(--primary))",
	thumbnail: work.image,
	category: getCategoryValue(work.category),
	url: work.url ?? null,
});

export async function getAllWorkCards() {
	const payload = await getPayloadClient();
	const dataWork = await payload.find({
		collection: "works",
		sort: "order",
		depth: 1,
	});

	return dataWork.docs.map(mapWorkToRowCard);
}

export async function getWorkCardsByCategorySlug(categorySlug: string) {
	const payload = await getPayloadClient();
	const worksResult = await payload.find({
		collection: "works",
		sort: "order",
		depth: 1,
	});

	return worksResult.docs
		.filter((work) => getCategoryValue(work.category)?.slug === categorySlug)
		.map(mapWorkToRowCard);
}

export async function getWorkBySlug(slug: string) {
	const payload = await getPayloadClient();
	const workResult = await payload.find({
		collection: "works",
		depth: 1,
		limit: 1,
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return workResult.docs[0] ?? null;
}

export async function getAlbumsByWorkId(workId: number): Promise<Gallery[]> {
	const payload = await getPayloadClient();
	const albumsResult = await payload.find({
		collection: "gallery",
		depth: 1,
	});

	return albumsResult.docs.filter((album) => {
		if (!album.work || album.work.relationTo !== "works") {
			return false;
		}

		return typeof album.work.value === "number"
			? album.work.value === workId
			: album.work.value.id === workId;
	});
}
