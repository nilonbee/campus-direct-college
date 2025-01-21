import { BsClock } from "react-icons/bs";

export const contactInfo = {
  phoneNumber: "+94 77 900 5555",
  email: "info@cduk.lk",
  address:
    "Campus Direct – Head Office, 36 B, Gower Street, Colombo 05, Sri Lanka",
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
