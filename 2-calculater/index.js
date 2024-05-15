const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    console.log("object");
    try {
      const { first, second } = req.body;
      console.log(first, second);
  
      if (!first || !second) {
        res
          .status(400)
          .send('Error: Both "title" and "post" fields are required.');
        return;
      }
  
      let existingData;
  
      const newData = { first, second };
      
      console.log(newData);
      existingData.push(newData);

      app.use(express.static(__dirname));
      res.sendFile(__dirname + "/html/secondPage.html");


    } catch (err) {
      res.status(500).send("Internal server error");
    }
  
  });


app.get("/", (req, res) => {
    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/html/home.html");
});




app.listen(5000, () => {
    console.log("server started on port http://localhost:5000")
})