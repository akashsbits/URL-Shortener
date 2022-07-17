module.exports = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).render("index", {
      error: "Something went wrong, please try after sometime.",
    });
  } else {
    res.status(500).render("index", {
      error: err.message,
    });
  }
};
