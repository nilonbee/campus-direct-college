import React from "react";
// import { VscClose } from "react-icons/vsc";

interface FilterBtnProps {
  name: string;
}

export const FilterBtn = ({ name }: FilterBtnProps) => {
  return (
    <div className="flex items-center gap-1 bg-grayLight px-2 py-1 rounded-md border border-primary">
      <span className="text-xs text-textColor">{name}</span>
    </div>
  );
};
