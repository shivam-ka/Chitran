import dotenv from "dotenv"
import connectDb from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 8000

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log("server is listing on Port", port)
        })
    })
    .catch((err) => {
        console.log("mongodb connection Failed", err)
    })