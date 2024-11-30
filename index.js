import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const PORT = process.env.PORT

import connectdb from "./src/db/index.js"

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Blogging')
})


connectdb()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running at port", PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })




