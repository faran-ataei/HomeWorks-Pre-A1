//we are going to suggest you build a book directory, where you would need to create endpoints, using the four most basic methods: GET, POST, PUT and DELETE.

//You’d use GET for getting all books or getting only one book by id. With the POST method, you can add a new book to the list. You’d need the PUT method for updating the existing book, and it’s evident that with the DELETE method, you will remove the book from the list.

// you can start with data collected as a JSON file.



const express = require("express");
const fs = require("fs/promises");
const path = require("path");



const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "db/books.json"), "utf-8")
    .then((data) => {
      const books = JSON.parse(data);
      res.send(books);
    })
    .catch((err) => {
      console.error("Error reading file:", err);
    });
})

app.post("/", (req, res) => {
  try {   
    const { name, author } = req.body;
    if (!name || !author) {
      res
        .status(400)
        .send('Error: Both "name" and "author" fields are required.');
      return;
    }
    fs.readFile(path.join(__dirname, "db/books.json"), "utf-8")
      .then((data) => {
        const books = JSON.parse(data);
        const newBook = { id: books.length + 1, name, author };
        books.push(newBook);
        const jsonData = JSON.stringify(books, null, 2);
        fs.writeFile(path.join(__dirname, "db/books.json"), jsonData);
        res.status(201).json(newBook);
      })
      .catch((err) => {
        console.error("Error reading file:", err);
      });
  } catch (error) {
    console.error(error);
  }
})


app.put("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, author } = req.body;
    if (!name || !author) {
      res
        .status(400)
        .send('Error: Both "name" and "author" fields are required.');
      return;
    }
    fs.readFile(path.join(__dirname, "db/books.json"), "utf-8")
      .then((data) => {
        const books = JSON.parse(data);
        const index = books.findIndex((book) => book.id === id);
        if (index === -1) {
          res.status(404).send("Book not found");
          return;
        }
        books[index] = { id, name, author };
        const jsonData = JSON.stringify(books, null, 2);
        fs.writeFile(path.join(__dirname, "db/books.json"), jsonData);
        res.status(200).json(books[index]);
      })
      .catch((err) => {
        console.error("Error reading file:", err);
      });
  } catch (error) {
    console.error(error);
  }
})


app.delete("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    fs.readFile(path.join(__dirname, "db/books.json"), "utf-8")
      .then((data) => {
        const books = JSON.parse(data);
        const index = books.findIndex((book) => book.id === id);
        if (index === -1) {
          res.status(404).send("Book not found");
          return;
        }
        books.splice(index, 1);
        const jsonData = JSON.stringify(books, null, 2);
        fs.writeFile(path.join(__dirname, "db/books.json"), jsonData);
        res.status(200).send("Book deleted successfully");
      })
      .catch((err) => {
        console.error("Error reading file:", err);
      });
  } catch (error) {
    console.error(error);
  }
})




app.listen(5000, () => {
  console.log("server started on port http://localhost:5000");
});