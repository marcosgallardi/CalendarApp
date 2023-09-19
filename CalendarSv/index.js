const express = require("express")
const server = express()
require("dotenv").config()
console.log(process.env)

server.listen(process.env.PORT,()=>{
    console.log(`Server listen in port ${process.env.PORT}`)
})