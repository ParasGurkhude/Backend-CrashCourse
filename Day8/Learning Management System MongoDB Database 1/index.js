const express = require("express");
const {dbConnection} = require('./dbConfig');
const { userRouter } = require("./routes/users.route");
const { courseRouter } = require("./routes/courses.route");
const app = express();

app.use(express.json())
app.use(express.json())
app.use("/users", userRouter)
app.use("/courses", courseRouter)

app.listen(3001, async()=>{
    try {
        await dbConnection
        console.log("Connected to DB")
        console.log(`Server is running at http://localhost:3001`)
    } catch (error) {
        console.log(error)
    }
})
