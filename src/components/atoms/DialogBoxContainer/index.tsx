"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MainButton } from "..";

interface ConfirmationDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit?: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  actionBtn?: boolean;
  customStyle?: string;
  padding?: string;
}
export const DialogBoxContainer = ({
  isOpen,
  closeModal,
  onSubmit,
  title,
  children,
  actionBtn = true,
  customStyle,
  padding = "p-6",
}: ConfirmationDialogProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`transform overflow-hidden rounded-xl bg-white text-center align-middle shadow-xl transition-all ${customStyle} ${padding}`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-textColor"
                >
                  {title}
                </Dialog.Title>

                {children}
                {actionBtn && (
                  <div className="mt-6 flex gap-2 text-center justify-center">
                    <MainButton
                      label="Cancel"
                      btnStyle="Secondary"
                      btnSize="Medium"
                      onClick={closeModal}
                    />
                    <MainButton
                      label="Submit"
                      btnStyle="Primary"
                      btnSize="Medium"
                      onClick={onSubmit}
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};