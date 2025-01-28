"use client";
import { useIpStore } from "@/store/useIpStore";
import { ContactBox } from "@/components/molecules";
import {
  CarbonLocationIcon,
  CarbonEmailIcon,
  CarbonPhoneIcon,
} from "@/components/atoms/Icons";

export const ContactInfoSection = () => {
  const { countryData } = useIpStore();

  return (
    <div className="w-full mt-10 lg:px-20 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContactBox
          label={"Location"}
          value="24/1 Dudley Senanayake Mawatha, Colombo 00800"
          icon={<CarbonLocationIcon />}
        />
        <ContactBox
          label={"Email Address"}
          value="info@cicedu.edu.lk"
          icon={<CarbonEmailIcon />}
          uri="mailto"
        />
        <ContactBox
          label={"Phone Number"}
          value="0707855555"
          icon={<CarbonPhoneIcon />}
          uri="tel"
        />
      </div>
    </div>
  );
};
