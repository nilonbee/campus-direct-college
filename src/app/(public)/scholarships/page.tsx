import {
  ContainerLayout,
  EmptyState,
  Hero,
  InnerContainer,
} from "@/components/atoms";
import {
  GridWrapper,
  ScholarshipsBanner,
  ScholarshipsBox,
} from "@/components/molecules";
import { InterestedSection } from "@/components/organisms";
import { getScholarships } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";
import { GoogleTagManager } from "@next/third-parties/google";
import React from "react";

export const revalidate = 10;

export const metadata = {
  title: "Scholarships - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/scholarships",
  url: "https://www.campusdirect.io/scholarships",
};

const Scholarships = async () => {
  const filterOptions = {
    page: 1,
    pageSize: 10,
    status: "all",
    country_id: "",
    uni_id: "",
  };
  const scholarships = await getScholarships(filterOptions);

  return (
    <>
      <GoogleTagManager gtmId="GTM-M9SGVQTL" />
      <Hero />
      <ScholarshipsBanner />
      <ContainerLayout>
        <InnerContainer>
          <div className="mb-20 mt-20">
            <GridWrapper>
              {scholarships?.map((item: any, index: number) => (
                <ScholarshipsBox
                  key={index}
                  title={item.title}
                  image={rootImagePath(item.cover_url as string)}
                  university={item.uni_name}
                  quantity={item.quantity}
                  country={item.country_name}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
            {scholarships.length === 0 && <EmptyState />}
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default Scholarships;
