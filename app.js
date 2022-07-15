const express = require("express");
const urlController = require("./controllers/url");
const shortUrlController = require("./controllers/shortUrl");
const connectDB = require("./db");

const app = express();

const PORT = 3008;
const MONGO_URI = "mongodb://localhost/urls";

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/url", urlController);
app.get("/:shortURL", shortUrlController);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
