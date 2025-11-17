import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Cynthia Moyo",
    role: "Developer",
    chapter: "5: Modular Components",
    status: "Completed",
  });
}