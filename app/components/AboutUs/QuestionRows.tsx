"use client";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

type QuestionRowsProps = {
  question: string;
  answer: string;
};

export function QuestionRows({
  questions,
}: {
  questions: QuestionRowsProps[];
}) {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {questions.map((questionObject) => (
              <Disclosure
                key={questionObject.question}
                as='div'
                className='pt-6'
              >
                <dt>
                  <DisclosureButton className='group flex w-full items-start justify-between text-left text-gray-900'>
                    <span className='text-base font-semibold leading-7'>
                      {questionObject.question}
                    </span>
                    <span className='ml-6 flex h-7 items-center'>
                      <PlusCircleIcon
                        aria-hidden='true'
                        className='h-6 w-6 group-data-[open]:hidden'
                      />
                      <MinusCircleIcon
                        aria-hidden='true'
                        className='h-6 w-6 [.group:not([data-open])_&]:hidden'
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as='dd' className='mt-2 sm:pr-12'>
                  <p className='text-base leading-7 text-gray-600'>
                    {questionObject.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
