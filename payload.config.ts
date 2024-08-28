// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Members } from "./collections/Members";
import { Users } from "./collections/Users";
import { Services } from "./collections/Services";
import { Works } from "./collections/Works";
import { WorksCategory } from "./collections/WorksCategory";
import { Gallery } from "./collections/Gallery";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  csrf: [
    // whitelist of domains to allow cookie auth from
    "http://localhost:3000",
    "https://plato.dev",
  ],
  collections: [Members, Services, Works, WorksCategory, Gallery, Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
});
