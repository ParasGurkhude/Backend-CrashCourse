const { POST_MESSAGE_FORMAT } = require("../constant/message.format")

function validation_middleware(req,res,next){
    // GET the data from body
    // validate each field
    // if failed -> add it to res.text > 400
    // if success -> Pass > 200  

    const body = req.body
    console.log(body) 
    for(const key in body){
        if(POST_MESSAGE_FORMAT[key]==="Number"){
            console.log(typeof(body[key]=="Number"))
        }
    }
    next()
}

module.exports = { validation_middleware }