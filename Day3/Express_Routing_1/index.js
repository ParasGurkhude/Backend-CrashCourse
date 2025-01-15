const express = require("express");
const { usersRouter } = require("./routes/users.routes.js")
const { todosRouter } = require("./routes/todos.routes.js")
const cors = require("cors")
const PORT = 3000

const app = express();
app.use(express.json());
app.use(cors())
app.use("/users", usersRouter)
app.use("/todos", todosRouter)

  
app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:3000")
})