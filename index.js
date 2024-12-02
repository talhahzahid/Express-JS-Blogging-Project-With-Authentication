import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import path from "path";
import connectdb from "./src/db/index.js";
import router from "./src/routes/user.route.js";



app.use(express.urlencoded({ extended: false }));
app.use('/user', router)



// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));



app.get('/', (req, res) => {
    res.render("home");
});





// mongodb conection 
connectdb()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running at port", PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
