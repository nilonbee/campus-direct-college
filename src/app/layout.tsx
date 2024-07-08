import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Direct",
  description: "Trusted Partner in Education",
  icons: {
    icon: "/images/fave.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#055da8" />
        <link rel="icon" href="/images/fave.png" />
        <title>Campus Direct | Your Trusted Partner in Education</title>
        <meta name="description" content="Trusted Partner in Education" />

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

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-M9SGVQTL" />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-4S389LVL9G" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9SGVQTL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
