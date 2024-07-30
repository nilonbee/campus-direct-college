"use client";
import { CheckBox, MainButton } from "@/components/atoms";
import {
  InputField,
  InputSelectField,
  PhoneInputField,
} from "@/components/molecules";
import { ICountry } from "@/types/countries";
import { sendOtpSms, submitLeadForm, verifyOtpSms } from "@/utils/api-requests";
import validationSchema from "@/utils/validationSchema";
import React, { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";

type FormValues = {
  fullName: string;
  email: string;
  contactNo: string;
  studyCountry: string;
  fundedBy: string;
  interestedField: string;
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

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const [loading, setLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [applicationData, setApplicationData] = useState<FormValues>(
    {} as FormValues,
  );
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [step, setStep] = useState(1);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!isAgreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setLoading(true);
    data.fundedBy = foundOptions?.find((item) => item.value === +data.fundedBy)
      ?.label as string;
    data.interestedField = interestedFieldOptions?.find(
      (item) => item.value === +data.interestedField,
    )?.label as string;
    data.studyCountry = countries?.find(
      (item) => item.id === +data.studyCountry,
    )?.name as string;
    setApplicationData(data);
    const isLKNumber = await checkTheSLNumber(data.contactNo);
    if (isLKNumber) {
      const checkLength = data.contactNo.slice(3);
      if (checkLength.length !== 9) {
        toast.error("Please enter the valid phone number");
        setLoading(false);
        return;
      }
      const removePlus = data.contactNo.replace("+", "");
      await sendOtpSms(removePlus);
      toast.success("OTP sent successfully");
      setLoading(false);
      setStep(2);
      startTimer();
    } else {
      applicationSubmitData(data);
    }
  };

  const checkTheSLNumber = async (value: string) => {
    const checkNo = value.slice(0, 3);
    if (checkNo === "+94") {
      return true;
    }
    return false;
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  };

  const resendOtp = async () => {
    const removePlus = applicationData?.contactNo.replace("+", "");
    await sendOtpSms(removePlus as string);
    toast.success("OTP sent successfully");
    startTimer();
  };

  const inputOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    const otpArr = [...otp];
    otpArr[index] = value;
    setOtp(otpArr);

    // Focus on the next input if current value is not empty and not the last input
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const otpVerification = async () => {
    setLoading(true);
    if (otp.join("").length !== 6) {
      toast.error("Please enter the valid OTP");
      setLoading(false);
      return;
    }
    const removePlus = applicationData?.contactNo.replace("+", "");
    const response = await verifyOtpSms(removePlus as string, otp.join(""));
    if (response.status === "success") {
      toast.success("OTP verified successfully");
      applicationSubmitData(applicationData);
    } else {
      toast.error(response.message);
      setLoading(false);
      setStep(2);
    }
  };

  const applicationSubmitData = async (data: FormValues) => {
    const resData = await submitLeadForm(data);
    if (resData.status === "success") {
      toast.success("Application submitted successfully");
      setStep(3);
      setLoading(false);
    } else {
      toast.error(resData.message);
      setLoading(false);
    }
  };

  const foundOptions = [
    { value: 1, label: "Self Funded" },
    { value: 2, label: "Parents" },
    { value: 3, label: "Seeking Scholarship" },
    { value: 4, label: "Bank Loan" },
  ];

  const interestedFieldOptions = [
    { value: 1, label: "Accounting and Finance" },
    { value: 2, label: "Arts" },
    { value: 3, label: "Business" },
    { value: 4, label: "Education" },
    { value: 5, label: "Engineering" },
    { value: 6, label: "Health" },
    { value: 7, label: "IT" },
    { value: 8, label: "Management" },
    { value: 9, label: "Science" },
    { value: 10, label: "Teaching" },
    { value: 11, label: "Tourism, Sports and Events" },
    { value: 12, label: "Other" },
  ];

  return (
    <div className="bg-whiteSmoke p-5 rounded-md shadow-md xs:w-full md:w-[380px] h-fit">
      {step === 1 && (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={validationSchema.fullName}
              render={({ field }) => (
                <div>
                  <InputField
                    placeholder="Enter Your Full Name"
                    type="text"
                    id="fullName"
                    error={errors.fullName?.message}
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
              rules={validationSchema.email}
              render={({ field }) => (
                <div>
                  <InputField
                    placeholder="Email Address"
                    type="text"
                    id="email"
                    error={errors.email?.message}
                    {...field}
                  />
                </div>
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              name="contactNo"
              control={control}
              rules={validationSchema.contactNo}
              render={({ field }) => (
                <div>
                  <PhoneInputField
                    placeholder="Enter your phone number"
                    required
                    id="contactNo"
                    error={errors.contactNo?.message}
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
              rules={validationSchema.requiredField}
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
            <CheckBox
              isChecked={isAgreed}
              setIsChecked={setIsAgreed}
              id="agreed-checkbox"
            />
            <label
              className="text-sm ml-2 text-black/60 cursor-pointer"
              htmlFor="agreed-checkbox"
            >
              I have read and agreed to{" "}
              <a href="#" className="text-primary" target="_blank">
                Terms
              </a>
              &nbsp;and&nbsp;
              <a href="#" className="text-primary" target="_blank">
                Privacy Policy
              </a>
            </label>
          </div>

          <MainButton
            customStyle=""
            label="Submit Now"
            btnSize="Medium"
            fullWith
            btnStyle="Primary"
            submit
            loading={loading}
            disabled={loading}
          />
        </form>
      )}

      {step === 2 && (
        <div className="">
          <div className="flex gap-2 items-center">
            <IoArrowBackOutline
              size={24}
              className="text-black/80 cursor-pointer"
              onClick={() => setStep(1)}
            />
            <p className="text-lg font-bold text-black/80">Verification Code</p>
          </div>

          <p className="text-xs text-black/60 mt-2 mb-4">
            We have sent an OTP to your mobile number. Please enter the OTP to
            verify your mobile number.
          </p>
          <div className="flex space-x-2 justify-between">
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="otp-input"
                value={otp[index]}
                ref={(el) => (inputsRef.current[index] = el) as any}
                onChange={(e) => inputOtpChange(e, index)}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-black/60 mt-2">
              Didn&apos;t receive the OTP?{" "}
              <button
                className="text-primary hover:underline"
                onClick={() => resendOtp()}
              >
                Resend OTP
              </button>
            </p>
            <p className="text-xs text-black/60 mt-2">
              Time remaining: <span className="text-primary">{timer}</span>
            </p>
          </div>
          <MainButton
            customStyle="mt-4"
            label="Verify OTP"
            btnSize="Medium"
            fullWith
            btnStyle="Primary"
            loading={loading}
            disabled={loading}
            onClick={otpVerification}
          />
        </div>
      )}

      {step === 3 && (
        <div className="text-center flex items-center flex-col">
          <p className="text-lg font-bold text-black/80">Thank you!</p>
          <FaCircleCheck className="text-[#369A67] mt-4" size={60} />
          <p className="text-sm text-black/60 mt-2">
            Your data has been submitted successfully. Our team will contact you
            soon.
          </p>
        </div>
      )}
    </div>
  );
};
