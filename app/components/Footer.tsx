"use client";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-300 w-full md:h-64 flex relative mt-auto">
      <Image
        src="/strips.png"
        alt="strips"
        width={300}
        height={300}
        className="w-1/3 h-auto sm:h-1/3 md:h-2/3 sm:w-auto absolute top-0 left-0"
      />
      <div className="grid md:grid-cols-3 md:grid-rows-1 gap-10 sm:gap-20 w-2/3 m-auto py-10 md:py-0">
        <div className="flex flex-col gap-3 justify-center items-center">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-brigada-blue h-12 w-12"
          />
          <h3 className="text-xl sm:text-3xl font-bold">Fajn Brigáda</h3>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-lg sm:text-2xl font-bold p-0">Kontaktujte nás</h3>
          <Link
            href="mailto:cati@ipsos.cz"
            className="underline underline-offset-4"
          >
            cati@ipsos.cz
          </Link>
          <Link
            href="tel:+420724150097"
            className="underline underline-offset-4"
          >
            +420 724 150 097
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <Link
            href="#"
            className="underline underline-offset-4"
            target="_blank"
          >
            Odměny
          </Link>
          <Link
            href="https://www.ipsos.com/cs-cz/o-nas"
            className="underline underline-offset-4"
            target="_blank"
          >
            O Ipsos
          </Link>
          <Link
            href="#"
            className="underline underline-offset-4"
            target="_blank"
          >
            Zásady ochrany osobních údajů
          </Link>
        </div>
      </div>
    </div>
  );
};
