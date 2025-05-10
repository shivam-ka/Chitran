import mongoose from "mongoose"
import { Db_name } from "../constants.js"


const connectDb = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
        console.log("database connected Successfully")

    } catch (error) {
        console.log("Database connection failed")
        process.exit(1)
    }
}

export default connectDb