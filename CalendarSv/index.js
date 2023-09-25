const express = require("express");
const server = express();
require("dotenv").config();
const authRoute = require("./routes/auth");
const {dbConnection} = require("./DB/config");


//conexion con la db
dbConnection()

server.use(express.json());
server.use("/api/auth",authRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server listen in port ${process.env.PORT}`);
});
