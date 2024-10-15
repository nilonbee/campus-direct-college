import { ContainerLayout } from "@/components/atoms";
import { BannerCarousel, SearchBar } from "@/components/molecules";
import {
  ContactSection,
  CountrySection,
  CourseViewDrawer,
  CoursesSection,
  FAQSection,
  NewsLetterSection,
  StudentsSaysSection,
  SubjectSection,
  UniversitySection,
} from "@/components/organisms";
import { IBlogResponse } from "@/types/blogs";
import { ICountry } from "@/types/countries";
import { ICourseLevel } from "@/types/courseLevels";
import { IIntake } from "@/types/intakes";
import { ISubject } from "@/types/subjects";
import {
  getBlogs,
  getCountries,
  getCourseLevels,
  getIntakes,
  getSubjects,
} from "@/utils/api-requests";
import { GoogleTagManager } from "@next/third-parties/google";
import React from "react";

export const revalidate = 10;

export const metadata = {
  title: "Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  themeColor: "#065DA8",
  canonical: "https://www.campusdirect.io",
  url: "https://www.campusdirect.io",
  openGraph: {
    title: "Campus Direct | Your Trusted Education Partner",
    description:
      "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
    url: "https://www.campusdirect.io",
    siteName: "Campus Direct",
    images: [
      {
        url: "https://ik.imagekit.io/cdukstore/logo/Logo-Clr.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@Campus_DirectUK",
    site: "@Campus_DirectUK",
    cardType: "summary_large_image",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  author: "Campus Direct",
  publisher: "Campus Direct",
  alternate: "https://www.campusdirect.io",
};

export default async function Home() {
  const courseLevels = (await getCourseLevels({ status: 1 })) as ICourseLevel[];
  const countries = (await getCountries({ status: 1 })) as ICountry[];
  const subjects = (await getSubjects({ status: 1 })) as ISubject[];
  const blogs = (await getBlogs({ page: 1, pageSize: 4 })) as IBlogResponse;
  const intakes = (await getIntakes({ status: 1 })) as IIntake[];

  return (
    <>
      <GoogleTagManager gtmId="GTM-M9SGVQTL" />
      <BannerCarousel />
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2">
        <ContainerLayout>
          <div className="flex flex-col gap-2 justify-center items-center self-stretch relative xs:h-[180px]  md:h-[200px] ">
            <h1 className="text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-white">
              Find Your Perfect Course
            </h1>
            <h4 className="text-center lg:text-1xl md:text-base sm:text-sm xs:text-xs text-white">
              Your journey to enlightening higher education starts here! !{" "}
            </h4>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <SearchBar
          initCountries={countries}
          initCourseLevels={courseLevels}
          initSubjects={subjects}
        />
        <CountrySection />
        {/* <CoursesSection /> */}
        <SubjectSection />
      </ContainerLayout>
      <div className="relative w-full bg-[#d4ebff]">
        <ContainerLayout>
          <UniversitySection />
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <StudentsSaysSection />
        <FAQSection />
        <ContactSection />
        <NewsLetterSection />
      </ContainerLayout>
      <CourseViewDrawer intakes={intakes} />
    </>
  );
}
