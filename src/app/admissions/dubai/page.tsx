import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { BannerWithForm, Footer, HeaderTwo } from "@/components/molecules";
import {
  AddressSection,
  AdvantageSection,
  FAQSection,
  StudentsSaysSection,
} from "@/components/organisms";
import React from "react";

const DubaiPage = async () => {
  return (
    <>
      <HeaderTwo contactNo="+971585469555" />
      <BannerWithForm pageId={"Dubai"} />
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

export default DubaiPage;
