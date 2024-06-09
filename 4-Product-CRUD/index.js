// here you have a products array. by implementing express app write crud functions related to this array.
//- get functions
//- post
//- put
//- delete
let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(products);
});

app.post("/", (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      res
        .status(400)
        .send('Error: Both "title" and "post" fields are required.');
      return;
    }
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

app.put("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    if (!name || !price) {
      res
        .status(400)
        .send('Error: Both "title" and "post" fields are required.');
      return;
    }
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      res.status(404).send("Product not found");
      return;
    }
    products[index] = { id, name, price };
    res.status(200).json(products[index]);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

app.delete("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      res.status(404).send("Product not found");
      return;
    }
    products.splice(index, 1);
    res.status(200).send("Product deleted successfully");
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

app.listen(5000, () => {
  console.log("server started on port http://localhost:5000");
});
