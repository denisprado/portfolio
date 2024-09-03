import nodemailer from "nodemailer";
import { CollectionConfig, getPayload } from "payload";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { getNextRequestI18n } from "@payloadcms/next/utilities";

const ContactForm: CollectionConfig = {
  slug: "contact-forms",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        try {
          
          await .sendEmail({
            from: '"Seu Site" <noreply@seusite.com>',
            to: "denisforigo@gmail.com",
            subject: "Nova mensagem de contato",
            text: `
              Nome: ${doc.name}
              Email: ${doc.email}
              Mensagem: ${doc.message}
            `,
          });
        } catch (error) {
          console.error("Erro ao enviar e-mail:", error);
        }
      },
    ],
  },
};

export default ContactForm;
