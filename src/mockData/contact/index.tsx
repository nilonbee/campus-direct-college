import { BsClock } from "react-icons/bs";

export const contactInfo = {
  phoneNumber: "0707855555",
  email: "info@cicedu.edu.lk",
  address: "24/1 Dudley Senanayake Mawatha, Colombo 08",
  openingTimes: [
    {
      branch: "Colombo Branch",
      times: [
        {
          text: "Monday–Friday: 9.00am – 5.00pm",
          icon: <BsClock color={"#fff"} size={16} />,
        },

        {
          text: "Saturday: 9.00am - 5.00pm",
          icon: <BsClock color={"#fff"} size={16} />,
        },
        {
          text: "Sun: Closed",
          icon: <BsClock color={"#fff"} size={16} />,
        },
      ],
    },
  ],
};

// LK - Sri Lanka
// AE - United Arab Emirates
// GB - United Kingdom
