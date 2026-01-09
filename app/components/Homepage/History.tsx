"use client";
export const History = () => {
  return (
    <div className="px-6 py-24 lg:p-40 flex flex-col-reverse md:flex-row items-center gap-20">
      <div className="md:w-1/2 flex flex-col gap-16">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center">
          <div className="w-20 sm:w-40 rounded-full aspect-square bg-[#6fc6d0] outline outline-[#6fc6d0] outline-4 outline-offset-4 text-white text-xl sm:text-3xl font-bold flex items-center justify-center">
            1992
          </div>
          <div className="sm:w-3/4">
            Vznikla firma Tambor, která měla v době svého založení pouhé dva
            zaměstnance
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center">
          <div className="w-20 sm:w-40 rounded-full aspect-square bg-[#808080] outline outline-[#808080] outline-4 outline-offset-4 text-white text-xl sm:text-3xl font-bold flex items-center justify-center">
            2007
          </div>
          <div className="sm:w-3/4">
            Tambor se stal součástí renomované globální sítě Ipsos a otevřel
            další dveře k úspěšné expanzi a inovacím
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 items-center">
          <div className="w-20 sm:w-40 rounded-full aspect-square bg-brigada-blue outline outline-brigada-blue outline-4 outline-offset-4 text-white text-xl sm:text-3xl font-bold flex items-center justify-center">
            2013
          </div>
          <div className="sm:w-3/4">
            Došlo ke zjednodušení názvu z Ipsos Tambor na pouhé Ipsos
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div>
          <h2 className="text-4xl">Krátce o Ipsosu</h2>
          <br />
          <br />
          Historie Ipsosu se na českém trhu píše již od roku 1992. Tehdy ještě
          šlo o společnost s názvem Tambor, která se během let stala součástí
          právě Ipsosu. Ani po tolika úspěšných letech naše cesta zdaleka
          nekončí, stále je před námi nespočet příležitostí a výzev, které nás
          inspirují k dalšímu růstu a výkonům.
        </div>
      </div>
    </div>
  );
};
