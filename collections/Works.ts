import slug from "@/app/fields/slug";
import type { CollectionConfig } from "payload";

export const Works: CollectionConfig = {
  slug: "works",
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
      name: "skills",
      type: "array",
      fields: [
        {
          name: "skill",
          type: "text",
        },
      ],
    },
    {
      name: "category",
      type: "relationship",
      relationTo: ["worksCategory"],
    },
    {
      name: "url",
      type: "text",
    },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
