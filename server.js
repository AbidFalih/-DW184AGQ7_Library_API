//import express module
const express = require('express')

//use express in app var
const app = express()

const router = require("./src/routers/router") //import router

app.use(express.json()) //body parser JSON

app.use("/api/v1/", router) //grouping

const port = 5000

app.listen(port, ()=>console.log(`Listening on port ${port}`))