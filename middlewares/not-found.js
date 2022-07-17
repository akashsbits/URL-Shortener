const path = require("path");

const notFoundFile = path.join(__dirname, "../public/pages/404.html");

module.exports = (req, res) => res.status(404).sendFile(notFoundFile);
