import { Footer, HeaderTwo } from "@/components/molecules";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <HeaderTwo />
      {children}
      <Footer />
    </section>
  );
}
