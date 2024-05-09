const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const { title, post } = req.body;

    if (!title || !post) {
      res
        .status(400)
        .send('Error: Both "title" and "post" fields are required.');
      return;
    }

    let existingData;
    try {
      const fileContent = await fs.readFile("./db/db.json", "utf8");
      existingData = JSON.parse(fileContent);
    } catch (err) {
      console.error("Error reading file:", err);
      existingData = [];
    }

    const newData = { title, post };

    existingData.push(newData);

    await fs.writeFile(
      "./db/db.json",
      JSON.stringify(existingData, null, 2),
      "utf8"
    );
  } catch (err) {
    res.status(500).send("Internal server error");
  }

  app.use(express.static(__dirname));
  res.sendFile(__dirname + "/html/index.html");
});

//? home page
app.get("/", (req, res) => {
  app.use(express.static(__dirname));
  res.sendFile(__dirname + "/html/index.html");
});

//? compose page
app.get("/compose", (req, res) => {
  app.use(express.static(__dirname));
  res.sendFile(__dirname + "/html/secondPage.html");
});

app.listen(3000, () => {
  console.log("run this port http://localhost:3000");
});
