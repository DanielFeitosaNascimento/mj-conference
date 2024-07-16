// src/app/api/submit/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const {
    fullName,
    attendedBefore,
    partOfChurch,
    churchName,
    attendedBy,
    rating,
    feedback,
  } = body;

  try {
    const response = await prisma.response.create({
      data: {
        fullName,
        attendedBefore,
        partOfChurch,
        churchName,
        attendedBy,
        rating,
        feedback,
      },
    });

    return NextResponse.json({
      message: "Response saved successfully",
      response,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to save response" },
      { status: 500 }
    );
  }
}