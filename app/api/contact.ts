import { NextApiRequest, NextApiResponse } from "next";
import payload from "payload";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await payload.create({
        collection: "contact-forms",
        data: req.body,
      });
      res.status(200).json({ message: "Formulário enviado com sucesso" });
    } catch (error) {
      console.error("Erro ao processar formulário:", error);
      res.status(500).json({ message: "Erro ao processar formulário" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
