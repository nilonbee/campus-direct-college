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
  title: "Colombo International College | Your Trusted Education Partner",
  description:
    "Colombo International College is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords:
    "study abroad, education consultancy, Colombo International College",
  themeColor: "#065DA8",
  canonical: "https://www.campusdirect.io",
  url: "https://www.campusdirect.io",
  openGraph: {
    title: "Colombo International College | Your Trusted Education Partner",
    description:
      "Colombo International College is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
    url: "https://www.campusdirect.io",
    siteName: "Colombo International College",
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
  author: "Colombo International College",
  publisher: "Colombo International College",
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
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2"></div>
      <ContainerLayout>
        <CountrySection />
        <SubjectSection />
      </ContainerLayout>
      <ContainerLayout>
        <FAQSection />
        <ContactSection />
      </ContainerLayout>
      <CourseViewDrawer intakes={intakes} />
    </>
  );
}
