import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules";
import { RegisterForm } from "@/components/organisms";

export const metadata = {
  title: "Register - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/register",
  url: "https://www.campusdirect.io/register",
};

const RegisterPage = () => {
  return (
    <ContainerLayout>
      <InnerContainer>
        <div className="flex justify-center items-center">
          <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
            <AuthHeader title="Register" />
            <RegisterForm />
          </div>
        </div>
      </InnerContainer>
    </ContainerLayout>
  );
};

export default RegisterPage;
