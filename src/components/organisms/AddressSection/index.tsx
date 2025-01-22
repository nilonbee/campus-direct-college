import { LocationIcon } from "@/components/atoms/Icons";
import React from "react";
import { AddressBox } from "@/components/molecules";

export const AddressSection = () => {
  const addressList = [
    {
      branch: "Lorem Ipsum Branch 1",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      phone: "+123 456 7890",
      email: "example1@example.com",
    },
    {
      branch: "Lorem Ipsum Branch 2",
      address:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      phone: "+123 456 7891",
      email: "example2@example.com",
    },
    {
      branch: "Lorem Ipsum Branch 3",
      address:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      phone: "+123 456 7892",
      email: "example3@example.com",
    },
    {
      branch: "Lorem Ipsum Branch 4",
      address:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      phone: "+123 456 7893",
      email: "example4@example.com",
    },
  ];
  return (
    <div className="w-full p-5 bg-[#eef7ff] rounded shadow border border-boxBorder">
      <div className="flex gap-3 text-center flex-row">
        <div className="w-10 h-10">
          <LocationIcon />
        </div>
        <p className="text-[20px] text-primary font-semibold leading-10">
          Visit Us
        </p>
      </div>
      <div className="mt-8">
        <div
          className={`grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 w-full`}
        >
          {addressList.map((item, index) => (
            <AddressBox
              key={index}
              address={item.address}
              branch={item.branch}
              phone={item.phone}
              email={item.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
