import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const pieces = await prisma.piece.findMany({
        select: {
            id: true,
            title: true,
            year: true,
            description: true,
            height: true,
            width: true,
            price: true
        }
    })
    return NextResponse.json(pieces);
}