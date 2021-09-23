import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const log = console.log;

export default function handler(req, res) {
  log(['api/login',req]);
  try {
    //get params vars
    const { email, password } = req.body;
    log('/api/users/login: getting vars from params');

    //email incorrect
    if (!email || !email.includes("@") || !password) {
      let e = "Invalid Email";
      log(e);
      res.status(500).json({ error: e });
    }

    //find user into db
    log("/api/users/login: getting user from db");
    prisma.user
      .findUnique({
        where: {
          email: "yosiet@prisma.io",
        },
      })
      .then((user) => {
        //user not found
        log({user});
        if (!user || !user.password) {
          let e = "Invalid User";
          log(e);
          res.status(500).json({ error: e });
        }

        // password incorrect
        /*
        if (bcrypt.compareSync(password, user.password)) {
          let e = "User or Password invalid";
          log(e);
          res.status(500).json({ error: e });
        }
        */
        //generate token
        jwt
          .sign({ user }, process.env.SECRET)
          .then((accessToken) => {
            user = { ...user, accessToken };

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
      })
      .catch((e) => {
        log(e);
        res.status(500).json({ error: e });
      });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
