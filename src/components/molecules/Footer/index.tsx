"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { contactInfo } from "@/mockData/contact";
import { listItems } from "@/mockData/footer";
import { ContainerLayout, ListItem } from "@components/atoms";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinNewIcon,
  NavigationIcon,
  PhoneIcon,
  TwitterIcon,
} from "@components/atoms/Icons";
import Image from "next/image";

export const Footer = () => {
  return (
    <React.Fragment>
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r fadeIn">
        <ContainerLayout>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 pt-[120px] pb-8">
            <div className="">
              <Image
                src="/images/footer.png"
                alt="footer-icon"
                className="object-contain w-[200px] h-[200px]"
                width={500}
                height={500}
              />
              {/* <div className="ml-7 mt-4">
                <span id="iasBadge" data-account-id="5286"></span>
              </div> */}
            </div>
            <div className="">
              <h5 className="font-bold text-base text-white mb-4">
                Useful Links
              </h5>
              <div className="flex gap-2 flex-col">
                {listItems.map((listItem, index) => (
                  <ListItem
                    key={index}
                    text={listItem.text}
                    href={listItem.href}
                    icon={listItem.icon}
                  />
                ))}
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-base text-white mb-4">
                Opening Hours
              </h5>
              {contactInfo?.openingTimes.map((item, index) => (
                <div key={index}>
                  <h5 className="text-sm text-white mb-2 mt-4">
                    {item.branch}
                  </h5>
                  <div className="flex gap-2 flex-col">
                    {item?.times.map((item, index) => (
                      <ListItem key={index} text={item.text} icon={item.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h5 className="font-bold text-base text-white mb-4">
                Contact Us
              </h5>
              <div className="flex gap-2 items-center relative bg-transparent">
                <div className="w-6 h-6">
                  <EmailIcon />
                </div>
                <h5 className="text-center font-semibold text-base text-white">
                  Email Us
                </h5>
              </div>
              <a href={`mailto:${contactInfo?.email}`}>
                <p className="text-sm text-[#e0e0e0] hover:underline">
                  {contactInfo?.email}
                </p>
              </a>
              <div className="flex gap-2 items-center relative bg-transparent mt-4">
                <div className="w-6 h-6">
                  <PhoneIcon />
                </div>
                <h5 className="text-center font-semibold text-base text-white">
                  Call Us
                </h5>
              </div>
              <a href={`tel:${contactInfo?.phoneNumber}`}>
                <p className="text-sm text-[#e0e0e0] hover:underline">
                  {contactInfo?.phoneNumber}
                </p>
              </a>
              <div className="flex gap-2 items-center relative bg-transparent mt-4">
                <div className="w-6 h-6">
                  <NavigationIcon />
                </div>
                <h5 className="text-center font-semibold text-base text-white">
                  Visit Us
                </h5>
              </div>
              <p className="text-sm text-[#e0e0e0]">{contactInfo?.address}</p>
              <div className="flex gap-6 items-start relative bg-transparent mt-4">
                <Link
                  href="https://www.facebook.com/share/1BA28MuG7S/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/campus-direct-pvt-ltd"
                  target="_blank"
                >
                  <LinkedinNewIcon />
                </Link>
                <Link
                  href="https://twitter.com/Campus_DirectUK"
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/cdukl?igsh=MWY3eGl6aGU5aHl6ZA%3D%3DCDUKColombo"
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <div className="bg-black">
        <div className="flex p-2 items-center justify-center text-white text-sm">
          <p>
            ©{new Date().getFullYear()} &nbsp;All Rights Reserved.&nbsp;|
            Design and Developed by&nbsp;
            <a
              href="https://campusdirect.io/"
              className="underline"
              rel="noreferrer"
            >
              Colombo International College
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
