import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;


const app = express();

app.get("/", (req, res) => {
    res.send("Api is running......")
})








app.get('/products', (req, res) => {
    res.json(products)
})


app.get('/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})






app.listen(port, () => {
    console.log("backend running at port 5000.....")
})

