const _0x4409f3 = _0xa5a7;
function _0xa5a7(_0x538881, _0x48e91c) {
  const _0x22e2c3 = _0x22e2();
  return (
    (_0xa5a7 = function (_0xa5a705, _0xb26c61) {
      _0xa5a705 = _0xa5a705 - 0x137;
      let _0x154019 = _0x22e2c3[_0xa5a705];
      return _0x154019;
    }),
    _0xa5a7(_0x538881, _0x48e91c)
  );
}
(function (_0x4a2ece, _0x67958b) {
  const _0x41f5f8 = _0xa5a7,
    _0x3a42b0 = _0x4a2ece();
  while (!![]) {
    try {
      const _0x52d287 =
        (-parseInt(_0x41f5f8(0x13d)) / 0x1) *
          (parseInt(_0x41f5f8(0x13a)) / 0x2) +
        -parseInt(_0x41f5f8(0x139)) / 0x3 +
        (-parseInt(_0x41f5f8(0x140)) / 0x4) *
          (-parseInt(_0x41f5f8(0x145)) / 0x5) +
        parseInt(_0x41f5f8(0x14b)) / 0x6 +
        (-parseInt(_0x41f5f8(0x157)) / 0x7) *
          (parseInt(_0x41f5f8(0x155)) / 0x8) +
        parseInt(_0x41f5f8(0x141)) / 0x9 +
        -parseInt(_0x41f5f8(0x143)) / 0xa;
      if (_0x52d287 === _0x67958b) break;
      else _0x3a42b0["push"](_0x3a42b0["shift"]());
    } catch (_0x2101ee) {
      _0x3a42b0["push"](_0x3a42b0["shift"]());
    }
  }
})(_0x22e2, 0x7ed40);
import _0x2a8512, { AES } from "crypto-js";
function _0x22e2() {
  const _0x46d9a1 = [
    "encrypt",
    "undefined",
    "33888TGERME",
    "now",
    "735rPDjNH",
    "SDF#$RVW#$B%^EB@#$@",
    "MD5",
    "2429601ioFQce",
    "512aTtPLB",
    "GanasafiWeb_SPA_",
    "random",
    "810FODryE",
    "toString",
    "b7352d519547f5a9df2424bb2072655a",
    "3814568moKxUc",
    "6294996fJfVqq",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    "6907640PxrVCA",
    "enc",
    "5DygAgn",
    "log",
    "error",
    "decrypt",
    "stringify",
    "function",
    "6115038xHSOAr",
    "Utf8",
    "token",
    "set",
    "Base64",
    "floor",
    "parse",
    "get",
  ];
  _0x22e2 = function () {
    return _0x46d9a1;
  };
  return _0x22e2();
}
import _0xdaa0ee from "js-cookie";
const iv =
    _0x2a8512[_0x4409f3(0x144)][_0x4409f3(0x14c)][_0x4409f3(0x151)](
      "1514838699281281"
    ),
  secret = _0x4409f3(0x13f);
