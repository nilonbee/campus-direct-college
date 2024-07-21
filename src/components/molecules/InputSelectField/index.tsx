import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  id: string;
  required?: boolean;
  noMargin?: boolean;
  customStyle?: string;
  backgroundColor?: string;
  error?: string | undefined; // Add error prop
  options?: { value: number | string; label: string }[]; // Add options prop
};

export const InputSelectField = React.forwardRef<HTMLSelectElement, Props>(
  ({
    label,
    placeholder,
    id,
    required,
    noMargin,
    customStyle,
    error,
    backgroundColor,
    options,
    ...rest
  }) => {
    const errorCSS = error
      ? "ring-errorMsg text-errorMsg focus:ring-errorMsg"
      : "";
    return (
      <div className={`mb-${noMargin ? "0" : "4"}`}>
        {label && (
          <label
            className={`block text-sm mb-2 font-medium ${error ? "text-errorMsg" : "text-gray"}`}
            htmlFor={id}
          >
            {label} {required && <span className="text-errorMsg">*</span>}
          </label>
        )}

        <select
          className={`block w-full focus:shadow-md rounded-md text-gray py-2 pl-4 ring-1 ring-inset ring-border  focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none text-sm leading-6 ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"}  ${customStyle} ${errorCSS}`}
          id={id}
          {...rest}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        >
          <option className="text-errorMsg" value="">
            {placeholder}
          </option>
          {options?.map((option, index: number) => (
            <option
              className="text-grayMedium"
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-errorMsg text-xs">{error}</span>}
      </div>
    );
  },
);

InputSelectField.displayName = "InputSelectField";
