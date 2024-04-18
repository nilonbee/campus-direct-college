import { ContainerLayout, InnerContainer } from "@/components/atoms";
import { AuthHeader } from "@/components/molecules";
import { RegisterForm } from "@/components/organisms";

const RegisterPage = () => {
  return (
    <ContainerLayout>
      <div className="flex h-screen justify-center items-center">
        <div className="mx-auto lg:w-[500px] md:w-[500px] sm:w-[100%] xs:w-[100%] pt-10">
          <AuthHeader title="Register" />
          <RegisterForm />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default RegisterPage;
