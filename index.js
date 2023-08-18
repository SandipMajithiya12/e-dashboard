const express = require('express');
require('./db/config')
const User = require('./db/user');
const cors = require('cors');

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
app.listen(5000);