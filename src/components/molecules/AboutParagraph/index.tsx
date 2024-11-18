/* eslint-disable @next/next/no-img-element */
import React from "react";
interface AboutParagraphTypes {
  image?: string;
  description: string[];
  subHeader?: string;
}

export const AboutParagraph: React.FC<AboutParagraphTypes> = ({
  image,
  description,
  subHeader,
}) => {
  return (
    <article className="w-full mb-5 flex flex-row justify-center items-center md:flex-row sm:flex-col xs:flex-col gap-6">
      {image && (
        <div>
          <div className="p-4 flex flex-col gap-2.5 items-start relative sm:w-[350px] xs:w-full bg-[#f8f8f8] rounded shadow border border-boxBorder">
            <img
              src={image}
              className="w-full h-full bg-[#d9d9d9] bg-cover rounded"
              alt="image-rectangle"
            />
          </div>
        </div>
      )}
      <div className="block">
        <p className="mb-4 text-xl font-semibold text-center">{subHeader}</p>
        {description.map((section, index) => (
          <p
            className="text-sm leading-6 text-textColor mb-4 text-justify"
            key={index}
          >
            {section}
          </p>
        ))}
      </div>
    </article>
  );
};
