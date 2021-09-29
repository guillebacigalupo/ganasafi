import {
  log,
  encrypt,
  decrypt,
  getCookie,
  setCookie,
  COOKIE_PATH
} from "../../../utils/common";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log({ body: req.body, cookis:req.cookies });
  const ch = req.cookies[COOKIE_PATH];
  let accessToken = getCookie('accessToken', ch);
  let uuid = getCookie('uuid', ch);
  log( { accessToken, uuid })

  
  let user = await prisma.user.findUnique({
    where: {
      uuid,
    },
  });
  
  if (!user || !user.email) {
    //user not found by uuid
    res.status(500).json({ error: e });
  }

  let session = await prisma.session.findUnique({
    where: {
      sessionToken:accessToken,
      userId:user.id
    },
  });

  if (!session) {
    //session not found by accesstoken and userId
    res.status(500).json({ error: e });
  }

  //TODO: time expires session controls

  try {
    res.status(200).json({
      result: "OK",
      payload: {
        user:{
          email:user.email,
          name:user.name,
          id:user.id, 
          accessToken
        }
      },
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
