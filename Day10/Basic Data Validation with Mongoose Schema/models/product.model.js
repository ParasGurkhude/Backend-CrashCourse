const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the custom validator for tags
const tagValidator = (tags) => {
    const tagSet = new Set(tags);
    return tags.length === tagSet.size && tags.every(tag => /^[a-zA-Z0-9]+$/.test(tag));
};

// Define the schema
const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
        maxlength: [50, 'Product name cannot exceed 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['Electronics', 'Clothing', 'Books', 'Home Appliances'],
            message: '{VALUE} is not a valid category'
        }
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Stock cannot be negative'],
        validate: {
            validator: Number.isInteger,
            message: 'Stock must be an integer'
        }
    },
    SKU: {
        type: String,
        required: [true, 'SKU is required'],
        unique: true,
        match: [/^PROD-[a-zA-Z0-9]{4}$/, 'SKU must follow the pattern PROD-XXXX']
    },
    tags: {
        type: [String],
        validate: {
            validator: tagValidator,
            message: 'Tags must be non-empty, alphanumeric, and without duplicates'
        }
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = { Product };
