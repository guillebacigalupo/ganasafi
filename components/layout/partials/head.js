import Head from 'next/head';


export default function HTMLHead({data}) {
    return (
        <Head>
            <title>Ganasafi - Ganadero Asociación Administradora de Fondos de Inversión S.A.</title>
            <meta name="description" content="" />
            <link rel="shortcut icon" type="image/png" href="img/logo/favicon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link href="/assets/static/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/animate.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css//owl.carousel.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/owl.transitions.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/meanmenu.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/nice-select.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/themify-icons.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/flaticon.css" rel="stylesheet" type="text/css" />
            <link href="/assets/static/css/magnific.min.css" rel="stylesheet" type="text/css" />


            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PD6NWJG');`}}></script>

             <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '419285479633442');
      fbq('track', 'PageView');` }}
    />
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=419285479633442&ev=PageView&noscript=1" />` }}
    />
        </Head>
    )
}