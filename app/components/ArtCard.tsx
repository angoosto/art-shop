import Image from "next/image";
import { Piece } from "../types";
import NextLink from 'next/link'

interface Props {
  piece: Piece;
}

const ArtCard = ({ piece }: Props) => {
  return (
    <NextLink href={`/${piece.title}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border border-stone-50">
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
          <div className="font-bold text-xl mb-2 text-slate-50">{piece.title}</div>
          <p className="text-gray-700 text-base text-slate-50">{piece.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {`£${piece.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
          </span>
        </div>
      </div>
    </NextLink>
  );
};

export default ArtCard;
