"use client";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const resources = [
  {
    name: "Manuál pro volání",
    href: "/materialy.pdf",
  },
  {
    name: "První přihlášení",
    href: "#",
  },
  {
    name: "Zásady dotazování",
    href: "#",
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white drop-shadow sticky top-0 z-50'>
      <nav
        aria-label='Global'
        className='mx-auto flex xl:px-32 items-center justify-between p-6'
      >
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='-m-1.5 p-1.5 font-bold text-2xl flex gap-3 items-center text-black'
          >
            <FontAwesomeIcon icon={faUsers} className='text-brigada-blue' />
            FAJN BRIGÁDA
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          <Link
            href='/'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Úvod
          </Link>
          <Link
            href='/aboutUs'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            O nás
          </Link>

          <Popover className='relative'>
            <PopoverButton className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none'>
              Výuka
              <ChevronDownIcon
                aria-hidden='true'
                className='h-5 w-5 flex-none text-gray-400'
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute right-1/2 translate-x-1/2 top-full z-50 mt-3 w-[200px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-4'>
                {resources.map((item) => (
                  <div
                    key={item.name}
                    className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                  >
                    <div className='flex-auto'>
                      <Link
                        href={item.href}
                        className='block font-semibold text-gray-900'
                      >
                        {item.name}
                        <span className='absolute inset-0' />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href='/smlouvy'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Smlouvy
          </Link>
          <Link
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Dotazy
          </Link>
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='#'
            className='text-sm font-semibold rounded-lg leading-6 text-gray-900 bg-brigada-blue text-white p-3'
          >
            Zapoj se
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5 font-bold text-2xl'>
              FAJN BRIGÁDA
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  href='/'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Úvod
                </Link>
                <Link
                  href='/aboutUs'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  O nás
                </Link>
                <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Výuka
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='h-5 w-5 flex-none group-data-[open]:rotate-180'
                    />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href='/smlouvy'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Smlouvy
                </Link>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Dotazy
                </Link>
              </div>
              <div className='py-6'>
                <Link
                  href='#'
                  className='-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 bg-brigada-blue text-white hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zapoj se
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
