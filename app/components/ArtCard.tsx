import Image from "next/image";
import { Piece } from "../types";
import NextLink from 'next/link'

interface Props {
  piece: Piece;
}

const ArtCard = ({ piece }: Props) => {
  return (
    <NextLink href={`/${piece.title}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border">
        <Image
          className="w-full"
          src="/canvas.jpg"
          alt={`${piece.title}`}
          sizes="100vw"
          width={0}
          height={0}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-indigo-950"><i>{piece.title}</i> ({piece.year.getFullYear()})</div>
          <p className="text-gray-700 text-base text-indigo-950">{piece.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-accent rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
            {`£${piece.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
          </span>
        </div>
      </div>
    </NextLink>
  );
};

export default ArtCard;
