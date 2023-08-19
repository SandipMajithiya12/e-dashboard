const express = require('express');
require('./db/config')
const User = require('./db/user');
const product = require('./db/Product');
const cors = require('cors');
const Product = require('./db/Product');

const app = express();
app.use(cors());
app.use(express.json()); 
app.post('/register',async (req,resp)=>{
    let user = new User(req.body);
    let result =  await user.save();
    result = result.toObject();
    delete result.pwd;
    resp.send(result);
})
app.post('/login',async(req,resp)=>{
     let user = await User.findOne(req.body).select('-pwd')
    if(req.body.pwd && req.body.email){
        if(user){
            resp.send(user);
        }
        else{
        resp.send({result : "No user found"});
        }
    }
    else{
        resp.send({result : "No user found"});
        }
    
})
app.post('/add-product',async (req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})
app.get('/products',async (req,resp)=>{
    let products = await Product.find();
    if(products.length > 0){
        resp.send(products);
    }
    else{
        resp.send({result : 'No products found '})
    }
})
app.delete("/product/:id",async(req,resp)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})
app.listen(5000);