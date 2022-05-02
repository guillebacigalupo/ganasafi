import '../styles/globals.css'
<<<<<<< Updated upstream
//console.log(process.env);
function MyApp({ Component, pageProps }) {
=======

const DisableSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps, nonce }) {
>>>>>>> Stashed changes
  const port = process.env.PORT ?? 3000;
  pageProps.port = port;
  return (
      <DisableSSR>
        <Component {...pageProps} />
      </DisableSSR>
  );
}

Page.getInitialProps = async ({ ctx: { req, res } }) => {
  const csp = {};
  
  res
    .getHeaders()
    ["content-security-policy"]?.split(";")
    .filter(Boolean)
    .forEach((part) => {
      const [directive, ...source] = part.split(" ");
      csp[directive] = source.map((s) => s.slice(1, s.length - 1));
    });
  return {
    nonce: csp["default-src"]
      ?.find((s) => s.startsWith("nonce-"))
      .split("-")[1],
  };
};

export default MyApp
