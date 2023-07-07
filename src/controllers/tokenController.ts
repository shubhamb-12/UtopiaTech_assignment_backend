import jwt, { JwtPayload } from "jsonwebtoken";
import RefreshToken from "../models/resfreshTokenModel";
import { generateToken } from "./generateToken";

const tokenRefresh = async (req: any, res: any) => {
  try {
    const { refreshToken } = req.body;

    // Check if the refresh token exists
    const existingToken = await RefreshToken.findOne({ token: refreshToken });
    if (!existingToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // Verify the refresh token
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // Fetching userId
    const jwtPayload = decodedToken as JwtPayload;
    // console.log(jwtPayload.id);
    const userId = jwtPayload.id;

    //Generate a new access token
    const accessToken = generateToken(userId);

    res.json({ accessToken });
  } catch (error) {
    console.error("Token refresh error:", error);
    res.status(500).json({ message: "An error occurred during token refresh" });
  }
};

export default tokenRefresh;
