import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { CareersBanner } from "@/components/molecules";
import { CareerSection, InterestedSection } from "@/components/organisms";
import { getCareers } from "@/utils/api-requests";

export const revalidate = 10;

export const metadata = {
  title: "Join Our Team - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/careers",
  url: "https://www.campusdirect.io/careers",
};

const CareersPage = async () => {
  const careersData = await getCareers("all");
  const careerCount = careersData?.total;

  return (
    <>
      <Hero />
      <CareersBanner />
      <ContainerLayout>
        <InnerContainer>
          <CareerSection careerCount={careerCount} careersData={careersData} />
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default CareersPage;
