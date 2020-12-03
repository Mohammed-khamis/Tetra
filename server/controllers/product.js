const Product = require('../models/product');
const slugify = require('slugify');

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        req.boy.slug = slugify(req.body.title);
        const newProduct = await new Product(req.body)
        res.kson(newProduct);
    } catch (error) {
        // console.log(err);
        res.status(400).send("Create product failed");

    };
};