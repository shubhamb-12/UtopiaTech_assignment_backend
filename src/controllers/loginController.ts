import bcrypt from "bcryptjs";
import User from "../models/userModel";
import RefreshToken from "../models/resfreshTokenModel";
import { generateToken, generateRefreshToken } from "./generateToken";

const userLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate access token
    const accessToken = generateToken(user._id);

    //Generate refresh token
    const refreshToken = generateRefreshToken(user._id);
    //Save refresh token to database
    const id: any = user._id;
    await RefreshToken.create({ userId: id, token: refreshToken });

    const { _id, name } = user;

    res.json({ userDetails: { _id, name, email }, accessToken, refreshToken });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

export default userLogin;
