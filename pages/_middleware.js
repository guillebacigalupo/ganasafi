function _0x5568(_0x13995b, _0x415784) {
  const _0x589a26 = _0x589a();
  return (
    (_0x5568 = function (_0x556817, _0x2d4e1d) {
      _0x556817 = _0x556817 - 0x10f;
      let _0x2e6521 = _0x589a26[_0x556817];
      return _0x2e6521;
    }),
    _0x5568(_0x13995b, _0x415784)
  );
}
const _0x1d855b = _0x5568;
(function (_0x1d9280, _0x3e5a1d) {
  const _0x37960f = _0x5568,
    _0x263430 = _0x1d9280();
  while (!![]) {
    try {
      const _0x2cb284 =
        (parseInt(_0x37960f(0x128)) / 0x1) *
          (parseInt(_0x37960f(0x133)) / 0x2) +
        (-parseInt(_0x37960f(0x140)) / 0x3) *
          (parseInt(_0x37960f(0x149)) / 0x4) +
        -parseInt(_0x37960f(0x137)) / 0x5 +
        -parseInt(_0x37960f(0x13c)) / 0x6 +
        -parseInt(_0x37960f(0x11b)) / 0x7 +
        (-parseInt(_0x37960f(0x114)) / 0x8) *
          (parseInt(_0x37960f(0x136)) / 0x9) +
        parseInt(_0x37960f(0x139)) / 0xa;
      if (_0x2cb284 === _0x3e5a1d) break;
      else _0x263430["push"](_0x263430["shift"]());
    } catch (_0x4e08c4) {
      _0x263430["push"](_0x263430["shift"]());
    }
  }
})(_0x589a, 0xa9dc7);
import * as _0x3773c8 from "../utils/common.js";
import { NextResponse } from "next/server";
let __cookies = {};
const __cookie_nonce = _0x3773c8[_0x1d855b(0x14b)](_0x1d855b(0x115)),
  port = process[_0x1d855b(0x11d)]["PORT"] ?? 0xbb8,
  base_url = process[_0x1d855b(0x11d)]["BASE_URL"] + ":" + port,
  script_sources = process[_0x1d855b(0x11d)][_0x1d855b(0x122)]
    ?.["split"](",")
    ["map"]((_0x3664db) => _0x3664db["trim"]()),
  style_sources = process[_0x1d855b(0x11d)][_0x1d855b(0x118)]
    ?.[_0x1d855b(0x113)](",")
    [_0x1d855b(0x147)]((_0x551e21) => _0x551e21[_0x1d855b(0x112)]()),
  font_sources = process[_0x1d855b(0x11d)][_0x1d855b(0x11c)]
    ?.[_0x1d855b(0x113)](",")
    [_0x1d855b(0x147)]((_0x18328b) => _0x18328b[_0x1d855b(0x112)]()),
  default_sources = process[_0x1d855b(0x11d)][_0x1d855b(0x143)]
    ?.[_0x1d855b(0x113)](",")
    [_0x1d855b(0x147)]((_0x6b4d9d) => _0x6b4d9d[_0x1d855b(0x112)]());
