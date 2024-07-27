import { ContainerLayout, FlagIcon } from "@/components/atoms";
import { LeadsForm } from "@/components/organisms";
import { ICountry } from "@/types/countries";
import { getCountries } from "@/utils/api-requests";
import Image from "next/image";
import React from "react";

export const BannerWithForm = async () => {
  const countries = (await getCountries({ status: 1 })) as ICountry[];

  return (
    <div className="bg-banner-image">
      <ContainerLayout>
        <div className="flex w-full xs:flex-col sm:flex-col md:flex-row xs:py-20 md:py-36 gap-5">
          <div className="text-white xs:w-full sm:w-full md:w-1/2">
            <p className="xs:text-sm md:text-lg">
              Explore Global Opportunities
            </p>
            <h1 className="xs:text-2xl md:text-4xl font-bold text-[#0487f3]">
              Find Your Perfect Study Abroad Destination
            </h1>

            <div className="mt-8">
              <div className="flex">
                <div className="mt-1">
                  <Image
                    src="/images/check321.png"
                    width={30}
                    height={30}
                    alt="check"
                  />
                </div>
                <p className="ml-2 xs:text-base md:text-xl">
                  Apply to over 200+ universities and institutes across the
                  world
                </p>
              </div>
              <div className="flex mt-2">
                <div className="mt-1">
                  <Image
                    src="/images/check321.png"
                    width={30}
                    height={30}
                    alt="check"
                  />
                </div>
                <p className="ml-2 xs:text-base md:text-xl">
                  100% FREE counseling and services for all students
                </p>
              </div>
              <div className="flex mt-2">
                <div className="mt-1">
                  <Image
                    src="/images/check321.png"
                    width={30}
                    height={30}
                    alt="check"
                  />
                </div>
                <p className="ml-2 xs:text-base md:text-xl">
                  Over 12,000+ success stories
                </p>
              </div>
            </div>
            <div className="flex  mt-8 xs:gap-4 md:gap-8 ">
              <FlagIcon url="/images/flag/usa.svg" title="USA" />
              <FlagIcon url="/images/flag/australia.png" title="Australia" />
              <FlagIcon url="/images/flag/canada.svg" title="Canada" />
              <FlagIcon url="/images/flag/uk.svg" title="UK" />
              <FlagIcon
                url="/images/flag/new-zealand1.png"
                title="New Zealand"
              />
            </div>
          </div>
          <div className="flex justify-end xs:w-full sm:w-full md:w-1/2">
            <LeadsForm countries={countries} />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};
