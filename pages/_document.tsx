/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  config = {
    unstable_runtimeJS: false,
  };

  render() {
    return (
      <Html>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <title>Mootassam Boughdiri </title>

        {/* Favicons */}
        <link href='assets/img/favicon.png' rel='icon' />
        <link href='assets/img/apple-touch-icon.png' rel='apple-touch-icon' />
        {/* Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css?family=https://fonts.googleapis.com/css?family=Inconsolata:400,500,600,700|Raleway:400,400i,500,500i,600,600i,700,700i'
          rel='stylesheet'
        />
        {/* Vendor CSS Files */}
        <link href='assets/vendor/aos/aos.css' rel='stylesheet' />
        <link
          href='assets/vendor/bootstrap/css/bootstrap.min.css'
          rel='stylesheet'
        />
        <link
          href='assets/vendor/bootstrap-icons/bootstrap-icons.css'
          rel='stylesheet'
        />
        <link
          href='assets/vendor/swiper/swiper-bundle.min.css'
          rel='stylesheet'
        />
        {/* Template Main CSS File */}
        <link href='assets/css/style.css' rel='stylesheet' />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script src='assets/vendor/aos/aos.js'></script>
        <script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
        <script src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script>
        <script src='assets/vendor/swiper/swiper-bundle.min.js'></script>
        <script src='assets/js/main.js'></script>
      </Html>
    );
  }
}

export default MyDocument;
