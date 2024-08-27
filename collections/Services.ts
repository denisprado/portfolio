import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
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
      name: "color",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
