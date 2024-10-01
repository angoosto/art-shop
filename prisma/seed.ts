import {
    randBetweenDate,
    randBoolean,
    randFloat,
    randProductDescription,
    randWord,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    try {
        await prisma.piece.deleteMany();
        for (let i = 0; i < 10; i++) {
            await prisma.piece.create({
                data: {
                    title: `${randWord()}${i}`,
                    description: randProductDescription(),
                    height: randFloat(),
                    width: randFloat(),
                    price: randFloat(),
                    year: randBetweenDate({ from: new Date('2020/01/01'), to: new Date() }),
                    sold: randBoolean()
                }
            })
        }
    } catch (error) {
        throw error;
    }
};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});