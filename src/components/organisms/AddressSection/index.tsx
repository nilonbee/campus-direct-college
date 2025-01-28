import { LocationIcon } from "@/components/atoms/Icons";
import React from "react";
import { AddressBox } from "@/components/molecules";

export const AddressSection = () => {
  const addressList = [
    {
      branch: "Colombo Branch",
      address: "24/1 Dudley Senanayake Mawatha, Colombo 08",
      phone: "0707855555",
      email: "info@cicedu.edu.lk",
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
