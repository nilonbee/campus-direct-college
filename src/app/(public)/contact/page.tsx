import React from "react";
import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import {
  ContactSection,
  AddressSection,
  ContactInfoSection,
} from "@/components/organisms";

export const metadata = {
  title: "Contact Us - Colombo International College",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/contact",
  url: "https://www.campusdirect.io/contact",
};

const ContactPage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Contact Us"
            description="Colombo International Campus is passionate about empowering students"
          />
        </div>
        <InnerContainer>
          <ContactInfoSection />
        </InnerContainer>
        <ContactSection />
        <InnerContainer>
          <div className="w-full mt-10 lg:px-20 md:px-0 mb-10">
            <AddressSection />
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default ContactPage;
