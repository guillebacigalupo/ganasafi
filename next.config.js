const CryptoJS = require("crypto-js");

function nonceGenerator() {
const hash = CryptoJS.SHA256(generateRandomString(16) + ":" +"SDF#$RVW#$B%^EB@#$@");
  return hash.toString(CryptoJS.enc.Base64);
}

function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const styleNonce = nonceGenerator();

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'nonce-${styleNonce}';
  font-src 'self';  
`;

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  /*
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  */
];

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    styleNonce,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  /*
  compiler: {
    removeConsole: true,
  },
  */
  swcMinify: true,
};
