import {
  ContainerLayout,
  InnerContainer,
  SectionHeader,
  Hero,
} from "@/components/atoms";
import { AboutParagraph, PurposeBox } from "@/components/molecules";
import React from "react";
import { PeopleIcon, TargetIcon, LightIcon } from "@components/atoms/Icons";
import { InterestedSection } from "@/components/organisms";
import { rootImagePath } from "@/utils/rootImagePath";

export const metadata = {
  title: "About Us - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/about-us",
  url: "https://www.campusdirect.io/about-us",
};

const articles = [
  {
    id: 1,
    image: rootImagePath("/about-us/about-us1.jpg"),
    description: [
      "Welcome to Campus Direct College, where innovation meets opportunity in higher education. Located in the heart of Colombo, Sri Lanka, we are redefining the educational landscape by empowering students to excel in a rapidly evolving global job market. With a focus on practical skills, real-world knowledge, and comprehensive development, our programs are designed to unlock the potential of every student who walks through our doors. Our mission is simple yet powerful: to deliver a transformative learning experience that bridges the gap between education and professional success.",
      "For over 16 years, Campus Direct has been a trusted leader in direct placements, connecting thousands of students to life-changing career opportunities. Through personalized guidance, robust industry connections, and unwavering dedication, we have helped countless individuals embark on successful career journeys. Over the years, we have built a reputation for being more than just a service provider; we are a partner in every student’s growth, nurturing ambition and turning potential into performance. Our extensive network of partnerships spans across top-tier institutions, industry leaders, and global enterprises, creating a web of support that benefits our students.",
    ],
  },
  {
    id: 2,
    image: rootImagePath("/about-us/about-us2.jpg"),
    subHeader: "A Tradition of Excellence",
    description: [
      "For over 16 years, Campus Direct has been a trusted leader in direct placements, connecting thousands of students to life-changing career opportunities. Through personalized guidance, robust industry connections, and unwavering dedication, we have helped countless individuals embark on successful career journeys. ",
      "Over the years, we have built a reputation for being more than just a service provider; we are a partner in every student’s growth, nurturing ambition and turning potential into performance. Our extensive network of partnerships spans across top-tier institutions, industry leaders, and global enterprises, creating a web of support that benefits our students.",
    ],
  },
  {
    id: 3,
    image: rootImagePath("/about-us/about-us3.jpg"),
    subHeader: "Meeting the Needs of Modern Learners",
    description: [
      "Our programs include Pearson-Edexcel Higher National Diplomas (HNDs) in Computing and Business, designed to meet the demands of today’s workforce and to prepare students for a world driven by technology and innovation. We provide a strong foundation that blends rigorous academics with real-world applications, ensuring students graduate with the skills needed to excel professionally.",
      "Our HNDs are a pathway to success, allowing students to either enter the workforce immediately with a competitive edge or continue their studies through top-up degree programs and further academic pursuits.\n",
    ],
  },
  {
    id: 4,
    subHeader: "Comprehensive Higher Education Programs",
    description: [
      "While our success in direct placements is notable, we recognize that many students in Sri Lanka seek alternative educational pathways.",
      " For some, immediate employment may not be the goal; instead, they seek to continue their education, hone new skills, and remain connected to family and community. At Campus Direct College, we have listened to these needs and crafted a solution that offers flexibility, access, and opportunity.\n",
    ],
  },
  {
    id: 5,
    subHeader: "Bridging Education and Employment",
    description: [
      "We pride ourselves on our innovative dual-approach model, which bridges the gap between academic study and professional development. This model enables our students to simultaneously pursue higher education qualifications and gain practical industry experience. By partnering with leading organizations and industry experts, we offer students direct placement opportunities that align with their career aspirations. This dual focus on learning and working ensures our graduates are not just academically prepared but also equipped with the soft skills, confidence, and adaptability required in the modern workplace.",
    ],
  },
  {
    id: 7,
    subHeader: "A Dynamic Learning Environment",
    description: [
      "At Campus Direct College, we foster a vibrant, inclusive, and stimulating educational environment that emphasizes innovation, collaboration, and global connectivity. Our students benefit from state-of-the-art facilities, interactive learning spaces, and access to cutting-edge technology. Our faculty comprises passionate educators and industry professionals who bring real-world expertise and innovative teaching methods to the classroom. We prioritize experiential learning, enabling students to apply theoretical knowledge to practical challenges, collaborate on projects, and cultivate critical thinking and leadership skills.\n",
    ],
  },
  {
    id: 8,
    subHeader: "Pathways to Global Recognition",
    description: [
      "We believe in providing students with the opportunity to connect and thrive on a global stage. Our partnerships with reputable British universities create pathways for students to pursue top-up degrees and full degree programs without leaving Sri Lanka. This transnational approach to education ensures our students have access to globally recognized qualifications and exposure to international perspectives, preparing them for success in an increasingly interconnected world.",
    ],
  },
  {
    id: 9,
    subHeader: "Our Commitment to Students and Community",
    description: [
      "Campus Direct College is more than an educational institution; it is a community dedicated to transforming lives. Our commitment to our students extends beyond the classroom. We support our students every step of the way, from personalized academic guidance and career counseling to alumni networking and professional development opportunities. Our goal is to cultivate confident, capable, and globally-minded graduates who are ready to lead and innovate in their chosen fields.",
    ],
  },
  {
    id: 9,
    subHeader: "Transforming Lives, Building Futures",
    description: [
      "Our work is driven by a deep belief in the power of education to transform lives and build better futures. We are proud to be part of the journey for countless aspiring professionals in Sri Lanka. Whether students choose to enter the workforce immediately or continue their education through further studies, we are here to ensure they are fully prepared for every step of their journey.",
      "Welcome to Campus Direct College—where learning, opportunity, and ambition come together to create lasting success. Here, your future begins, and together, we can change the world.",
    ],
  },
];

