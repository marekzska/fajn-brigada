"use client";
import {
  faDisplay,
  faHandHoldingDollar,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cards = [
  {
    icon: (
      <FontAwesomeIcon
        className='h-10 w-10 mx-auto text-white'
        icon={faDisplay}
      />
    ),
    title: "Vhodné",
    rows: ["Pro pracující", "Pro důchodce", "Pro studenty", "Pro ZTP"],
    classes: "bg-gradient-to-b from-[#1c2d4e] to-brigada-blue",
  },
  {
    icon: (
      <FontAwesomeIcon
        className='h-10 w-10 mx-auto text-white'
        icon={faListCheck}
      />
    ),
    title: "Výhody",
    rows: [
      "Práce z domova",
      "Stálý přivýdělek",
      "Přátelský kolektiv",
      "Flexibilita",
    ],
    classes: "bg-gradient-to-b from-[#51bcc4] to-[#8fd0dc]",
  },
  {
    icon: (
      <FontAwesomeIcon
        className='h-10 w-10 mx-auto text-white'
        icon={faHandHoldingDollar}
      />
    ),
    title: "Zapoj se",
    rows: ["Projděte si výukové materiály a testovací dotazník"],
    classes: "bg-gradient-to-b from-brigada-blue to-[#7291ca]",
  },
];

export function Cards() {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 grid-rows-3 md:grid-rows-1 md:grid-cols-3 px-6 lg:py-20 lg:px-32'
    >
      {cards.map((card) => (
        <li
          key={card.title}
          className={`col-span-1 rounded-2xl flex flex-col py-20 px-10 divide-y divide-gray-200 text-white text-center shadow ${card.classes}`}
        >
          <div className='flex flex-1 flex-col'>
            {card.icon}
            <h3 className='mt-6'>{card.title}</h3>
            <dl className='mt-1 flex flex-grow flex-col justify-between'>
              <dd className='mt-3'>
                {card.rows.map((row, index) => (
                  <div key={index} className='m-2'>{row}</div>
                ))}
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
