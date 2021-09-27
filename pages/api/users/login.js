import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { log, encrypt, decrypt, setCookie, getCookie } from "../../../utils/common";

const prisma = new PrismaClient();

export default function handler(req, res) {
  log(['api/login',req]);
  try {
    //get params vars
    const { email, password } = req.body;

    log('/api/users/login: getting vars from params');
    log([email, password, decrypt(password)]);

    //email incorrect
    if (!email || !email.includes("@") || !password) {
      let e = "Invalid Email";
      log(e);
      //res.status(500).json({ error: e });
    }

    //find user into db
    log("/api/users/login: getting user from db");
    prisma.user
      .findUnique({
        where: {
          email,
        },
      })
      .then((user) => {
        //user not found
        log({ user });
        if (!user || !user.password) {
          let e = "Invalid User";
          log(e);
          //res.status(500).json({ error: e });
        }

        // password incorrect
        if (password != user.password) {
          let e = "User or Password invalid";
          log(e);
          //res.status(500).json({ error: e });
        }

        //customize specific data to encrypt y pass as access token
        const accessToken = encrypt(JSON.stringify(user));

        //sharing data between backend and frontend
        setCookie("accessToken", accessToken);

        //some oauth workflows here to extend

        //everything is ok
        res.status(200).json({
          result: "OK",
          payload: { user },
        });
      })
      .catch((e) => {
        log(e);
        res.status(500).json({ error: e });
      });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
