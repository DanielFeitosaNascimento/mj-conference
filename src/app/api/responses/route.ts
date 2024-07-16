// src/app/api/responses/route.ts
import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responses = await prisma.response.findMany();
    return NextResponse.json(responses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch responses" },
      { status: 500 }
    );
  }
}
