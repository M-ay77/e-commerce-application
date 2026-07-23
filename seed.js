const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/product');
const products = require('./data/products');

const seedData = async () => {
    try {
        await connectDB();

        await Product.deleteMany();
        console.log(products);
        await Product.insertMany(products);
    
        console.log('Products inserted successfully!');

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedData();