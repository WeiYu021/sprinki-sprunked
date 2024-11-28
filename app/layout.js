import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import "@/app/globals.css";
import Script from 'next/script';
import { dir } from 'i18next'
import { languages } from './i18n/settings'



export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ 
    children, 
    params: {
      lng
    } 
}) {
  return (
    <html lang={lng} data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CMFD8N9DFZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CMFD8N9DFZ');
        `}
      </Script>
      <body>

        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
          
          {children}
      </body>
    </html>
  );
}
