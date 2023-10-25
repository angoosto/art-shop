"use client";
import DetailView from "../components/DetailView";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Piece } from "../types";
import Skeleton from "../components/Skeleton";

export default function singleView() {
  const [loading, setLoading] = useState<boolean>(true);
  const [piece, setPiece] = useState<Piece>();
  const path = usePathname();
  const title = path?.substring(1);
  useEffect(() => {
    fetch("api/piece", {
      headers: {
        title: title || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPiece(data as Piece);
        setLoading(false);
      });
  }, []);
  return loading ? <Skeleton /> : <DetailView piece={piece!} />;
}
