const URL = require("../models/url");

module.exports = async (req, res) => {
  try {
    const shortUrl = req.params.shortURL;

    if (shortUrl.length !== 7) {
      throw new Error("Invalid URL.");
    }

    const data = await URL.findOne({ shortUrl });

    if (!data) {
      throw new Error("Not Found.");
    }
    res.redirect(data.url);
  } catch (err) {
    console.log(err);
    res.render("index", { error: err.message });
  }
};
