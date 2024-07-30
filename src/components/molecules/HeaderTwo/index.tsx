import { ContainerLayout, MainButton } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";

export const HeaderTwo = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <ContainerLayout>
        <nav
          className="mx-auto flex w-full justify-between items-center  py-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image
                className="h-14 w-auto"
                src="/images/Logo-Clr.png"
                alt="Campus Direct"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <a href="tel:+94779005555">
              <MainButton
                customStyle=""
                label="Call Now"
                btnSize="Medium"
                fullWith
                btnStyle="Primary"
              />
            </a>
          </div>
        </nav>
      </ContainerLayout>
    </header>
  );
};
