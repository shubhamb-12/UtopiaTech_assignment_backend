import { Types } from "mongoose";
import jwt from "jsonwebtoken";

const generateToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "120s",
  });
};

const generateRefreshToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET);
};

export { generateToken, generateRefreshToken };
