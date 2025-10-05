import React from "react";
import Head from "next/head";
import Navbar from "../global/Navbar";
import MobileNavbar from "../global/MobileNavbar";
import Footer from "../global/Footer";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: React.ReactNode;
  hideFooter?: boolean;
};

function Page({
  currentPage,
  meta: { title, desc },
  children,
  hideFooter = false,
}: PageProps) {
  const formattedTitle =
    currentPage === "Home"
      ? "Tanveer - Web Developer"
      : `${currentPage} - Tanveer`;

  return (
    <div className="w-full mx-auto flex flex-col min-h-screen text-white">
      <div className="flex-1 w-full max-w-[1200px] mx-auto flex flex-col items-center">
        <Head>
          <title>{formattedTitle}</title>
          <meta name="title" content={formattedTitle} />
          <meta name="description" content={desc} />

          {/* Favicon */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://tanveer-v2-portfolio.netlify.app/"
          />
          <meta property="og:title" content={formattedTitle} />
          <meta property="og:description" content={desc} />
          <meta
            property="og:image"
            content="https://tanveer-v2-portfolio.netlify.app/static/misc/og.png"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://tanveer-v2-portfolio.netlify.app/"
          />
          <meta name="twitter:title" content={formattedTitle} />
          <meta name="twitter:description" content={desc} />
          <meta
            name="twitter:image"
            content="https://tanveer-v2-portfolio.netlify.app/static/misc/og.png"
          />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <main className="w-full flex-1 p-5 text-center overflow-hidden md:overflow-visible">
          <div className="hidden sm:block z-50">
            <Navbar currentPage={currentPage} />
          </div>
          <div className="block sm:hidden z-50 -mx-5">
            <MobileNavbar />
          </div>
          {children}
        </main>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Page;
