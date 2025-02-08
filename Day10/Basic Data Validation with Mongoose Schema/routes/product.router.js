const express = require("express");
const { Product } = require("../models/product.model");

const productRouter = express.Router()

productRouter.post("/", async(req, res)=>{
    try {
        const product = new Product(req.body)
        await  product.save()
        res.status(200).json({product})
    } catch (error) {
        res.status(401).json({"message": "There has been an error", error: error.message})
    }
});

productRouter.get("/", async(req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json({products})
    } catch (error) {
        res.status(401).json({"message": "There has been an error", error: error.message})
    }
})

productRouter.patch("/:id", async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body, // This is the update object
            { new: true } // This option ensures the updated document is returned
        );
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        res.status(200).json({ product });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


productRouter.delete("/:id", async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({"message": "product is successfully deleted"})
    } catch (error) {
        res.status(404).json({"message": "There has been an error", error: error.message})
    }
})


module.exports = { productRouter };