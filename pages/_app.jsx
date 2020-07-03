import { h } from "preact";
import "../styles/_index.sass";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;