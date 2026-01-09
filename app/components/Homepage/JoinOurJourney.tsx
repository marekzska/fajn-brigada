"use client";
import Link from "next/link";

export const JoinOurJourney = () => {
  return (
    <div className="bg-[#1c2d4e] w-full h-64 text-white flex flex-col items-center justify-center">
      <div className="text-lg sm:text-2xl md:text-4xl font-bold">
        Přidejte se na naši společnou cestu
      </div>
      <Link
        href="/MANUÁL PRO VOLÁNÍ Z DOMOVA_FB.pdf"
        className="rounded-lg text-sm sm:text-lg md:text-2xl font-bold py-6 px-16 bg-brigada-blue mt-10"
        target="_blank"
      >
        Projít si materiály
      </Link>
    </div>
  );
};
