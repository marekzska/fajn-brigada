"use client";
import Image from "next/image";

export function WhyIsYourWorkImportant() {
  return (
    <div className='bg-white flex flex-col w-full my-20 px-6 lg:px-32'>
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <div className='md:w-1/2 flex'>
          <div className='m-auto'>
            <h3 className='text-4xl'>Proč je Vaše práce důležitá?</h3>
            <br />
            <br />
            Jelikož se podílíte na získávání názorů a zkušeností našich
            respondentů. Výsledky těchto výzkumů přímo ovlivňují rozhodování
            velkých podniků, firem a institucí, které na základě informací z
            výzkumů zlepšují své služby pro koncové zákazníky, tedy i pro Vás.
            <br />
            <br />
            Našich služeb využívají firmy a instituce z různých oborů, např.
            banky, výrobci automobilů, mobilní operátoři, poskytovatelé
            internetu, Evropská komise a jiné.
          </div>
        </div>
        <div className='md:w-1/2'>
          <Image
            src='/homepage-b2b-opinion.png'
            alt='What is CATI'
            width={1000}
            height={1000}
            className='m-auto h-auto'
          />
        </div>
      </div>
    </div>
  );
}
