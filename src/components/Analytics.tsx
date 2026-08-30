import Script from "next/script";

/**
 * GA4 + Ahrefs Web Analytics snippets, per
 * webalive.atlassian.net/wiki/spaces/Effektiv/pages/2660892673.
 * Each block is a no-op until its env var is set - GSC/Ahrefs *verification*
 * meta tags live in layout.tsx's `metadata.verification` instead, since
 * Next.js renders those from the metadata object, not here.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const ahrefsAnalyticsKey = process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY;

  return (
    <>
      {gaId && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
      {ahrefsAnalyticsKey && (
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={ahrefsAnalyticsKey}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
