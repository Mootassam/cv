import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/style.css";

import type { AppProps } from "next/app";
import Layouts from "./view/layout/Layouts";
import jQuery from "jquery";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
