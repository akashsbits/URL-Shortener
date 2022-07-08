const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 3008;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
