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
        </>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
