import HTMLHead from "../components/layout/partials/head.js";
import { StoreProvider } from "../context/store";
import React from "react";

const DisableSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps, nonce, csp }) {
  global.nonce = nonce;
  
  if (typeof window !== "undefined") window.__webpack_nonce__ = nonce["style-src"];

  return (
    <>
      <HTMLHead nonce={nonce} csp={csp} />

      <DisableSSR>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </DisableSSR>
    </>
  );
}

MyApp.getInitialProps = async (props) => {
  const { req, res } = props.ctx;
  const nonce = {};

  res
    .getHeaders()
    ["content-security-policy"]?.split(";")
    .filter(Boolean)
    .forEach((part) => {
      const [directive, ...source] = part.split(" ");
      source.map((s) => {
        let str = s.slice(1, s.length - 1);
        if (
          typeof nonce[directive] == "undefined" ||
          nonce[directive].length === 0
        ) {
          nonce[directive] =
            typeof str === "string" && str?.startsWith("nonce-")
              ? str.split("-")[1]
              : "";
        }
      });
    });

    return {
      nonce,
      csp: res.getHeaders()["content-security-policy"],
    };
};

export default MyApp;