const segments = [
  {
    id: 1,
    icon: <TargetIcon />,
    title: "Our Mission",
    description: [
      "Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
    ],
  },
  {
    id: 2,
    icon: <LightIcon />,
    title: "Our Vision",
    description: [
      "Our vision is to be the leading education consultancy of choice for students by ensuring our services cater to their individual needs and assist them in preparation for higher studies in overseas, which in turn will pave the path for rewarding careers and job prospects in the future.",
    ],
  },
  {
    id: 3,
    icon: <PeopleIcon />,
    title: "Join Our Community",
    description: [
      "Campus Direct is passionate about empowering students to unlock their full potential and shape their futures. Join our community of successful students who have realized their dreams of studying abroad. Use our portal to apply to your preferred universities or contact us to schedule a consultation with one of our experienced educational consultants and embark on an extraordinary educational journey with Campus Direct",
      "Feel free to explore our website and discover how Campus Direct can help shape your educational journey.",
    ],
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="pt-12 pb-12">
          <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
            <SectionHeader
              title="About Us"
              description="Welcome to Campus Direct."
            />
          </div>
        </div>
        <InnerContainer>
          {articles.map((article) => (
            <AboutParagraph
              key={article.id}
              image={article.image}
              description={article.description}
              subHeader={article.subHeader}
            />
          ))}

          <div className="block md:grid md:gap-6 grid-cols-2 m-auto  mt-12">
            {segments.slice(0, 2).map((segment, index) => (
              <PurposeBox
                key={index}
                icon={segment.icon}
                description={segment.description}
                title={segment.title}
              />
            ))}
          </div>

          <div className="block md:grid md:gap-6 grid-cols-1 m-auto">
            {segments.slice(2).map((segment, index) => (
              <PurposeBox
                key={index}
                icon={segment.icon}
                description={segment.description}
                title={segment.title}
              />
            ))}
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default AboutPage;
