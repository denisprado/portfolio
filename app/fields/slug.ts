import { slugify } from "../helpers/functions";
import { Field } from "payload";

const slug: Field = {
  name: "slug",
  type: "text",
  unique: true,
  index: true,
  admin: {
    hidden: true,
  },
  hooks: {
    beforeValidate: [
      async ({ siblingData }) => {
        if (!siblingData.slug && siblingData.title) {
          siblingData.slug = await slugify(siblingData.title);
        }
      },
    ],
  },
};

export default slug;
