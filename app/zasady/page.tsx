"use client";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Player } from "../components/zasady/Player";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white px-6 py-10 sm:py-24 lg:px-8">
      <div className="mx-auto lg:px-40 text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Zásady dotazování
        </h1>
        <p className="mt-6 text-xl leading-8">
          Při této práci jde o komunikaci s lidmi, kterou máte trochu ztíženou
          tím, že můžete používat pouze svůj hlas. Proto je nejdůležitější částí
          hovoru její začátek, kde se představíte celým svým jménem. Snažte se
          být prosím příjemní, zdvořilí, při hovoru se usmívejte a snažte se být
          přirození. Nikdy nikoho do ničeho nenutíme, ale snažíme se respondenta
          vždy získat. Snažte se informovat, vysvětlovat a přesvědčovat.
          Připravili jsme si pro Vás názorné ukázky, které si prosím vyslechněte
          celé.
        </p>
        <div>
          <Player source="/Dlouhá ukázka.mp3" />
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
            Tempo hovoru
          </h2>
          <p className="mt-6">
            Tempo, kterým jako tazatel, povedete hovory s respondenty hraje
            klíčovou roli, proto jej nepodceňujte. Správné tempo Vám umožní
            udržet plynulý rozhovor a zároveň dává respondentovi dostatek času
            na přemýšlení a odpovědi. Příliš rychlé tempo může vést k tomu, že
            respondent nebude schopen řádně zpracovat otázky nebo se bude cítit
            pod tlakem, což může negativně ovlivnit kvalitu odpovědí a jeho
            celkového dojmu z hovoru. Naopak příliš pomalé tempo může způsobit
            ztrátu zájmu nebo koncentraci respondenta. Je tedy důležité, abyste
            zvolili vyvážené tempo a zároveň ho uměli přizpůsobit potřebám
            respondenta, se kterým zrovna mluvíte. Správně nastavené a vyvážené
            tempo, kterým hovor povedete, napomáhá získat relevantní a
            spolehlivá data. Zároveň zanechá v respondentech pozitivní dojem, a
            budou tak ochotni zapojit se i do dalších studií.
          </p>
          <p className="mt-6">
            Tempo hovoru je součástí celkového projevu, který je dobré
            natrénovat. Pokud zvolíte utahaný projev s pomalým tempem, tak
            bohužel nikoho nezískáme a respondenti budou spíše ochotni věnovat
            svůj čas někomu, kdo je zaujme a působí na ně přátelsky a pozitivně.
            Je potřeba si uvědomit, že Vy jako tazatel žádáte jejich čas a
            odpovědi, tak se prosím do hovorů usmívejte, za odpovědi průběžně
            děkujte, a dotazujte jako tazatel, kterému byste Vy sami byli
            ochotni věnovat svůj volný čas.
          </p>
          <Player source="/Tempo hovoru.mp3" />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Pozornost tazatele
          </h2>
          <p className="mt-6">
            Pozornost tazatele je zásadní pro úspěch jakéhokoliv průzkumu.
            Tazatel musí být plně soustředěný po čas celého hovoru i samotného
            vytáčení, aby mohl správně vnímat nejen obsah odpovědí, ale i různé
            neverbální signály, které respondent vysílá a adekvátně reagovat. S
            Vaší pozorností souvisí i prostředí, ve kterém pracujete, proto je
            potřeba, abyste se nacházeli v ničím nerušeném prostředí a plně se
            mohli soustředit. Při směně máte vypnuté zvonění na telefonu, v
            pozadí není slyšet hluk televizoru či rádia, a pokud obdržíte
            jakoukoliv zprávu, odepisujete na ni mimo hovory. Díky pozornosti
            můžete zaznamenat případné nejasnosti nebo nesrovnalosti v
            odpovědích a vhodně na ně reagovat, což vede k získání kvalitnějších
            a přesnějších dat do celého projektu. I Vám se bude lépe dotazovat,
            pozorný tazatel dokáže lépe navázat důvěrnější a otevřenější
            atmosféru, což může mít pozitivní vliv na ochotu respondenta sdílet
            své názory a zkušenosti. Prosím, abyste otázky nepřetvářeli ani
            otázky nevysvětlovali. Abychom zachovali co nejvíce stejné podmínky
            pro dotazování, tak položíte otázku a až když vnímáte z reakce
            respondenta, že je potřeba otázku dovysvětlit nebo upřesnit, tak to
            uděláte.
          </p>
          <Player source="/Pozornost tazatele.mp3" />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Získání respondenta
          </h2>
          <p className="mt-6">
            Ve většině případech budete jako tazatel volat respondentům
            neočekávaně a bude tak potřeba vynaložit úsilí na jeho získání.
            Někteří respondenti mohou být zaskočeni a rychlou odpovědí hovor
            odmítnout, mohou se s telefonickým výzkumem setkat poprvé nebo je
            zastihnete v nevhodnou dobu, kdy se v daný moment nemohou zúčastnit.
            Abychom ale o respondenty zbytečně nepřicházeli, je v takových
            případech velmi důležitá Vaše pohotová a správná reakce.
          </p>
          <p className="mt-6">
            Respondenty se nenechte odbýt, a pokud po úvodu zazní z druhé strany
            pouhé „Ne, děkuji; To já nedělám; Zkuste někoho jiného“, tak to
            prosím hned nevzdávejte. Při každém hovoru je klíčové jasně a
            přesvědčivě vysvětlit, proč je účast respondenta na konkrétním
            průzkumu důležitá. Zdůrazněte, že názory respondentů hrají zásadní
            roli při formování výsledků a že jejich příspěvek může mít reálný
            dopad v dané oblasti, které se daný projekt týká. Důležitou roli
            hraje také ujištění, že jim nic nenabízíte ale jde pouze o průzkum
            trhu, a velmi byste ocenili, kdyby se s námi podíleli na spolupráci
            svými odpověďmi. Dále je důležité nevynechávat informace o anonymitě
            a ujištění, že odpovědi budou použity výhradně pro účely tohoto
            výzkumu, což jim poskytuje naprostou svobodu vyjádřit svůj názor
            upřímně a bez jakýchkoliv obav.
          </p>
          <Player source="/Získání respondenta_2.mp3" />
          <p className="mt-10">
            Pokud Vám respondent poskytne trochu více informací a zastihli jste
            ho v nevhodnou dobu, kdy je například v práci, na nákupu, slyšíte v
            pozadí děti, řídí a podobně, opět je důležitá Vaše projevená snaha.
            To, že aktuálně nemůže neznamená, že dotazník nechce vyplnit. V
            takovém případě se musíte aktivně doptat, zda mu můžeme zavolat ve
            vhodnější chvíli, ať už jen za pár minut, k večeru nebo v dalších
            dnech, kdy se projekt bude opět volat. Poté, co se domluvíte na
            vhodnějším termínu dalšího volání, kontakt odložíte pomocí Response
            kódu: 6 – Odložený hovor, kam zadáte smluvený den a čas, a pokud
            respondent dodal i nějakou důležitou informaci, která se bude hodit
            při dalším pokusu, tak ji nezapomeňte napsat do poznámky.
          </p>
          <Player source="/Získání respondenta_1.mp3" />
          <p className="mt-10">
            No a také se můžete setkat s respondentem, kterému nebudou stačit
            informace, které jste mu sdělili v předem psaném úvodu a bude se
            doptávat na další informace. Každý projekt má svůj úvod, ve kterém
            máte uvedené základní informace, které zazní v každém hovoru a
            informace doplňující, pokud by měl respondent další dotazy. Na
            dotazy respondentů je nutné vždy reagovat, abychom předešli
            případnému nedorozumění, a naopak je přesvědčili k účasti na daném
            průzkumu. Pokud po Vás respondent bude požadovat informace, které
            nemáte a nevíte, nebojte se to přiznat, ale omluvte se s tím, že
            jeho kontakt předáte kompetentní osobě, která s ním danou věc
            vyřeší. Toto telefonní číslo následně zašlete do chatu se
            supervizorem s informací, co se v hovoru stalo.
          </p>
          <p className="mt-10">
            Mezi nejčastější dotazy respondentů patří dotaz, odkud jsme na ně
            vzali telefonní kontakt. Toto je jedna z informací, kterou budete
            mít uvedenou přímo u každého kontaktu hned v úvodu. Obecně ale
            platí, že se můžete setkat s mobilními linkami, které byly systémově
            vygenerovány přes všeobecně známou předvolbu operátorů a počítačem
            náhodně vygenerovaný zbytek čísel, dále pak s kontakty z veřejně
            dostupných zdrojů či s klientskou databází. Pokud by se Vás zeptal
            respondent z klientské databáze, odkud jsme vzali jeho údaje a
            číslo, tak neříkejte, že máte databázi, ale že jste dostali jeho
            kontakt od dané společnosti, jejíž je klientem.
          </p>
          <Player source="/Číslo_2.mp3" />
          <p className="mt-10">
            Je potřeba zachovat profesionální přístup, vždy zůstaňte zdvořilí,
            trpěliví a respektujte rozhodnutí respondente, i když se rozhodne
            nezúčastnit se dotazování. Při celém hovoru mějte prosím na paměti,
            že Vy text vidíte před sebou, ale respondent je závislí pouze na Vás
            a Vašem hlasu. Nemusí být vždy v klidném prostředí a proto, když je
            potřeba otázku opakovat nebo vysvětlit, tak buďte příjemní a ochotně
            vše zopakujte. Vy chcete většinou zdarma respondentův čas.
            Respondent, který bude mít negativní zkušenost, nebude příště chtít
            na nic odpovídat, a to má pak vliv i na negaci, když respondenty
            kontaktujeme. Naopak, když bude hovor příjemný a Vy mu za jeho čas i
            hezky poděkujete, tak bude příště více nakloněný k další spolupráci
            s námi.
          </p>
          <p className="mt-10">
            Prošli jste si veškeré materiály a chcete s námi spolupracovat?
            Vyplňte přiložený formulář{" "}
            <Link
              href="https://forms.gle/ph9Z2M2ugqTZW1vY8"
              className="text-brigada-blue underline underline-offset-4"
              target="_blank"
            >
              https://forms.gle/ph9Z2M2ugqTZW1vY8.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
