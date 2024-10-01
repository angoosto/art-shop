"use client";
import { ChangeEvent, useState } from "react";
import { Piece } from "../types";
import ArtCard from "./ArtCard";
import { CgSortAz } from "react-icons/cg";

interface Props {
  pieces: Piece[];
}

const ArtGrid = ({ pieces }: Props) => {
  const [sortType, setSortType] = useState<string>("newest");
  function handleSort(event: ChangeEvent<HTMLSelectElement>): void {
    if (pieces === undefined) return;
    setSortType(event.target.value);
    switch (event.target.value) {
      case "cheapest":
        pieces = pieces.sort((a, b) => a.price.valueOf() - b.price.valueOf());
        console.log(event);
        break;
      case "dearest":
        pieces = pieces.sort((a, b) => b.price.valueOf() - a.price.valueOf());
        break;
      case "newest":
      default:
        pieces = pieces.sort(
          (a, b) => b.year.getFullYear() - a.year.getFullYear()
        );
        break;
    }
  }
  return (
    <section className="py-10 font-poppins bg-primary w-full">
      <div className="ml-10 flex items-center">
        <CgSortAz />
        <select
          id="sort-select"
          onChange={handleSort}
          value={sortType}
          className="border-2 border-accent p-2 rounded-lg"
        >
          <option value={"newest"}>Newest first</option>
          <option value={"cheapest"}>Price low to high</option>
          <option value={"dearest"}>Price high to low</option>
        </select>
      </div>

      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 a">
          {pieces.map((p) => {
            return <ArtCard key={p.id} piece={p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ArtGrid;
