// src/app/api/responses/route.ts
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const responses = await prisma.response.findMany();
    return NextResponse.json(responses);
  } catch (error) {
    return NextResponse.json({ error: "Failed to responses" }, { status: 500 });
  }
}
