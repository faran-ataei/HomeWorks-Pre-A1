const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());





app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/login.html");
});

app.post("/", (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res
        .status(400)
        .send('Error: Both "username" and "password" fields are required.');
      return;
    }else if (password === "123456789"){
        res.status(200).send("Login successful");
    }else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(5000, () => {
  console.log("server started on port http://localhost:5000");
});
