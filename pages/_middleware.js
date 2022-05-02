import { NextResponse } from "next/server";

function csp(req, res) {
    const isProduction = process.env.NODE_ENV === "production";
    const devScriptPolicy = ["unsafe-eval"]; // NextJS uses react-refresh in dev
    const devStylePolicy = ["unsafe-inline"]; // NextJS uses react-refresh in dev

    res.headers.append(
      "Content-Security-Policy",
      [
        ["default-src", "self", global.defaultNonce],
        ["script-src", "self", global.scriptsNonce].concat(
          isProduction ? [] : devScriptPolicy
        ),
        ["connect-src", "self", global.defaultNonce],
        ["img-src", "self", global.defaultNonce],
        ["style-src", "self", global.styleNonce].concat(
          isProduction ? [] : devStylePolicy
        ),
        ["base-uri", "self", global.defaultNonce],
        ["form-action", "self", global.defaultNonce],
      ].reduce((prev, [directive, ...policy]) => {
        return `${prev}${directive} ${policy
          .filter(Boolean)
          .map((src) => `'${src}'`)
          .join(" ")};`;
      }, "")
    );
}

export const middleware = (req) => {
  const res = NextResponse.next();
  csp(req, res);
  return res;
};
