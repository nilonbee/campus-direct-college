"use client";
import { MainButton } from "@/components/atoms";
import {
  InputField,
  InputSelectField,
  PhoneInputField,
} from "@/components/molecules";
import { ICountry } from "@/types/countries";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  studyCountry: string;
};

interface LeadsFormProps {
  countries: ICountry[];
}

export const LeadsForm = ({ countries }: LeadsFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, setLoading] = React.useState(false);
  const [isAgreed, setIsAgreed] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-whiteSmoke p-5 rounded-md shadow-md xs:w-full md:w-[380px]">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  placeholder="Enter Your Full Name"
                  type="text"
                  id="fullName"
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  placeholder="Email Address"
                  type="text"
                  id="email"
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <div>
                <PhoneInputField
                  placeholder="Enter your phone number"
                  required
                  id="phone"
                  error={errors.phone?.message}
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputField
                  placeholder="Enter your country"
                  type="text"
                  id="country"
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="studyCountry"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputSelectField
                  id="country_id"
                  placeholder="Select Preferred Country to Study"
                  options={countries?.map((country) => ({
                    value: country.id,
                    label: country.name,
                  }))}
                  error={errors.studyCountry?.message}
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <div className="flex mb-4">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-500  cursor-pointer transition duration-150 ease-in-out checked:bg-blue-600 checked:border-transparent mt-1"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <label className="text-sm ml-2 text-black/60">
            I have read and agreed to{" "}
            <a href="#" className="text-primary">
              Terms
            </a>
            &nbsp;and&nbsp;
            <a href="#" className="text-primary">
              Privacy Policy
            </a>
          </label>
        </div>

        <MainButton
          customStyle=""
          label="Sign In"
          btnSize="Medium"
          fullWith
          btnStyle="Primary"
          submit
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
};
