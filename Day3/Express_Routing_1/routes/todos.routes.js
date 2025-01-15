// Perform CRUD Operation using GET, POST, PATCH / PUT, DELETE
const express = require("express");
const fs = require("fs");

const todosRouter = express.Router();

todosRouter.get("/", (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            res.status(500).json({ "message": "Error reading file" })
        } else {
            let parsedTodosData = JSON.parse(data)
            res.send(parsedTodosData.todos)
        }
    })
})


todosRouter.post('/',(req,res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        if(err){
            res.status(500).json({"Message": "Error reading file"})
        } else {
            let parsedTodosData = JSON.parse(data)
            let newTodo = req.body

            parsedTodosData.todos.push(newTodo)

            fs.writeFile("./db.json", JSON.stringify(parsedTodosData, null, 2), "utf-8", (err)=>{
                if(err){
                    res.status(500).json({"Message": "Error writing file"})
                } else {
                    res.status(201).json({"Message": "Todo added succesfully"})
                }
            })
        }
    })
})



todosRouter.patch("/:id", (req, res) => { 
    fs.readFile("./db.json", "utf-8", (err, data) => { 
        if (err) { 
            res.status(500).json({"Message": "Error reading file"}); 
        } else { 
            let db = JSON.parse(data); 
            let todos = db.todos || []; 
            let updatedTodos = todos.map((todo) => { 
                if (todo.id == req.params.id) { 
                    return { ...todo, ...req.body, }; 
                } 
                return todo; 
            }); 
            db.todos = updatedTodos; 
            fs.writeFile("./db.json", JSON.stringify(db, null, 2), "utf-8", (err) => { 
                if (err) { 
                    res.status(500).json({"Message": "Error writing file"}); 
                } else { 
                    res.status(201).json({"Message": "Task updated successfully"}); 
                } 
            }); 
        } 
    }); 
});



todosRouter.delete("/:id", (req, res) => {
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error reading file" });
            return;
        }
        
        let db = JSON.parse(data);
        const todos = db.todos || [];
        const filteredTodos = todos.filter((todo) => todo.id != req.params.id);

        db.todos = filteredTodos;

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

module.exports = { todosRouter }