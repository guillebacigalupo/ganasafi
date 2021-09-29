import CryptoJS, { AES } from "crypto-js";
import Cookies from "js-cookie";

const iv = CryptoJS.enc.Utf8.parse("1514838699281281");
const secret = "b7352d2424bb2072655a519547f5a9df";
const COOKIE_PATH = "GanaSafiWeb_SPA_";

Cookies.set(process.env.COOKIE_PATH, {});

export function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function encrypt(s, parse = false) {
  s = parse ? JSON.stringify(s) : s;
  const h = AES.encrypt(s, secret, { iv });
  return h.toString();
}

export function decrypt(s, parse = false) {
  var h = AES.decrypt(s, secret, { iv });
  return parse
    ? JSON.stringify(h.toString(CryptoJS.enc.Utf8))
    : h.toString(CryptoJS.enc.Utf8);
}

export function setCookie(k, v) {
  let c = getCookie();
  c[k] = v;
  let ch = encrypt(JSON.stringify(c));
  Cookies.set(COOKIE_PATH, JSON.stringify(ch));
}

export function getCookie(k = null) {
  let __cookie = Cookies.get(COOKIE_PATH);
  if (!__cookie) {
    Cookies.set(COOKIE_PATH, {});
    return {};
  }
  let c = JSON.parse(decrypt(JSON.parse(Cookies.get(COOKIE_PATH))));
  return !k ? c : !!c[k] ? c[k] : null;
}

export function setToken(o) {
  if (!!o?.email) return false;

  let s = encrypt(o);
  setCookie("token", s);
}

export function getToken() {
  let s = getCookie("token");
  let t = decrypt(s);
  return t || false;
}

export function log(o) {
  console.log(o);
}
