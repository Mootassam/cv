/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";
// eslint-disable-next-line @next/next/no-script-in-document
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta charSet='utf-8' />
          <meta
            content='width=device-width, initial-scale=1.0'
            name='viewport'
          />
          <title>Mootassam Boughdiri</title> */}

          <link href='/assets/img/favicon.png' rel='icon' />
          <link
            href='/assets/img/apple-touch-icon.png'
            rel='apple-touch-icon'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag ('config', 'G-HTXT9VZ036');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
