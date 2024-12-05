import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import path from "path";
import connectdb from "./src/db/index.js";
import router from "./src/routes/user.route.js";
import cookieParser from "cookie-parser";
import { checkAuthenticationFromUser } from "./middleware/authentication.js";
import blogroute from './src/routes/blog.route.js'



app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use('/user', router)
app.use(checkAuthenticationFromUser("token"))


app.use('/blog', blogroute)

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));



app.get('/', (req, res) => {
    res.render("home", {
        user: req.user,
    })
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
