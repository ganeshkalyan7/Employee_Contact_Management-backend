const jwt = require("jsonwebtoken");

exports.authentication = async (req, res, next) => {
  // Check whether token exists
  if (!req.headers["access-token"])
    return res.status(401).send({ msg: "Unauthorised" });
  // Verify Token
  try {
    accessingOperation = await jwt.verify(
      req.headers["access-token"],
      "secret_key"
    );
    console.log(accessingOperation);
    next();
  } catch (err) {
    res.send(err);
  }
};
