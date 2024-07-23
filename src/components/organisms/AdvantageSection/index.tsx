import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { AdvantageCard } from "@/components/molecules";
import React from "react";

export const AdvantageSection = () => {
  return (
    <div className="bg-grayLight">
      <ContainerLayout>
        <InnerContainer>
          <div className="pt-20 pb-20">
            <SectionHeader
              title="Campus Direct Advantage"
              description="Your Trusted Partner in Education "
            />
            <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-10 w-full">
              <AdvantageCard
                title="Personalized Guidance"
                description="Our team of expert Counsellors will provide you with the right option to match your needs, academic background and future goals"
                icon="/images/icons/30506415.png"
              />
              <AdvantageCard
                title="Expert Knowledge"
                description="All our Counsellors are trained and certified in their respective destination’s education system. This means that all our customer’s get the right information from the best in the market."
                icon="/images/icons/academic_10433172.png"
              />
              <AdvantageCard
                title="Strong Network"
                description="At Campus Direct, we work directly with over 200+ universities and institutes across the world. This ensures that our students have access to a diverse range of programmes, scholarships and many more"
                icon="/images/icons/secure-network_15254485.png"
              />
              <AdvantageCard
                title="Recognized for Quality"
                description="With over 16 years of experience in Sri Lanka, Campus Direct is committed to maintaining service quality at the highest standards. We hold the ICEF Agency Status (IAS) and are ISO 9001:2015 compliant"
                icon="/images/icons/award_14118183.png"
              />
              <AdvantageCard
                title="Comprehensive Guidance"
                description="Our team of Counsellors will guide you from university selection and application processing to visa processing and pre-departure briefings"
                icon="/images/icons/decision-making_7891396.png"
              />
              <AdvantageCard
                title="Zero Costs"
                description="All our counselling services to students is FREE OF CHARGE!"
                icon="/images/icons/dollar_6997727.png"
              />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </div>
  );
};
