const mongoose = require("mongoose");

const { DB_CNN } = process.env;

const dbConnection = async () => {
  try {
   await mongoose.connect(DB_CNN);
   console.log("db online")
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {dbConnection}
