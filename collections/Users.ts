import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "title",
  },
  auth: true,

  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
