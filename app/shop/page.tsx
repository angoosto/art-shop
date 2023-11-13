"use client";
import ArtGrid from "../components/ArtGrid";
import { getPieces } from "../api/ArtRepo";
import { ChangeEvent, useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import { Piece } from "../types";

export default function Shop() {
  // const pieces = await getPieces();
  function handleSort(event: ChangeEvent<HTMLSelectElement>): void {
    if (pieces === undefined) return;
    switch (event.target.value) {
      case "cheapest":
        setPieces(pieces.sort((a, b) => a.price.valueOf() - b.price.valueOf()));
        console.log(event);
        break;
      case "dearest":
        setPieces(pieces.sort((a, b) => b.price.valueOf() - a.price.valueOf()));
        break;
      case "newest":
      default:
        setPieces(
          pieces.sort((a, b) => b.year.getFullYear() - a.year.getFullYear())
        );
        break;
    }
  }
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    console.log('using effect')
    fetch("api/pieces")
      .then((res) => res.json())
      .then((data) => {
        setPieces(data as Piece[]);
        // pieces?.sort((a, b) => b.year.getTime() - a.year.getTime())
        setLoading(false);
      });
  }, [pieces]);
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center">
        {loading ? (
          <Skeleton />
        ) : (
          <ArtGrid pieces={pieces!} handleSort={handleSort} />
        )}
      </div>
    </>
  );
}
