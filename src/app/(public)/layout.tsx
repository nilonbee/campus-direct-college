import { Footer, Header } from "@/components/molecules";
import { GoogleTagManager } from "@next/third-parties/google";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <GoogleTagManager gtmId="GTM-M9SGVQTL" />
      <Header />
      {children}
      <Footer />
    </section>
  );
}
