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
      ({ siblingData }) => {
        if (!siblingData.slug && siblingData.title) {
          siblingData.slug = slugify(siblingData.title);
        }
      },
    ],
    afterRead: [
      ({ value, data }) => {
        return value || (data?.title ? slugify(data.title) : value);
      },
    ],
  },
};

export default slug;
