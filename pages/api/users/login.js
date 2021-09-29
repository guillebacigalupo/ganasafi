import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import {
  log,
  encrypt,
  decrypt,
} from "../../../utils/common";

const prisma = new PrismaClient();
const errorMessage = "";
const login = async (email, password) => {
  //email incorrect
  if (!email || !email.includes("@") || !password) {
    errorMessage = "Invalid User";
    return false;
  }

  //find user into db
  log("/api/users/login: getting user from db");
  let user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  //user not found
  if (!user || !user.password) {
    errorMessage = "Invalid User";
    return false;
  }

  // password incorrect
  if (decrypt(password) != decrypt(user.password)) {
    errorMessage = "User or Password invalid";
    return false;
  }

  //customize specific data to encrypt y pass as access token
  const accessToken = encrypt(JSON.stringify(user));
  return {...user, accessToken};
};

export default async function handler(req, res) {
  try {
    //get params vars
    const { email, password } = req.body;
    const payload = await login(email, password);
        
      log({payload});
      if (!payload?.accessToken) {
        res.status(500).json({ error: errorMessage });
      } else {
        //const expires = new Date().toISOString();
        let d = {
          userId: payload.id,
          sessionToken: payload.accessToken
          //expires
        };

        prisma.session.create({ data: d }).then( log );

        res.status(200).json({
          result: "OK",
          payload,
        });
      }
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
