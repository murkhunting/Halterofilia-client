import dotenv from "dotenv";
import Cookie from "js-cookie";

dotenv.config();

const admin_username = process.env.ADMIN_USERNAME;
const admin_password = process.env.ADMIN_PASSWORD;
const token = process.env.TOKEN;

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log(token);

    if (username === admin_username && password === admin_password) {
      Cookie.set("token", token);
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;
