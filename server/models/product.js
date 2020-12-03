const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        text: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 3000,
        text: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 32,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    sub: [{
        type: ObjectId,
        ref: 'Sub',
    }],
    quantity: Number,
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
    },
    shipping: {
        type: String,
        enum: ["Yes", "No"],
    },
    color: {
        type: String,
        enum:
            [
                "Black",
                "Brown",
                "Silver",
                "Whit",
                "Blue",
                "Read",
            ],
    },
    brand: {
        type: String,
        enum:
            [
                "Apple",
                "Samsung",
                "Lenovo",
                "Huawei",
                "ASUS",
                "Microsoft",
            ],
    },
    // ratings: [
    //     {
    //         star: Number,
    //         postedBy: { type: ObjectId, ref: "User" }
    //     },
    // ],

}, { timestamp: true }
);
module.exports = mongoose.model('Product', productSchema);