import {
  BackBtn,
  ContainerLayout,
  Hero,
  InnerContainer,
} from "@/components/atoms";
import { BriefcaseIcon } from "@/components/atoms/Icons";
import { TabsView } from "@/components/molecules";
import React from "react";

const ViewApplication = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke">
        <ContainerLayout>
          <InnerContainer>
            <div className="py-10">
              <div className="fadeIn flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <p className="text-base text-textColor font-bold">
                      ID : APL-71026555
                    </p>
                    <p className="text-xs text-black/60">
                      View your application here
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <BackBtn
                    backUrl="/applications"
                    backText="Back to Applications"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 mt-5 fadeIn">
                <TabsView />
              </div>
            </div>
          </InnerContainer>
        </ContainerLayout>
      </div>
    </React.Fragment>
  );
};

export default ViewApplication;
