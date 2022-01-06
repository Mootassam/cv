import "../styles/globals.css";
import "../styles/style.css";
import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/aos/aos.css";
import "../styles/vendor/swiper/swiper-bundle.min.css";
import type { AppProps } from "next/app";
import Layouts from "./view/layout/Layouts";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
