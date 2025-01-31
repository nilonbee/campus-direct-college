"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem as HeadlessMenuItem,
} from "@headlessui/react";
import { ContainerLayout, MenuItem } from "@components/atoms";

const menu_items = [
  { name: "Admissions", href: "/admissions" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Career Services", href: "/career-services" },
  { name: "International Students", href: "/international-students" },
  { name: "Alumni", href: "/alumni" },
  { name: "Library", href: "/library" },
];

const mobile_menu_items = [
  { menuName: "Home", uri: "/", isHomePage: true },
  { menuName: "About Us", uri: "/about" },
  { menuName: "Academic Programmes", uri: "/programmes" },
  { menuName: "Admissions", uri: "/admissions" },
  { menuName: "Campus Life", uri: "/campus-life" },
  { menuName: "Research", uri: "/research" },
  { menuName: "Career Services", uri: "/career-services" },
  { menuName: "International Students", uri: "/international-students" },
  { menuName: "Alumni", uri: "/alumni" },
  { menuName: "Library", uri: "/library" },
  { menuName: "Contact Us", uri: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <ContainerLayout>
        <nav
          className="mx-auto flex w-full justify-between items-center py-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image
                src="/images/Logo-Clr.png"
                alt="Colombo International Campus"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <div className="flex lg:hidden gap-4">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-textColor"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex space-x-12 items-center">
            <MenuItem menuName="Home" uri="/" isHomePage />
            <MenuItem menuName="About Us" uri="/about" />

            <Menu as="div" className="relative">
              <MenuButton className="inline-flex items-center gap-2 text-sm text-textColor hover:text-primary bg-transparent py-2 rounded-md focus:outline-none">
                Students
                <ChevronDownIcon className="w-3" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                {menu_items.map((item) => (
                  <HeadlessMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-textColor hover:bg-lightBlue/10"
                    >
                      {item.name}
                    </Link>
                  </HeadlessMenuItem>
                ))}
              </MenuItems>
            </Menu>

            <Menu as="div" className="relative">
              <MenuButton className="inline-flex items-center gap-2 text-sm text-textColor hover:text-primary bg-transparent py-2 rounded-md focus:outline-none">
                Programmes
                <ChevronDownIcon className="w-3" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-10">
                <div>
                  <h3 className="px-4 py-2 font-semibold text-sm">
                    Faculty of Computing
                  </h3>
                  <HeadlessMenuItem>
                    <Link
                      href="/undergraduate-computing"
                      className="block px-4 py-2 text-sm text-textColor hover:bg-lightBlue/10"
                    >
                      Undergraduate Programs
                    </Link>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem>
                    <Link
                      href="/postgraduate-computing"
                      className="block px-4 py-2 text-sm text-textColor hover:bg-lightBlue/10"
                    >
                      Postgraduate Programs
                    </Link>
                  </HeadlessMenuItem>
                </div>
                <div>
                  <h3 className="px-4 py-2 font-semibold text-sm">
                    Faculty of Business
                  </h3>
                  <HeadlessMenuItem>
                    <Link
                      href="/undergraduate-business"
                      className="block px-4 py-2 text-sm text-textColor hover:bg-lightBlue/10"
                    >
                      Undergraduate Programs
                    </Link>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem>
                    <Link
                      href="/postgraduate-business"
                      className="block px-4 py-2 text-sm text-textColor hover:bg-lightBlue/10"
                    >
                      Postgraduate Programs
                    </Link>
                  </HeadlessMenuItem>
                </div>
              </MenuItems>
            </Menu>

            <MenuItem menuName="Contact Us" uri="/contact" />
          </div>
        </nav>
      </ContainerLayout>

      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 w-full" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-4 py-4">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-14 w-auto"
                src="/images/Logo-Clr.png"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-textColor"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div className="space-y-5 py-6 flex flex-col border-b border-gray-200">
              {mobile_menu_items.map((item) => (
                <MenuItem
                  key={item.uri}
                  menuName={item.menuName}
                  uri={item.uri}
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                  {...(item.isHomePage && { isHomePage: true })}
                />
              ))}
            </div>
            ;
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
