"use client";
import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules/AuthHeader";
import { LoginForm } from "@/components/organisms";
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
  title: "Login - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/login",
  url: "https://www.campusdirect.io/login",
};

export default function LoginPage() {
  const router = useRouter();

  const { authUser } = useUserStore();

  useEffect(() => {
    if (authUser) {
      router.push("/applications");
    }
  }, [authUser, router]);

  if (authUser) {
    return router.push("/applications");
  }

  return (
    <ContainerLayout>
      <InnerContainer>
        <div className="flex justify-center items-center">
          <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
            <AuthHeader title="Sign In" />
            <LoginForm />
          </div>
        </div>
      </InnerContainer>
    </ContainerLayout>
  );
}
