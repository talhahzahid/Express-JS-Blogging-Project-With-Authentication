import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Blogging')
})




app.listen(PORT, () => {
    console.log("Server is running at port", PORT);

})

