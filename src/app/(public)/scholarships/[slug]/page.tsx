import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { PinIcon, UniversityIcon } from "@/components/atoms/Icons";
import { CourseBoxModel, GridWrapper } from "@/components/molecules";
import { CourseViewDrawer } from "@/components/organisms";
import { ICourse } from "@/types/courses";
import { IIntake } from "@/types/intakes";
import {
  getIntakes,
  getScholarshipBySlug,
  getScholarships,
} from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import Image from "next/image";
import React from "react";
import { FiUsers } from "react-icons/fi";

export async function generateStaticParams() {
  const filterOptions = {
    page: 1,
    pageSize: 1000,
    status: "all",
    country_id: "",
    uni_id: "",
  };
  const scholarships = await getScholarships(filterOptions);
  return scholarships.map((scholarship: any) => ({
    slug: scholarship.slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const scholarshipData = await getScholarshipBySlug(params.slug);
  return {
    title: scholarshipData?.meta_title,
    description: scholarshipData?.meta_description,
    keywords: scholarshipData?.meta_keywords,
    canonical: `https://www.campusdirect.io/scholarships/${scholarshipData?.slug}`,
    url: `https://www.campusdirect.io/scholarships/${scholarshipData?.slug}`,
    openGraph: {
      title: scholarshipData?.meta_title,
      description: scholarshipData?.meta_description,
      url: `https://www.campusdirect.io/scholarships/${scholarshipData?.slug}`,
      images: [
        {
          url: rootImagePath(scholarshipData?.cover_url),
          width: 800,
          height: 600,
        },
      ],
      siteName: "Campus Direct",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      handle: "@Campus_DirectUK",
      site: "@Campus_DirectUK",
      cardType: "summary_large_image",
    },
  };
}

const ScholarshipsPage = async ({ params }: PageProps) => {
  const scholarshipData = await getScholarshipBySlug(params.slug);
  const intakes = (await getIntakes({ status: 1 })) as IIntake[];
  return (
    <div>
      <Hero />
      <Image
        src={rootImagePath(scholarshipData.banner_url)}
        width={577}
        height={377}
        alt=""
        className="object-cover flex w-full h-[300px] "
      />
      <ContainerLayout>
        <div className="-mt-20 mb-5 bg-white z-10 relative rounded-t-[50px]">
          <InnerContainer>
            <div className="flex items-center gap-4 pt-5">
              <Image
                src={rootImagePath(scholarshipData.cover_url)}
                width={577}
                height={377}
                alt=""
                className="object-cover rounded-full flex w-[100px] h-[100px]"
              />
              <div className="">
                <p className="text-base font-semibold mt-3 text-textColor">
                  {scholarshipData.title}
                </p>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px]">
                    <UniversityIcon />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    {scholarshipData.university.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px]">
                    <PinIcon />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    {scholarshipData.country.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center relative">
                  <div className="w-[18px] h-[18px] text-black/60">
                    <FiUsers />
                  </div>
                  <p className="text-sm text-black/60 line-clamp-1">
                    <b>{scholarshipData.quantity}</b> Scholarships
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full mb-10">
              <GridWrapper>
                {scholarshipData?.course?.map(
                  (item: ICourse, index: number) => (
                    <CourseBoxModel
                      key={index}
                      id={item.id}
                      course_name={item.course_name}
                      course_fee={item.course_fee}
                      country={scholarshipData.country.name}
                      level_name={item.level_name}
                      uni_logo={scholarshipData.university.uni_logo}
                      university={scholarshipData.university.name}
                      currency={item.currency}
                      btnView={true}
                      isScholarship={true}
                    />
                  ),
                )}
              </GridWrapper>
              <CourseViewDrawer intakes={intakes} />
            </div>
          </InnerContainer>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default ScholarshipsPage;
