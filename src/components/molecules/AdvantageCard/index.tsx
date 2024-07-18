import Image from "next/image";
import React from "react";

type AdvantageCardProps = {
  title: string;
  description: string;
  icon: string;
};

export const AdvantageCard = ({
  title,
  description,
  icon,
}: AdvantageCardProps) => {
  return (
    <div className="p-4">
      <Image src={icon} width={50} height={50} alt="" />
      <h2 className="xs:text-sm md:text-xl text-textColor mt-4">{title}</h2>
      <p className="mt-2 text-textColor/60 xs:text-xs md:text-sm text-justify">
        {description}
      </p>
    </div>
  );
};