function csp(_0x23bd19, _0x5bfcb2) {
  const _0x3db28b = _0x1d855b,
    _0x2b1dfb = !![],
    _0x240ac3 = [_0x3db28b(0x12a), _0x3db28b(0x11f)],
    _0x1655c9 = [_0x3db28b(0x11f)],
    _0x407efa = _0x3773c8[_0x3db28b(0x127)](),
    _0x27d74f = _0x3773c8[_0x3db28b(0x127)](),
    _0x277524 = _0x3773c8[_0x3db28b(0x127)](),
    _0x5d3a1b = _0x3773c8[_0x3db28b(0x127)]();
  setCookie(_0x3db28b(0x13a), _0x407efa),
    setCookie(_0x3db28b(0x125), _0x27d74f),
    setCookie("defaultNonce", _0x277524),
    setCookie("fontNonce", _0x5d3a1b);
  const _0x66bd24 = _0x3773c8["encryptObject"](__cookies);
  _0x5bfcb2["cookie"](__cookie_nonce, _0x66bd24),
    _0x5bfcb2["headers"]["append"](
      _0x3db28b(0x142),
      [
        ["default-src", _0x3db28b(0x121), _0x3db28b(0x12b) + _0x277524][
          _0x3db28b(0x124)
        ](default_sources ?? []),
        ["script-src", _0x3db28b(0x121)]
          [_0x3db28b(0x124)](script_sources ?? [])
          [_0x3db28b(0x124)](_0x2b1dfb ? _0x240ac3 : _0x240ac3),
        ["connect-src", _0x3db28b(0x121), _0x3db28b(0x12b) + _0x277524],
        [_0x3db28b(0x146), _0x3db28b(0x121), "nonce-" + _0x277524],
        [_0x3db28b(0x12d), _0x3db28b(0x121), _0x3db28b(0x12b) + _0x5d3a1b][
          "concat"
        ](font_sources ?? []),
        [_0x3db28b(0x13d), "self"]
          [_0x3db28b(0x124)](style_sources ?? [])
          ["concat"](_0x2b1dfb ? ["nonce-" + _0x407efa] : _0x1655c9),
        [_0x3db28b(0x138), _0x3db28b(0x121), "nonce-" + _0x277524],
        ["form-action", _0x3db28b(0x121), _0x3db28b(0x12b) + _0x277524],
        ["report-to", _0x3db28b(0x14a)],
      ][_0x3db28b(0x110)]((_0x265b40, [_0x5c0177, ..._0x49b2dc]) => {
        const _0x2243ad = _0x3db28b;
        return (
          "" +
          _0x265b40 +
          _0x5c0177 +
          "\x20" +
          _0x49b2dc[_0x2243ad(0x123)](Boolean)
            [_0x2243ad(0x147)]((_0x4df28c) =>
              _0x4df28c[_0x2243ad(0x132)]("https")
                ? _0x4df28c
                : "\x27" + _0x4df28c + "\x27"
            )
            [_0x2243ad(0x141)]("\x20") +
          ";"
        );
      }, "")
    ),
    _0x5bfcb2[_0x3db28b(0x120)][_0x3db28b(0x13e)](
      "Report-To",
      JSON[_0x3db28b(0x148)]([
        {
          group: _0x3db28b(0x129),
          max_age: "10886400",
          endpoints: [{ url: base_url + _0x3db28b(0x10f) }],
          include_subdomains: !![],
        },
        {
          group: _0x3db28b(0x13f),
          max_age: _0x3db28b(0x12f),
          endpoints: [{ url: base_url + _0x3db28b(0x11a) }],
          include_subdomains: !![],
        },
      ])
    ),
    _0x5bfcb2[_0x3db28b(0x120)][_0x3db28b(0x13e)](
      _0x3db28b(0x130),
      JSON[_0x3db28b(0x148)]()
    ),
    _0x5bfcb2[_0x3db28b(0x120)]["append"](
      _0x3db28b(0x117),
      _0x3db28b(0x135) +
        (base_url + _0x3db28b(0x111)) +
        _0x3db28b(0x145) +
        (base_url + _0x3db28b(0x111)) +
        "\x22"
    );
}
function loadCookies(_0x33eee0) {
  const _0x53f429 = _0x1d855b;
  if (typeof _0x33eee0 !== _0x53f429(0x119) || !_0x33eee0) return ![];
  try {
    const _0x1e578e = _0x3773c8[_0x53f429(0x131)](_0x33eee0);
    __cookies =
      typeof _0x1e578e === _0x53f429(0x12e)
        ? _0x3773c8[_0x53f429(0x131)](_0x33eee0)
        : {};
  } catch (_0xaf3aa) {
    _0x3773c8["log"](_0xaf3aa), (__cookies = {});
  }
}
function setCookie(_0x17e80e, _0x351d06) {
  const _0x219276 = _0x1d855b;
  try {
    const _0x2c4151 = _0x3773c8[_0x219276(0x116)]
      ? _0x3773c8[_0x219276(0x14b)](_0x17e80e)
      : _0x17e80e;
    __cookies[_0x2c4151] = _0x351d06;
  } catch (_0x19e5c0) {
    console[_0x219276(0x134)]({ error: _0x19e5c0 });
  }
}
function _0x589a() {
  const _0x321cfb = [
    "4694210gQmrmd",
    "base-uri",
    "30099360YffXjT",
    "styleNonce",
    "name",
    "4687152MhFVAz",
    "style-src",
    "append",
    "network-errors",
    "6HVQYtm",
    "join",
    "Content-Security-Policy",
    "CSP_DEFAULT_SOURCE",
    "page",
    "\x22,\x20default=\x22",
    "img-src",
    "map",
    "stringify",
    "1283960iMAmCm",
    "main-endpoint",
    "hash",
    "/api/security?report=csp",
    "reduce",
    "/api/security",
    "trim",
    "split",
    "366888oJXowe",
    "nonces",
    "hashCookies",
    "Reporting-Endpoints",
    "CSP_STYLE_SOURCE",
    "string",
    "/api/security?report=network",
    "8208123bOSetd",
    "CSP_FONT_SOURCE",
    "env",
    "cookie",
    "unsafe-inline",
    "headers",
    "self",
    "CSP_SCRIPT_SOURCE",
    "filter",
    "concat",
    "scriptsNonce",
    "undefined",
    "nonceGenerator",
    "1358001vLFDfQ",
    "csp-endpoint",
    "unsafe-eval",
    "nonce-",
    "COOKIE_PATH",
    "font-src",
    "object",
    "10886400",
    "Report-To",
    "decryptObject",
    "startsWith",
    "2WoXUyn",
    "error",
    "main-endpoint=\x22",
    "27lcOdst",
  ];
  _0x589a = function () {
    return _0x321cfb;
  };
  return _0x589a();
}
export function getCookie(_0x589b4e = null) {
  const _0x523579 = _0x1d855b;
  try {
    const _0x4a03e4 = _0x3773c8[_0x523579(0x116)]
      ? _0x3773c8[_0x523579(0x14b)](_0x589b4e)
      : _0x589b4e;
    return !_0x589b4e
      ? __cookies
      : !!__cookies[_0x4a03e4]
      ? __cookies[_0x4a03e4]
      : null;
  } catch (_0x5762e2) {
    console[_0x523579(0x134)]({ error: _0x5762e2 });
  }
}
export function writeCookies(_0x3f6258) {
  const _0x1274c1 = _0x1d855b;
  try {
    _0x3f6258[_0x1274c1(0x11e)](_0x3773c8[_0x1274c1(0x12c)], cookies);
  } catch (_0x23566a) {
    console[_0x1274c1(0x134)]({ error: _0x23566a });
  }
}
export const middleware = (_0x334839, _0x3a5807) => {
  const _0x4f6b13 = _0x1d855b,
    _0x544e93 = NextResponse["next"]();
  if (
    typeof _0x334839?.[_0x4f6b13(0x144)]?.[_0x4f6b13(0x13b)] !==
    _0x4f6b13(0x126)
  )
    loadCookies(_0x334839["cookies"][__cookie_nonce]);
  return csp(_0x334839, _0x544e93), _0x544e93;
};