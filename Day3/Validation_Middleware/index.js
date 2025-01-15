const express = require("express")

const {validation_middleware} = require("./middleware/validation_middleware")
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({ Message: "Successful"})
})

app.post("/", validation_middleware, (req, res)=>{
    res.status(200).json({ Message: "Data Validated"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})