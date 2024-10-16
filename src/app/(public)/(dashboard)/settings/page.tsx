import React from "react";
import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import { ChangePasswordForm } from "@/components/organisms/ChangePasswordForm";
import Image from "next/image";

const SettingsPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="bg-whiteSmoke">
        <ContainerLayout>
          <InnerContainer>
            <div className="mb-8 fadeIn flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center mt-8">
                <div className="w-12 h-12">
                  <Image
                    src={"/images/icons/setting.svg"}
                    alt="Profile"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className="text-base text-textColor font-bold">Settings</p>
                  <p className="text-xs text-black/60">
                    Manage your account settings
                  </p>
                </div>
              </div>
            </div>
            <ChangePasswordForm />
          </InnerContainer>
        </ContainerLayout>
      </div>
    </React.Fragment>
  );
};

export default SettingsPage;
