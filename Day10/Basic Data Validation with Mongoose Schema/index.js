const express = require("express");
const { dbConnection } = require("./config/db");
const { userRouter } = require("./routes/user.router");
const { productRouter } = require("./routes/product.router");

const app = express();
const PORT = 3003;

app.use(express.json())
app.use("/users", userRouter)
app.use("/products", productRouter)

app.listen(PORT, async()=>{
    try {
        await dbConnection
        console.log("Connected to DB")
        console.log("Server is running on http://localhost:3003")
    } catch (error) {
        console.log(error)
    }
})

