express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

const authRoute = require("./api/routes/auth");
const formacionRoute = require("./api/routes/formacion");
const programaRoute = require("./api/routes/programa");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONECTADA!"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/formacion", formacionRoute);
app.use("/api/programa", programaRoute);

app.listen(8800, () => {
  console.log("EL BACKEND FUNCIONA");
});
