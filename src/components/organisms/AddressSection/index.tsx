import { LocationIcon } from "@/components/atoms/Icons";
import React from "react";
import { AddressBox } from "@/components/molecules";

export const AddressSection = () => {
  const addressList = [
    {
      branch: "Colombo Branch - Sri Lanka",
      address:
        "Campus Direct – Head Office, 36 B, Gower Street, Colombo 05, Sri Lanka",
      phone: "+94 77 900 5555",
      email: "info@cduk.lk",
    },
    {
      branch: "Kandy Branch - Sri Lanka",
      address: "749/B/1, William Gopallawa Mawatha Kandy",
      phone: "+94 77 234 0055",
      email: "info@cduk.lk",
    },
    {
      branch: "Dubai Branch – UAE",
      address:
        "Office 1312, Victor Business Centre, Burjuman Business Tower, Dubai, United Arab Emirates",
      phone: "+971 58 546 9555",
      email: "info@cduk.lk",
    },
    {
      branch: "London Branch – UK",
      address:
        "71-75 Shelton Street Convent Garden London WC2H9JQ, United Kingdom",
      phone: "+971 58 546 9555",
      email: "london@cduk.lk",
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
