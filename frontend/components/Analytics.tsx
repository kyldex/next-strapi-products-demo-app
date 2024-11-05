import Script from 'next/script';

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

const Analytics: React.FC = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
    />
    <Script id="analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${ANALYTICS_ID}');
      `}
    </Script>
  </>
);

export default Analytics;
