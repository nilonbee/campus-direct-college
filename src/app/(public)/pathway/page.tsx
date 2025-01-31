import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import React from "react";

const PathwayPage = async () => {
  return (
    <div className="h-600">
      <ContainerLayout>
        <InnerContainer>
          <SectionHeader
            title="Higher Education Pathways"
            description="Start your Education journey in srilanka"
          />
        </InnerContainer>
      </ContainerLayout>
    </div>
  );
};

export default PathwayPage;
