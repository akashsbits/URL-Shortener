const URL = require("../models/url");

module.exports = async (req, res) => {
  try {
    const url = req.body.url;

    if (!url) {
      throw new Error("URL required.");
    }
    const isExist = await URL.findOne({ url });

    if (isExist) {
      throw new Error("URL already exist.");
    }

    const data = await URL.create({ url });

    res.render("index", { url: data.url, shortUrl: data.shortUrl });
  } catch (err) {
    console.log(err);
    res.render("index", { error: err.message });
  }
};
