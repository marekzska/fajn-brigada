"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className='bg-white'>
      <div className='relative isolate pt-14'>
        <svg
          aria-hidden='true'
          className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        >
          <defs>
            <pattern
              x='50%'
              y={-1}
              id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
              width={200}
              height={200}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
        <div className='mx-auto w-full lg:px-32 px-6 pb-24 xl:flex xl:items-center justify-between xl:gap-x-10 xl:py-10'>
          <div className='xl:mx-auto xl:w-1/2 xl:mx-0 xl:flex-auto'>
            <h1 className='max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              IPSOS s. r. o.
            </h1>
            <h2 className='mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              renomovaná agentura pro výzkum trhu
            </h2>
            <p className='mt-6 text-lg leading-6 text-gray-600'>
              hledá tazatele pro telefonické výzkumy. Nabízíme dlouhodobou
              spolupráci a zázemí mezinárodní společnosti s více než 30letou
              tradicí na českém trhu.
              <br />
              <br />
              Možnost ranních i odpoledních směn nebo víkendů, a to dle vašich
              časových možností.
              <br />
              <br />
              Práci telefonického tazatele lze brát i jako odrazový můstek pro
              další kariérní postup v naší společnosti, což mohou potvrdit
              všichni z vedení call centra, kteří začínali právě touto pozicí.
              Zaručeně zde prohloubíte své komunikační dovednosti, které
              využijete jak v osobním, tak pracovním životě.
              <br />
              <br />
              Požadujeme: Znalost práce s PC, dobrý hlasový projev a komunikační
              dovednosti
              <br />
              <br />
              Nabízíme: Mzdu od 140Kč/hod, práce v centru Prahy či z domova,
              motivační soutěže a mimořádné finanční odměny
              <br />
              <br />
              Těšíme se na spolupráci s vámi
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <Link
                href='#'
                className='rounded-lg mx-auto sm:mx-0 bg-brigada-blue px-16 py-5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Zapoj se
              </Link>
            </div>
          </div>
          <div className='hidden xl:block mt-16 sm:mt-24 xl:mt-0 w-1/2'>
            {/* <Image
              src=''
              width={1000}
              height={1000}
              alt=''
              className='h-auto w-2/3 mx-auto rounded-full'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
