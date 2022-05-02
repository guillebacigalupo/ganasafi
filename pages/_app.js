import { nonceGenerator } from "../utils/common.js";
import "../styles/globals.css";
//console.log(process.env);

global.styleNonce = nonceGenerator();
global.scriptsNonce = nonceGenerator();
global.defaultNonce = nonceGenerator();
global.fontNonce = nonceGenerator();

const DisableSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  const port = process.env.PORT ?? 3000;
  pageProps.port = port;

  return (
    <DisableSSR>
      <Component {...pageProps} />
    </DisableSSR>
  );
}

export default MyApp;
