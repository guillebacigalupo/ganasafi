import fs from "fs";
import path from "path";
import Busboy from "busboy";
import { log } from "../../../utils/common";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    let image = "";

    //upload dir
    const d = new Date();
    const subdir = d.getMonth() +
        "-" +
        d.getFullYear() +
        "/";
    const uploadDir = path.join(
      __dirname +
        "../../../../../../public/uploads/" +
        subdir
    );

    //create upload dir if not exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, {
        recursive: true,
      });
    }

    //parse form data
    const busboy = new Busboy(req);
    busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
      file.on("data", function (data) {
        //write and save image file
        fs.writeFile(uploadDir + filename, data, "binary", log);
      });
      file.on("end", function () {
        image = subdir + filename;
      });
    });

    busboy.on("finish", function () {
      res.status(200).json({
        result: "OK",
        image,
      });
    });

    req.pipe(busboy);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
