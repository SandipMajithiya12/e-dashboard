const express = require("express");
require("./db/config");
const User = require("./db/user");

const cors = require("cors");
const Product = require("./db/Product");
const jwt = require("jsonwebtoken");
const jwtkey = "e-comm";

const app = express();
app.use(cors());
app.use(express.json());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.pwd;
  jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (error, token) => {
    if (error) {
      resp.send({ result: "somthing went to wrong" });
    }
    resp.send({ result, auth: token });
  });
});
app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-pwd");
  if (req.body.pwd && req.body.email) {
    if (user) {
      jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (error, token) => {
        if (error) {
          resp.send({ result: "somthing went to wrong" });
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "No user found" });
  }
});
app.post("/add-product",verfiryToken, async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});
app.get("/products",verfiryToken, async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No products found " });
  }
});
app.delete("/product/:id",verfiryToken, async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.get("/product/:id", verfiryToken,async (req, resp) => {
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No result found" });
  }
});
app.put("/product/:id",verfiryToken, async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});
app.get("/search/:key", verfiryToken,async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
function verfiryToken(req,resp,next){
  let token = req.headers['authorization'];
  if(token)
  {
    token = token.split(' ')[1];
    jwt.verify(token,jwtkey,(error,valid)=>{
      if(error){
        resp.send({result : "Please provide valid token"})

      }
      else{
        next();
      }
    })
    
  }
  else{
      resp.send({result : "Please add token with header"})
  }

}

app.listen(5000);
