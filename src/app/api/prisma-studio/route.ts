// src/app/api/prisma-studio/route.ts

import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password");

  if (password !== process.env.DATABASE_PASSWORD) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  exec("npx prisma studio", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return NextResponse.json(
        { message: "Error starting Prisma Studio" },
        { status: 500 }
      );
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    return NextResponse.json({ message: "Prisma Studio started" });
  });

  // Return a response immediately; the exec callback will handle logging
  return NextResponse.json({ message: "Starting Prisma Studio..." });
}
