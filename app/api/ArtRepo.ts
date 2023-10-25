import { Piece } from "../types";
import { prisma } from "../lib/prisma";

export async function singlePiece(titleParam: string) {
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
        where: { title: titleParam }
    })
    return piece as Piece;
}

export async function getPieces() {
    const pieces = await prisma.piece.findMany({
        select: {
            id: true,
            title: true,
            year: true,
            description: true,
            height: true,
            width: true,
            price: true,
        },
        orderBy: {
            year: "desc",
        },
    });
    return pieces as Piece[]
}