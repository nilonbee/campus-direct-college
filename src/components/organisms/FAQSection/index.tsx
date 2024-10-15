"use client";
import { InnerContainer, SectionHeader } from "@/components/atoms";
import { MinusIcon, PlusIcon } from "@/components/atoms/Icons";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string[];
}

export const FAQSection: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleActiveIndex = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const faqsList: FAQ[] = [
    {
      question: "Why should I consider studying at Campus Direct College? ",
      answer: [
        "Campus Direct College offers a wide range of academic pathways, including Diplomas, Top-up degrees, and postgraduate programs. Our strong partnerships with international universities ensure students have opportunities to transfer abroad or complete their studies locally with globally recognized qualifications. We focus on both academic excellence and practical skills to prepare students for the evolving job market.",
      ],
    },
    {
      question:
        "Are there scholarship opportunities available at Campus Direct College? ",
      answer: [
        "Yes, Campus Direct College offers various scholarship opportunities based on academic merit, extracurricular achievements, and financial need. We also assist students in applying for scholarships with our international university partners to help reduce the financial burden of higher education.",
      ],
    },
    {
      question:
        "Is Campus Direct College affiliated with Campus Direct Placement Consultancy?",
      answer: [
        "Yes, Campus Direct College is part of the broader Campus Direct network. While Campus Direct operates as a placement consultancy assisting students in finding opportunities abroad, Campus Direct College focuses on providing high-quality higher education locally and helping students continue their education internationally through our global partnerships.",
      ],
    },
    {
      question:
        "What are the minimum entry requirements for programs at Campus Direct College?",
      answer: [
        "The minimum entry requirements vary depending on the program. For undergraduate diplomas and degrees, students typically need a minimum of 5 O/Ls including Mathematics and English, and 2-3 A/L passes. For postgraduate programs, a recognized bachelor's degree or equivalent qualifications are required. We recommend contacting our admissions team for specific entry criteria for your chosen program.",
      ],
    },
    {
      question:
        "Does Campus Direct College assist with internship placements for students? ",
      answer: [
        "Yes, we provide support in finding internship placements for our students through our industry partnerships. Internships are an integral part of our programs, allowing students to gain practical experience and improve their employability. Our dedicated career services team will guide you throughout the process of securing a relevant internship.",
      ],
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Navigate your path with clarity and confidence "
          />

          <div className="flex flex-col gap-3 justify-center items-center mt-10 w-full">
            {faqsList.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleActiveIndex(index)}
                className="rounded-[5px] p-[15px] self-stretch bg-white cursor-pointer border border-grayLight shadow"
              >
                <div className="flex justify-between items-center gap-2">
                  <p className="font-semibold leading-[26px] text-textColor text-sm">
                    {faq.question}
                  </p>
                  <div className="flex justify-center items-center">
                    {activeIndexes.includes(index) ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </div>
                </div>
                {activeIndexes.includes(index) &&
                  faq.answer.map((item, answerIndex) => (
                    <p
                      key={answerIndex}
                      className="text-sm text-textColor pt-5"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};
