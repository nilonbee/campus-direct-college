import { ContainerLayout } from "@/components/atoms";
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
            <a
              href="https://wa.me/94779005555"
              className="text-primary text-sm border border-primary px-4 py-2 rounded-md"
              target="_blank"
            >
              Call us now
            </a>
            <Image
              src="/images/whatsapp.png"
              width={20}
              height={20}
              alt="whatsapp"
              className="w-10 h-10"
            />
          </div>
        </nav>
      </ContainerLayout>
    </header>
  );
};
