import { NextRequest, NextResponse } from "next/server";
import payload from "payload";
import { buildConfig } from "payload";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST || process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER || process.env.SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS || process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SMTP_USER || process.env.SMTP_USER,
      to: "contato@plato.dev.br",
      subject: "[PLATO.DEV.BR] Novo formulário de contato",
      text: `Nome: ${body.name}\nEmail: ${body.email}\nMensagem: ${body.message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Formulário enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      {
        message: "Erro ao processar formulário",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
