import Image from "next/image";
import React from "react";

type FlagIconProps = {
  url: string;
  title: string;
};

export const FlagIcon = ({ url, title }: FlagIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={url}
          width={40}
          height={40}
          alt="flag"
          className="rounded-full  object-cover xs:w-8 xs:h-8 md:w-10 md:h-10"
        />
      </div>
      <p className="xs:text-xs md:text-sm">{title}</p>
    </div>
  );
};
