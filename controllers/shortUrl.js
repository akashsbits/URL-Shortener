const path = require("path");
const URL = require("../models/url");

const notFoundFile = path.join(__dirname, "../public/pages/404.html");

module.exports = async (req, res, next) => {
  try {
    const shortUrl = req.params.shortURL;

    if (shortUrl.length !== 7) {
      return res.status(404).sendFile(notFoundFile);
    }

    const data = await URL.findOne({ shortUrl });

    if (!data) {
      return res.status(404).sendFile(notFoundFile);
    }
    res.redirect(data.url);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
