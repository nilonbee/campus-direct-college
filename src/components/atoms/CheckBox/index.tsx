import React from "react";
import { GiCheckMark } from "react-icons/gi";

type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  id: string;
  value?: string;
};

export const CheckBox = ({
  isChecked,
  setIsChecked,
  id,
  value,
}: CheckBoxProps) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="opacity-0 absolute h-5 w-5"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        id={id}
        value={value}
      />
      {isChecked ? (
        <div className="bg-primary border-2 border-primary rounded-md h-5 w-5 flex items-center justify-center transition duration-150 ease-in-out cursor-pointer">
          <GiCheckMark className="text-white" size={12} />
        </div>
      ) : (
        <div className="bg-white border-2 border-gray rounded-md h-5 w-5 flex items-center justify-center transition duration-150 ease-in-out cursor-pointer"></div>
      )}
    </div>
  );
};
