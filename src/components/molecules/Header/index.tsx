"use client";
import Link from "next/link";
import { ContainerLayout, MainButton, MenuItem } from "@/components/atoms";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import { useUserStore } from "@/store";
import { ProfileDrawer } from "..";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { authUser } = useUserStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <ContainerLayout>
        <nav
          className="mx-auto flex w-full justify-between items-center  py-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image
                className=""
                src="/images/Logo-Clr.png"
                alt="Colombo International College"
                width={200}
                height={50}
              />
            </Link>
          </div>
          <div className="flex lg:hidden gap-4">
            {/* {authUser && <ProfileDrawer />} */}
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
          <div className="hidden lg:flex gap-8">
            <MenuItem menuName="Home" uri={"/"} isHomePage />
            <MenuItem menuName="About Us" uri="/about" />
            <MenuItem
              menuName="Academic Programmes"
              uri="/academic-programmes"
            />
            <MenuItem menuName="Admissions" uri="/admissions" />
            <MenuItem menuName="Campus Life" uri="/campus-life" />
            <MenuItem menuName="Research" uri="/research" />
            <MenuItem menuName="Career Services" uri="/career-services" />
            <MenuItem menuName="Scholarships" uri="/scholarships" />
            <MenuItem menuName="Contact Us" uri="/contact" />
            {/* Dropdown Menu for International Students, Alumni, Library */}
            <HeadlessMenu as="div" className="relative">
              <div>
                <p className="text-sm text-textColor hover:text-primary">
                  More
                </p>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-3 block ">
                    <ul>
                      <li>
                        <MenuItem menuName="Alumni" uri="/alumni" />
                      </li>
                      <li>
                        <MenuItem menuName="Library" uri="/library" />
                      </li>
                      <li>
                        <MenuItem
                          menuName="International Students"
                          uri="/international-students"
                        />
                      </li>
                    </ul>
                  </div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center xl:hidden"></div>
        </nav>
      </ContainerLayout>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 w-full" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10  w-full bg-white px-4 py-4 ">
          <div className="flex items-center justify-between w-full">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-14 w-auto"
                src="/images/Logo-Clr.png"
                alt=""
                width={150}
                height={50}
              />
            </a>
            <button
              type="button"
              className=" rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div>
              <div className="space-y-5 py-6 flex flex-col border-b border-borderGray">
                <MenuItem
                  menuName="Home"
                  uri={"/"}
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                  isHomePage
                />
                <MenuItem
                  menuName="About Us"
                  uri="/about"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Academic Programs"
                  uri="/Academic-programs"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Admissions"
                  uri="/admissions"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Campus Life"
                  uri="/campus-life"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Research"
                  uri="/research"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Career Services"
                  uri="/career-services"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="International Students"
                  uri="/international-students"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Alumni"
                  uri="/alumni"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Library"
                  uri="/library"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Contact Us"
                  uri="/contact"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
