const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
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
  
      const newData = { title, post };
      
      console.log(newData);
      existingData.push(newData);

    } catch (err) {
      res.status(500).send("Internal server error");
    }
  
    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/html/index.html");
  });


app.get("/", (req, res) => {
    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/html/home.html");
});




app.listen(5000, () => {
    console.log("server started on port http://localhost:5000")
})