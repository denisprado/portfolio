import slug from "@/app/fields/slug";
import type { CollectionConfig } from "payload";

export const WorksCategory: CollectionConfig = {
  slug: "worksCategory",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slug,
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
