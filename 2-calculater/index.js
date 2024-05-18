const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const generateId = () => uuidv4();


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const { height, weight } = req.body;
    sendData(height, weight);

    if (!height || !weight) {
      res
        .status(400)
        .send('Error: Both "title" and "post" fields are required.');
      return;
    }

    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/html/secondPage.html");
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

async function sendData(num1, num2) {
  try {
    // add id for each data

    const data = { id: generateId(), height: num1, weight: num2 };

    let allData = [];

    allData.forEach(dataObject => {
      dataObject.id = generateId(); // Add an "id" property with a unique ID
    });

    try {
      // Read existing data (if any)
      const existingData = await fs.readFile(path.join(__dirname, "db/db.json"), "utf-8");
      allData = JSON.parse(existingData) || []; // Parse or initialize empty array
    } catch (err) {
      console.warn("Error reading existing data:", err);
    }

    allData.push(data); // Append new data

    const jsonData = JSON.stringify(allData, null, 2); // Stringify with indentation
    await fs.writeFile(path.join(__dirname, "db/db.json"), jsonData);
    console.log("Data saved successfully!");
  } catch (err) {
    console.error("Error saving data:", err);
  }
}




app.get("/", (req, res) => {
  app.use(express.static(__dirname));
  res.sendFile(__dirname + "/html/home.html");
});

app.listen(5000, () => {
  console.log("server started on port http://localhost:5000");
});
