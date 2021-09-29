import {
  log,
  encrypt,
  decrypt,
  getCookie,
  setCookie,
} from "../../../utils/common";

export default function handler(req, res) {
  console.log({ request: req.body });
  log('accessToken', getCookie('accessToken'))
  try {
    res.status(200).json({
      result: "OK",
      payload: {
        hello: "world",
      },
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
