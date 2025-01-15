// Perform CRUD Operation using GET, POST, PATCH / PUT, DELETE
const express = require("express");
const fs = require("fs");

const usersRouter = express.Router();

usersRouter.get("/", (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            res.status(500).json({ "message": "Error reading file" })
        } else {
            let parsedUsersData = JSON.parse(data)
            res.send(parsedUsersData.users)
        }
    })
})


usersRouter.post("/",  (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            res.status(500).json({"Message": "Error reading file"})
        } else {
            let parsedUsersData = JSON.parse(data)
            let newUser = req.body
            parsedUsersData.users.push(newUser)

            fs.writeFile("./db.json", JSON.stringify(parsedUsersData, null, 2), "utf-8", (err)=>{
                if(err){
                    res.status(500).json({ "message": "Error writing file" });
                } else {
                    res.status(201).json({ "message": "User added successfully" });
                }
            })
        }
    })
})

usersRouter.patch("/:id", (req, res) => { 
    fs.readFile("./db.json", "utf-8", (err, data) => { 
        if (err) { 
            res.status(500).json({"Message": "Error reading file"}); 
        } else { 
            let db = JSON.parse(data); 
            let users = db.users || []; 
            let updatedUsers = users.map((user) => { 
                if (user.id == req.params.id) { 
                    return { ...user, ...req.body, }; 
                } 
                return user; 
            }); 
            db.users = updatedUsers; 
            fs.writeFile("./db.json", JSON.stringify(db, null, 2), "utf-8", (err) => { 
                if (err) { 
                    res.status(500).json({"Message": "Error writing file"}); 
                } else { 
                    res.status(201).json({"Message": "User updated successfully"}); 
                } 
            }); 
        } 
    }); 
});


usersRouter.delete("/:id", (req, res) => {
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error reading file" });
            return;
        }
        
        let db = JSON.parse(data);
        const users = db.users || [];
        const filteredUsers = users.filter((user) => user.id != req.params.id);

        db.users = filteredUsers;

        fs.writeFile("db.json", JSON.stringify(db, null, 2), "utf8", (err) => {
            if (err) {
                res.status(500).json({ message: "Error writing file" });
                return;
            } else {
                res.status(204).json({ Message : "user delete succesfully"});
            }
            
        });
    });
});

module.exports = { usersRouter }