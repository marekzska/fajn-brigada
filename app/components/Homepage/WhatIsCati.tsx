"use client";
import Image from "next/image";

export function WhatIsCati() {
  return (
    <div className="bg-white flex flex-col w-full px-6 lg:px-32 mt-24 lg:mt-0">
      <div className="mx-auto mb-20">
        <h3 className="m-0 text-4xl font-bold text-center">
          Přidej se k nám do týmu
        </h3>
        <h5 className="text-center text-[#7291ca] font-bold text-2xl mt-4">
          hledáme každého, kdo si rád povídá s lidmi
        </h5>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <Image
            src="/homepage-b2b-panel.png"
            alt="What is CATI"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 flex">
          <div className="m-auto">
            <h3 className="text-4xl">Co je to CATI a proč se připojit?</h3>
            <br />
            <br />
            CATI oddělení je skupina tazatelů, kteří volají přes náš interní
            systém na předem připravené kontakty lidí, za účelem vyplnění
            naprogramovaného dotazníku. Nejedná se o žádný prodej, ale pouze o
            výzkum trhu a veřejného mínění. Pro volání nepotřebujete žádný
            soukromý telefon a telefonní čísla vždy zajišťujeme my. Vám stačí
            pouze PC, internet a sluchátka s mikrofonem.
            <br />
            <br />
            Přidejte se k nám i Vy a získejte <b>finanční odměnu</b> za
            zajímavou práci <b>z pohodlí Vašeho domova</b>. Neminou Vás ani
            poutavé informace ze světa výzkumu, můžete se těšit na pravidelný
            přístup k výsledkům studií a dění ze zákulisí naší společnosti.
          </div>
        </div>
      </div>
    </div>
  );
}
