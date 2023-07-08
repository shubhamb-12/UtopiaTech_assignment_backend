import jwt from "jsonwebtoken";

const protect = async (req: any, res: any, next: () => void) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //   console.log(token);
      const decoded = jwt.verify(token, process.env.SECRET);
      if (!decoded) {
        res.status(401).json({ message: "Not Authorized, token failed!" });
      }

      next();
    } catch (error) {
      console.error("Token validation error:", error);
      res.status(500).json({ error });
    }
  } else {
    res.status(401).json({ message: "Not Authorized, no token!" });
  }
};

export default protect;
