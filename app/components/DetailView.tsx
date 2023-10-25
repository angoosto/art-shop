"use client";
import { MouseEvent } from "react";
import { Piece } from "../types";
import axios from "axios";
import Image from "next/image";

interface Props {
  piece: Piece;
}

const DetailView = ({ piece }: Props) => {
  const handlePay = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      { piece: piece },
      { headers: { "Content-Type": "application/json", } }
    );
    window.location.assign(data);
  };
  const d = new Date(piece.year)
  if (piece == null) {
    return <p>Error</p>;
  }
  return (
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <Image
                  src="/canvas.jpg"
                  alt={piece.title}
                  className="object-cover w-full lg:h-full "
                  sizes="100vw"
                  width={0}
                  height={0}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  <em>{piece.title}</em> - {d.getFullYear()}
                </h2>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {piece.description}
                </p>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  Height: {piece.height.toFixed(0)} cm
                  <br />
                  Width: {piece.width.toFixed(0)} cm
                </p>
                <p className="inline-block text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>
                    £
                    {piece.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button
                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    onClick={handlePay}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailView;
