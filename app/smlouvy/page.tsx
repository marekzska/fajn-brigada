"use client";
export default function page() {
  return (
    <div className='h-full w-full px-6 md:px-40 py-10'>
      <div className='h-1/3 flex flex-col items-center pb-10'>
        <h1 className='font-bold text-2xl sm:text-4xl'>Smlouvy</h1>
        <h4 className='font-bold text-xl sm:text-2xl mt-4 text-[#7291ca]'>
          Vše, co potřebujete vědět o našich smluvních možnostech
        </h4>
      </div>
      <div className='h-2/3 flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-1/2 p-4 rounded-xl shadow-[0px_0px_8px_-3px_rgba(0,0,0,0.3)]'>
          <h4 className='font-bold text-xl sm:text-2xl mt-4'>DPP CZ</h4>
          <br />
          <p>
            Je zákonem ustanovena na 300 odpracovaných hodin za rok s maximálním
            výdělkem 10 000 Kč za měsíc. Dohoda je platná od data podpisu do
            posledního kalendářního dne v téže roce. Dohoda se podepisuje
            elektronicky v našem systému.
          </p>
          <br />
          <p>
            S DPP si také můžete podepsat prohlášení poplatníka k dani. Tuto
            slevu na dani můžete uplatňovat v rámci jednoho kalendářního měsíce
            jen u jednoho zaměstnavatele. Pokud jej neuplatňujete u žádného
            jiného zaměstnavatele, formulář a vzor pro vyplnění naleznete v
            příloze e-mailu, který Vám byl zaslán po vstupním školení. Kompletní
            formulář následně zasíláte naskenovaný e-mailem. V případě, že slevu
            na dani uplatňovat nebudete, vydělaná částka se Vám bude danit
            sazbou ve výši 15 %. Bližší informace k podpisu smlouvy najdete ve
            výuce pod záložkou První přihlášení.
          </p>
        </div>

        <div className='lg:w-1/2'>
          <div className='max-h-1/2 shadow-[0px_0px_8px_-3px_rgba(0,0,0,0.3)] p-4 rounded-xl'>
            <h4 className='font-bold text-xl sm:text-2xl mt-4'>
              Příkazní smlouva (živnost)
            </h4>
            <br />
            <p>
              Není zde nastaven žádný minimální ani maximální výdělek za měsíc.
              Tato smlouva není ani limitována žádným ročním limitem
              odpracovaných hodin. Pro podepsání je potřeba kopie živnostenského
              listu (nebo výpis z rejstříku). Příkazní smlouvu je potřeba poslat
              podepsanou a oskenovanou na náš e-mail.{" "}
            </p>
          </div>
          <div className='max-h-1/2 shadow-[0px_0px_8px_-3px_rgba(0,0,0,0.3)] p-4 rounded-xl mt-5'>
            <h4 className='font-bold text-xl sm:text-2xl mt-4'>DPP SK</h4>
            <br />
            <p>
              Tento druh smlouvy se podepisuje v případě, kdy pracujete z území
              Slovenska a nemáte zájem pracovat na příkazní smlouvu. Zákonné
              omezení je na 350 hodin za rok. Z Vašeho výdělku se odvádí veškeré
              povinné daňové odvody. Je možné podepsat si slevu na dani.
              Studenti denního studia mají tomu uzpůsobenou smlouvu a její
              podmínky. Před podpisem smlouvu nás prosím kontaktujte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