export const hashCookies = !![];
export const COOKIE_PATH = hash(_0x4409f3(0x13b));
export function mt_rand() {
  const _0x5acbee = _0x4409f3,
    _0x3be083 = 0x5,
    _0x475beb = 0x32;
  return parseInt(
    Math[_0x5acbee(0x150)](
      Math[_0x5acbee(0x13c)]() * (_0x475beb - _0x3be083) + _0x3be083
    )
  );
}
export function nonceGenerator() {
  const _0x4c4a68 = _0x4409f3,
    _0x39d898 =
      generateRandomString(mt_rand()) +
      ":" +
      Date[_0x4c4a68(0x156)]() +
      ":" +
      _0x4c4a68(0x137),
    _0x1317af = _0x2a8512["SHA256"](_0x39d898);
  return _0x1317af[_0x4c4a68(0x13e)](
    _0x2a8512[_0x4c4a68(0x144)][_0x4c4a68(0x14f)]
  );
}
export function generateRandomString(_0x69ead3) {
  const _0x15a1c3 = _0x4409f3;
  var _0x438279 = "",
    _0xf944be = _0x15a1c3(0x142),
    _0x4ac024 = _0xf944be["length"];
  for (var _0x36a56e = 0x0; _0x36a56e < _0x69ead3; _0x36a56e++) {
    _0x438279 += _0xf944be["charAt"](
      Math["floor"](Math[_0x15a1c3(0x13c)]() * _0x4ac024)
    );
  }
  return _0x438279;
}
export function encrypt(_0x12083f, _0x5d04c7 = ![]) {
  const _0x2168a5 = _0x4409f3;
  _0x12083f = _0x5d04c7 ? JSON[_0x2168a5(0x149)](_0x12083f) : _0x12083f;
  const _0x546145 = AES[_0x2168a5(0x153)](_0x12083f, secret, { iv: iv });
  return _0x546145[_0x2168a5(0x13e)]();
}
export function decrypt(_0xc2571, _0x126f57 = ![]) {
  const _0x226f69 = _0x4409f3;
  var _0x1de378 = AES[_0x226f69(0x148)](_0xc2571, secret, { iv: iv });
  return _0x126f57
    ? JSON["stringify"](
        _0x1de378["toString"](_0x2a8512["enc"][_0x226f69(0x14c)])
      )
    : _0x1de378[_0x226f69(0x13e)](
        _0x2a8512[_0x226f69(0x144)][_0x226f69(0x14c)]
      );
}
export function hash(_0x2e63cc) {
  const _0x2a2215 = _0x4409f3;
  return _0x2a8512[_0x2a2215(0x138)](_0x2e63cc + ":" + secret);
}
export function encryptObject(_0x30e1f5) {
  const _0x98159b = _0x4409f3;
  return JSON[_0x98159b(0x149)](encrypt(JSON[_0x98159b(0x149)](_0x30e1f5)));
}
export function decryptObject(_0x4bad4e) {
  const _0x577bc3 = _0x4409f3;
  return JSON["parse"](decrypt(JSON[_0x577bc3(0x151)](_0x4bad4e)));
}
export function removeCookie(_0x48289f, _0x5003a3 = null, _0x292faa = null) {
  const _0xca8007 = _0x4409f3;
  try {
    let _0xa935fc;
    !!_0x5003a3
      ? (_0xa935fc = getCookie(null, _0x5003a3))
      : (_0xa935fc = getCookie());
    const _0x431f4f = hashCookies ? hash(_0x48289f) : _0x48289f;
    (_0xa935fc[_0x431f4f] = null), delete _0xa935fc[_0x431f4f];
    let _0xe00f7 = encrypt(JSON[_0xca8007(0x149)](_0xa935fc));
    typeof _0x292faa === _0xca8007(0x14a)
      ? _0x292faa(COOKIE_PATH, JSON[_0xca8007(0x149)](_0xe00f7))
      : _0xdaa0ee[_0xca8007(0x14e)](
          COOKIE_PATH,
          JSON[_0xca8007(0x149)](_0xe00f7)
        );
  } catch (_0x14abfe) {
    console[_0xca8007(0x147)]({ error: _0x14abfe });
  }
}
export function setCookie(
  _0x334613,
  _0x5e48d2,
  _0x2c3e00 = null,
  _0x4a15a7 = null
) {
  const _0x417ce7 = _0x4409f3;
  try {
    let _0x6a66dd;
    !!_0x2c3e00
      ? (_0x6a66dd = getCookie(null, _0x2c3e00))
      : (_0x6a66dd = getCookie());
    const _0x254782 = hashCookies ? hash(_0x334613) : _0x334613;
    _0x6a66dd[_0x254782] = _0x5e48d2;
    let _0x1a626e = encrypt(JSON[_0x417ce7(0x149)](_0x6a66dd));
    typeof _0x4a15a7 === _0x417ce7(0x14a)
      ? _0x4a15a7(COOKIE_PATH, JSON[_0x417ce7(0x149)](_0x1a626e))
      : _0xdaa0ee[_0x417ce7(0x14e)](
          COOKIE_PATH,
          JSON[_0x417ce7(0x149)](_0x1a626e)
        );
  } catch (_0x409ee7) {
    console["error"]({ error: _0x409ee7 });
  }
}
export function getCookie(
  _0x10106d = null,
  _0x28c339 = null,
  _0x411710 = null
) {
  const _0x30c1bd = _0x4409f3;
  try {
    let _0x8ac2fd =
      typeof _0x411710 === _0x30c1bd(0x14a)
        ? _0x411710(COOKIE_PATH)
        : _0xdaa0ee[_0x30c1bd(0x152)](COOKIE_PATH);
    const _0x71a93a = hashCookies ? hash(_0x10106d) : _0x10106d;
    if (!!_0x28c339) {
      let _0x3235c4 = JSON[_0x30c1bd(0x151)](
        decrypt(JSON[_0x30c1bd(0x151)](_0x28c339))
      );
      return !_0x10106d
        ? _0x3235c4
        : !!_0x3235c4[_0x71a93a]
        ? _0x3235c4[_0x71a93a]
        : null;
    }
    if (!_0x8ac2fd) initCookie();
    let _0x380147;
    return (
      (_0x380147 =
        typeof _0x411710 === _0x30c1bd(0x14a)
          ? _0x411710(COOKIE_PATH)
          : _0xdaa0ee[_0x30c1bd(0x152)](COOKIE_PATH)),
      (_0x380147 = JSON[_0x30c1bd(0x151)](_0x380147)),
      (_0x380147 = decrypt(_0x380147)),
      (_0x380147 = JSON[_0x30c1bd(0x151)](_0x380147)),
      !_0x10106d
        ? _0x380147
        : !!_0x380147[_0x71a93a]
        ? _0x380147[_0x71a93a]
        : null
    );
  } catch (_0x20d5f7) {
    console[_0x30c1bd(0x147)]({ error: _0x20d5f7 });
  }
}
export function initCookie(_0x245d40 = ![]) {
  const _0x520b46 = _0x4409f3,
    _0x25c89e = JSON["stringify"](encrypt(JSON[_0x520b46(0x149)]({ a: 0x1 })));
  _0xdaa0ee[_0x520b46(0x14e)](COOKIE_PATH, _0x25c89e);
  if (_0x245d40) return _0x25c89e;
}
export function setToken(_0x2b7680) {
  const _0x20a674 = _0x4409f3;
  if (!!_0x2b7680?.["email"]) return ![];
  let _0x568a9a = encrypt(_0x2b7680);
  setCookie(_0x20a674(0x14d), _0x568a9a);
}
export function getToken() {
  const _0x1767e3 = _0x4409f3;
  let _0x2e50b9 = getCookie(_0x1767e3(0x14d)),
    _0x3564b5 = decrypt(_0x2e50b9);
  return _0x3564b5 || ![];
}
export function log(..._0x56fee0) {
  const _0x4c7a4b = _0x4409f3;
  console[_0x4c7a4b(0x146)](..._0x56fee0);
}
if (typeof window != _0x4409f3(0x154)) setCookie("init", 0x1);