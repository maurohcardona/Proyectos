import express from "express"
import homeRoutes from "../routes/home.js"

const app = express()

app.use(express.json());
app.use ("/", homeRoutes)

app.listen(8080, ()=> {
    console.log("server listen on port 8080")
})
