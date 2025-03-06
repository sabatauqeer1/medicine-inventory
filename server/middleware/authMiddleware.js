import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const accessToken = req.cookie["accesstoken"];
    console.log(accessToken);

    if (accessToken == null) {
      return res.status(401).send("Access denied. No token provided.");
    }

    const verified = jwt.verify(
      accessToken,
      process.env.JWT_KEY,
      (err, user) => {
        if (err) res.sendStatus(403);
        req.user = user;
        next();
      }
    );
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
