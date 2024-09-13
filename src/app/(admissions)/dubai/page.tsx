import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { BannerWithForm } from "@/components/molecules";
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
    </>
  );
};

export default DubaiPage;
