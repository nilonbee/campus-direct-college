/* eslint-disable @next/next/next-script-for-ga */
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#065DA8",
};

export const metadata = {
  title: "Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io",
  url: "https://www.campusdirect.io",
  openGraph: {
    title: "Campus Direct | Your Trusted Education Partner",
    description:
      "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
    url: "https://www.campusdirect.io",
    siteName: "Campus Direct",
    images: [
      {
        url: "https://ik.imagekit.io/cdukstore/logo/Logo-Clr.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@Campus_DirectUK",
    site: "@Campus_DirectUK",
    cardType: "summary_large_image",
  },
  robots: "index, follow",
  author: "Campus Direct",
  publisher: "Campus Direct",
  alternate: "https://www.campusdirect.io",
  viewport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/fave.png" />
        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:5046730,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
          }}
        />

        {/* Whatsapp chat Widget */}
        <Script id="whatsapp-chat-widget" strategy="lazyOnload">
          {`
          var url = '/ChatWidget.js';
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = url;
          var options = {
            "enabled": true,
            "chatButtonSetting": {
              "backgroundColor": "#4dc247",
              "ctaText": "",
              "borderRadius": "25",
              "marginLeft": "0",
              "marginBottom": "20",
              "marginRight": "20",
              "position": "right"
            },
            "brandSetting": {
              "brandName": "Campus Direct",
              "brandSubTitle": "Typically Within Seconds",
              "brandImg": "https://yenasyswebchat.blob.core.windows.net/webplugin/CDUKlogo.jpg",
              "welcomeText": "Hi there!\\nHow can I help you?",
              "messageText": "Hello",
              "backgroundColor": "#0a5f54",
              "ctaText": "Start Chat",
              "borderRadius": "25",
              "autoShow": false,
              "phoneNumber": "94779005555"
            }
          };
          s.onload = function () {
            CreateWhatsappChatWidget(options);
          };
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M9SGVQTL');
      `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Notification Toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px",
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        {children}

        {/* IAS Badge */}
        <Script src="https://www-cdn.icef.com/scripts/iasbadgeid.js" />
      </body>
    </html>
  );
}
