import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const title = req.headers.get("title")
    const piece = await prisma.piece.findUnique({
        select: {
            id: true,
            title: true,
            year: true,
            description: true,
            height: true,
            width: true,
            price: true
        },
        where: { title: title || '' }
    })
    return NextResponse.json(piece);
}