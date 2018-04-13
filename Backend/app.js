const express = require('express');
const app = express();
const morgan = require('morgan');



const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/productRoutes');
const userRoutes = require('./api/routes/userRoutes');
const adminRoutes = require('./api/routes/adminRoutes');
const courseRoutes =require('./api/routes/courseRoutes');

var mongoDB = 'mongodb://127.0.0.1:27017/BaltimoreCityCollege';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/product', productRoutes);
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use('/course',courseRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;

