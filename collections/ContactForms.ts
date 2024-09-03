import { CollectionConfig } from "payload";

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
      async ({ doc, operation, req }) => {
        try {
          await req.payload.sendEmail({
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
