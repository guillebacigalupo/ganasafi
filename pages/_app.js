import '../styles/globals.css'
//console.log(process.env);

const DisableSSR = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps, nonce }) {
  const port = process.env.PORT ?? 3000;
  pageProps.port = port;
  return (
      <DisableSSR>
        <Component {...pageProps} />
      </DisableSSR>
  );
}

export default MyApp