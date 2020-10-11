const jwt = require("jsonwebtoken");
const { showError } = require("../controllers/_showError");

exports.auth = (req, res, next) => {
  let header, token;

  //check user sent token / not
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    return res.status(400).send({ message: "Access denied!" });

  try {
    const verified = jwt.verify(token, "abidfalih");
    req.user = verified;
  } catch (err) {
    showError(err);
  }
};
