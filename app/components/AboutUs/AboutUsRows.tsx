"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { QuestionRows } from "./QuestionRows";
import { questions } from "@/app/model/constants/questions";
import { PeopleSlugsEnum } from "@/app/model/enums/peopleSlugsEnum";
import Link from "next/link";

const people = [
  {
    name: "Karolína Mašková",
    slug: PeopleSlugsEnum.KAJA,
    role: "CATI Director",
    imageUrl: "/kaja.jpg",
    bio: "Karolína nastoupila do Ipsosu již jako 16letá na pozici tazatelky v call centru. V roce 2010 postoupila na pozici supervizorky, kterou dělala 4 roky a poté se přesunula na pozici Projektového managera. Od července roku 2019 je vedoucí CATI oddělení. ",
  },
  {
    name: "Petra Střelečková",
    slug: PeopleSlugsEnum.PETRA,
    role: "CATI Project Manager",
    imageUrl: "/petra.jpg",
    bio: "Petra nastoupila do Ipsosu již jako 16letá na pozici tazatelky v call centru. Po dvou letech postoupila na pozici supervizorky, ze které se po dalších dvou letech přesunula k vedení CATI na pozici administrativního pracovníka. Po úspěšném dokončení vysokoškolského studia se v roce 2022 stala Projektovým managerem v oddělení CATI.  ",
  },
  {
    name: "Zdeňka Honnerová",
    slug: PeopleSlugsEnum.ZDENKA,
    role: "CATI Project Manager",
    imageUrl: "/superMarek.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
  {
    name: "Lukáš Plicka",
    slug: PeopleSlugsEnum.LUKAS,
    role: "Tento udaj nemam, dodajte",
    imageUrl: "/harryMarek.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
];

export default function AboutUsRows() {
  return (
    <div className='bg-white py-10 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-40'>
        <div className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'>
          {people.map((person) => (
            <Disclosure key={person.name} as='div' className='pt-6'>
              <dt>
                <DisclosureButton className='group flex w-full items-center justify-between text-left text-gray-900'>
                  <span className='text-base font-semibold leading-7'>
                    <div className='flex flex-col gap-10 pt-12 sm:flex-row'>
                      <Image
                        alt=''
                        src={person.imageUrl}
                        className='aspect-[3/4] w-52 flex-none rounded-2xl object-cover'
                        width={1000}
                        height={1000}
                      />
                      <div className='max-w-xl flex-auto'>
                        <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                          {person.name}
                        </h3>
                        <p className='text-base leading-7 text-gray-600'>
                          {person.role}
                        </p>
                        <p className='mt-6 text-base leading-7 text-gray-500'>
                          {person.bio}
                        </p>
                      </div>
                    </div>
                  </span>
                  <span className='ml-6 flex h-7 items-center'>
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='h-6 w-6 group-data-[open]:hidden'
                    />
                    <ChevronUpIcon
                      aria-hidden='true'
                      className='h-6 w-6 [.group:not([data-open])_&]:hidden'
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as='dd' className='mt-2 sm:pr-12'>
                <QuestionRows questions={questions[person.slug]} />
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
        <div className='flex items-center mt-24 p-10 rounded-xl'>
          <Image className="ml-auto h-16 w-auto" src='/ipsos-transparent.png' width={200} height={200} alt='' />
          <div className='flex flex-col gap-4 mx-auto'>
            <h2 className='text-xl font-semibold text-gray-900'>
              V případě dotazu nás kontaktujte
            </h2>
            <Link
              href='mailto:cati@ipsos.cz'
              className='underline underline-offset-4'
            >
              cati@ipsos.cz
            </Link>
            <Link
              href='tel:+420724150097'
              className='underline underline-offset-4'
            >
              +420 724 150 097
            </Link>
            Ipsos
            <br />
            Slovanský dům E, Na Příkopě 22
            <br />
            110 00 Praha 1 – Česká republika
          </div>
        </div>
      </div>
    </div>
  );
}
