import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as {
			name?: string;
			email?: string;
			message?: string;
		};

		const name = body.name?.trim();
		const email = body.email?.trim();
		const message = body.message?.trim();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ message: "Nome, email e mensagem são obrigatórios." },
				{ status: 400 }
			);
		}

		const smtpHost = process.env.SMTP_HOST;
		const smtpUser = process.env.SMTP_USER;
		const smtpPass = process.env.SMTP_PASS;

		if (!smtpHost || !smtpUser || !smtpPass) {
			return NextResponse.json(
				{ message: "Configuração de email indisponível." },
				{ status: 500 }
			);
		}

		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: 587,
			secure: false,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		await transporter.sendMail({
			from: smtpUser,
			to: "contato@plato.dev.br",
			subject: "[PLATO.DEV.BR] Novo formulário de contato",
			text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
		});

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
