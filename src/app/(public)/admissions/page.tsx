import React from "react";
import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { InterestedSection } from "@/components/organisms";

export const metadata = {
  title: "Admissions - Colombo International Campus",
  description:
    "Colombo International Campus is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "Higher Education, ",
  canonical: "https://www.campusdirect.io/about-us",
  url: "https://www.campusdirect.io/about-us",
};

const AdmissionsPage = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="/images/student-graduation-cap-gown-stands-crowded-hall.jpg"
          alt="Admissions Banner"
          className="w-full h-96 object-cover"
        />
      </div>
      <ContainerLayout>
        <InnerContainer>
          <div className="text-left max-w-3xl mx-auto py-12">
            <SectionHeader title="Admissions" />
            <p className="text-textColor py-3">
              Welcome to Colombo International Campus, where we are committed to
              providing world-class education and shaping future leaders.
              Whether you&apos;re a recent high school graduate, a transfer
              student, or an international applicant, our admissions team is
              here to guide you every step of the way.
            </p>
            <h2 className="text-lg font-semibold py-3">
              Why Choose Colombo International Campus?
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-left text-textColor mt-2">
              <li>Globally recognized degree programs</li>
              <li>Experienced faculty with industry expertise</li>
              <li>State-of-the-art learning facilities</li>
              <li>
                Strong industry partnerships for internships and career
                opportunities
              </li>
              <li>A vibrant and multicultural student community</li>
            </ul>
            <section>
              <h2 className="text-lg font-semibold py-3">How to Apply</h2>
              <h3 className="font-semibold">Step 1: Choose Your Program</h3>
              <p className="text-textColor mt-2">
                Explore our range of undergraduate programs offered under the
                following faculties:
              </p>
              <h4 className="font-semibold mt-2">Foundation Programs</h4>
              <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
                <li>Foundation in Computing</li>
                <li>Foundation in Business</li>
              </ul>
              <h4 className="font-semibold mt-2">Faculty of Computing</h4>
              <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
                <li>Pearson BTEC HND in Software Engineering</li>
                <li>Pearson BTEC HND in Cyber Security</li>
                <li>Pearson BTEC HND in Networking</li>
              </ul>
              <h4 className="font-semibold mt-2">Faculty of Business</h4>
              <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
                <li>Pearson BTEC HND in Business Management</li>
                <li>Pearson BTEC HND in Entrepreneurship and Small Business</li>
                <li>Pearson BTEC HND in Accounting & Finance</li>
              </ul>
            </section>
            <h3 className="font-semibold">
              Step 2: Check Admission Requirements
            </h3>
            <p className="text-textColor mt-2">
              Each program has specific entry requirements based on academic
              qualifications and English language proficiency.
            </p>
            <h4 className="font-semibold mt-2">Foundation Programs</h4>
            <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
              <li>GCE Ordinary Level (O/L) or equivalent qualification</li>
              <li>Minimum English language proficiency</li>
            </ul>
            <h4 className="font-semibold mt-2">Undergraduate Programs</h4>
            <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
              <li>GCE Advanced Level (A/L) or equivalent qualification</li>
              <li>Minimum English language proficiency</li>
            </ul>
            <h3 className="font-semibold py-3">
              Step 3: Submit Your Application
            </h3>
            <p className="text-textColor">
              Complete the online application form via our Admissions Portal and
              upload the required documents:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-left text-textColor">
              <li>Academic transcripts and certificates</li>
              <li>Copy of passport/national ID</li>
              <li>English proficiency test results</li>
            </ul>
            <section>
              <h2 className="text-lg font-semibold py-3">
                Important Deadlines
              </h2>
              <p className="text-textColor">
                May Intake: Apply by April 25th | October Intake: Apply by
                September 25th
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold py-3">
                Tuition Fees & Scholarships
              </h2>
              <h4 className="font-semibold mt-2">Foundation Programs</h4>
              <p className="text-textColor mt-2">
                Tuition fee - LKR 500,000 + 150 GBP
              </p>
              <h4 className="font-semibold mt-2">Undergraduate Programs</h4>
              <div className="space-y-2">
                <p className="text-textColor">Tuition fee - LKR 1,200,000</p>
                <p className="text-textColor">
                  University fee (Pearson) - 350 GBP
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold py-3">
                International Applicants
              </h2>
              <p className="text-textColor">
                We welcome students from around the world. Our International
                Student Office provides assistance with visa applications,
                accommodation, and orientation programs.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold py-3">
                Contact the Admissions Office
              </h2>
              <div className="space-y-3">
                <p className="text-textColor">📧 admissions@cicedu.edu.lk</p>
                <p className="text-textColor">📞 +94 70 785 5555</p>
                <p className="text-textColor">
                  📍 Colombo International Campus, 24/1 Dudley Senanayake
                  Mawatha, Colombo 00800, Sri Lanka
                </p>
              </div>
            </section>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default AdmissionsPage;
