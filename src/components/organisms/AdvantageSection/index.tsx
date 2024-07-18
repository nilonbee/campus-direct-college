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
              title="Leverage Edu Advantage"
              description="Personalised Attention Matched to Who You Are, Your Unique Profile & Your Unique Aspirations"
            />
            <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-10 w-full">
              <AdvantageCard
                title="Finding The Program That’s Right For You 🧞‍♂️"
                description="Nothing is as important as selecting the right program. In the right university. In the right country. Getting this right for you means everything to us"
                icon="/images/icons/DreamCourse.png"
              />
              <AdvantageCard
                title="Curated Expert-Led Application Assistance 👩‍🏫"
                description="Coach who handholds your journey, & the Leverage mobile app which gives you live status at every single step"
                icon="/images/icons/assistance.png"
              />
              <AdvantageCard
                title="English Assessment Test Prep On-The-Go 📝"
                description="Backed by makers of TOEFL, GRE, partners with IELTS, DET, others, & a Product Hunt #1 Learning App - you’re set!"
                icon="/images/icons/testPrep.png"
              />
              <AdvantageCard
                title="Hacking Thy Interviews & The All-Important VISA passport "
                description="Self-prep using UnivalleyCRED, Alumni-supported Mocks, & the highest VISA success rate globally arrivedVisa"
                icon="/images/icons/visa.png"
              />
              <AdvantageCard
                title="Solving For Money Money Money! 💰"
                description="Outside this exclusive Leverage Edu X Nas Daily Scholarship, we bring together $Mn’s worth more scholarship + help find attractive friendly education financing options via Fly Finance"
                icon="/images/icons/financial.png"
              />
              <AdvantageCard
                title="Making Sure You Stay Right, And Stay Well 🏠"
                description="With Fly Homes we curate hundreds of options for you that are pre-verified, so that you can focus on what really matters"
                icon="/images/icons/acco.png"
              />
            </div>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </div>
  );
};
