const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("../clients/config/dbConfig");
app.use(express.json());
const userRoute = require("../clients/routes/userRoute");
const adminRoute = require("../clients/routes/adminRoute");
const doctorRoute = require("../clients/routes/doctorsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("clients/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clients/build/index.html"));
  });
}

  app.get("/*",function (req, res) {
    res.sendFile(path.join(__dirname, "../clients/build/index.html"),
    function (err) {
      if (err) {
        res.status (500).send(err);
      }
    }
  );
  });

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
