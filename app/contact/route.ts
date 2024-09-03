import { NextRequest, NextResponse } from "next/server";
import payload from "payload";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const result = await payload.create({
      collection: "contact-forms",
      data: body,
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
