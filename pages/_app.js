import auth from "../utils/auth";
import "../styles/globals.css";

if (typeof window !== "undefined") {
  auth.init();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
