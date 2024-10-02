import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { BannerWithForm, Footer, HeaderTwo } from "@/components/molecules";
import {
  AddressSection,
  AdvantageSection,
  FAQSection,
  StudentsSaysSection,
} from "@/components/organisms";
import React from "react";

const AdmissionPage = async () => {
  return (
    <>
      <HeaderTwo contactNo="+94779005555" />
      <BannerWithForm pageId={"Colombo"} />
      <AdvantageSection />
      <ContainerLayout>
        <StudentsSaysSection />
        <FAQSection />
        <InnerContainer>
          <div className="w-full mt-10 mb-10">
            <AddressSection />
          </div>
        </InnerContainer>
      </ContainerLayout>
      <Footer />
    </>
  );
};

export default AdmissionPage;
