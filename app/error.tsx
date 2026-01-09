"use client";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 my-auto">
        <div className="text-center">
          <p className="text-base font-semibold text-brigada-blue">Error</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Došlo k chybě
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-brigada-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Domů
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
