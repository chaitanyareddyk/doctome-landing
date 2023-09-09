import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <link rel="shortcut icon" href="/doctome-favicon.png" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}

        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-G5YWMGQ1CF`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5YWMGQ1CF', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '211456815259725');
              fbq('track', 'PageView');
          `,
            }}
          />

          <noscript>
            <img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=211456815259725&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
