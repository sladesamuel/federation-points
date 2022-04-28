import "../styles/globals.css";
import netlifyIdentity from "netlify-identity-widget";

if (typeof window !== "undefined") {
  window.netlifyIdentity = netlifyIdentity;
  netlifyIdentity.init();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
