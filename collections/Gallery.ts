import slug from "@/app/fields/slug";
import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    slug,
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "urlMock",
          type: "text",
        },
        {
          name: "iframe",
          type: "text",
        },
      ],
    },
    {
      name: "work",
      type: "relationship",
      relationTo: ["works"],
    },
  ],
};
