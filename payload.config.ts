import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import Logo from "./components/logo";
import { Media } from "./collections/Media";
import { Members } from "./collections/Members";
import { Users } from "./collections/Users";
import { Services } from "./collections/Services";
import { Works } from "./collections/Works";
import { WorksCategory } from "./collections/WorksCategory";
import { Gallery } from "./collections/Gallery";
import ContactForm from "./collections/ContactForms";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import nodemailer from "nodemailer";
import { pt } from "payload/i18n/pt";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: Logo as any,
      },
    },
    dateFormat: "dd/mm/yyyy",
    meta: {
      titleSuffix: "- Platô Development",
    },
  },
  email: nodemailerAdapter({
    defaultFromAddress: "denisforigo@gmail.com",
    defaultFromName: "Payload",
    // Any Nodemailer transport
    transport: nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST || process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER || process.env.SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS || process.env.SMTP_PASS,
      },
    }),
  }),

  csrf: [
    // whitelist of domains to allow cookie auth from
    "http://localhost:3000",
    "https://plato.dev.br",
  ],
  collections: [
    ContactForm,
    Members,
    Services,
    Works,
    WorksCategory,
    Gallery,
    Users,
    Media,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  i18n: { supportedLanguages: { pt } },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
      },
    }),
  ],
});
