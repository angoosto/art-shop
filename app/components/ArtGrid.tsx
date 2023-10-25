import { Piece } from "../types";
import ArtCard from "./ArtCard";

interface Props {
  pieces: Piece[];
}

const ArtGrid = ({ pieces }: Props) => {
  return (
    <section className="py-10 font-poppins bg-primary w-full">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 a">
          {pieces
            .sort((a, b) => b.year.getTime() - a.year.getTime())
            .map((p) => {
              return <ArtCard key={p.id} piece={p} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ArtGrid;
