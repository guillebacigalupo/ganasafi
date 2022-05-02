import getConfig from "next/config";
import Head from "next/head";
import React from "react";

export default function HTMLHead({ data }) {
    const { publicRuntimeConfig } = getConfig();
    const { styleNonce } = publicRuntimeConfig;

    return (
      <Head>
        <title>
          Ganasafi - Ganadero Asociación Administradora de Fondos de Inversión
          S.A.
        </title>
        <meta name="description" content="" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="img/logo/favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="/assets/static/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          nonce={`${styleNonce}`}
        />
        <link
          href="/assets/static/css/animate.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css//owl.carousel.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/owl.transitions.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/meanmenu.min.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/nice-select.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/themify-icons.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/flaticon.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
        <link
          href="/assets/static/css/magnific.min.css"
          rel="stylesheet"
          type="text/css"
          nonce={styleNonce}
        />
      </Head>
    );
}