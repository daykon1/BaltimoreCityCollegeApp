const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const mongoose = require('mongoose');
const chechAuth = require('../middleware/check-auth');


router.get('/', (req, res, next) => {
    console.log("hii");
    res.send('About this wiki');

    res.status(200).json({
        message: 'Handling get request'
    });
});
router.post('/', chechAuth,(req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
    })
        .catch(err =>
            console.log(err));

    res.status(200).json({
        message: 'Handling post request',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == 'special')
        res.status(200).json({
            message: 'Spec request',
            id: id
        });
    else {
        res.status(200).json({
            message: 'you passed id'
        });
    }
});

module.exports = router;