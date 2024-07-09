import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <GoogleTagManager gtmId="GTM-M9SGVQTL" />
      <Link
        href="/"
        className="absolute top-5 right-5 text-2xl cursor-pointer w-[24px] h-[24px]"
      >
        <AiOutlineClose className="font-semibold" />
      </Link>
      {children}
    </section>
  );
}
