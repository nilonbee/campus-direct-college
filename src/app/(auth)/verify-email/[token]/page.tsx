"use client";
import { ContainerLayout, LoadingSpinner } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { emailVerify } from "@/utils/api-requests";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params?.token) {
      const checkVerifyId = async () => {
        await emailVerify({ code: params.token as string }).then((response) => {
          if (response?.status === "success") {
            toast.success(response.message);
            router.push("/login");
          } else {
            toast.error(response?.message ?? "Verify failed");
          }
        });
      };
      checkVerifyId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerLayout>
      <div className="flex h-screen justify-center items-center">
        <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
          <AuthHeader title="" />
          <p className="text-center mt-10 mb-2">
            Please wait for verify your account...
          </p>
          <LoadingSpinner />
        </div>
      </div>
    </ContainerLayout>
  );
}
