const express = require("express");
const path = require("path");
const urlController = require("./controllers/url");
const shortUrlController = require("./controllers/shortUrl");
const connectDB = require("./db");
const notFoundHandler = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error");

const app = express();

const PORT = 3008;
const MONGO_URI = "mongodb://localhost/urls";

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});
app.post("/url", urlController);
app.get("/:shortURL", shortUrlController);

app.use(notFoundHandler);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
