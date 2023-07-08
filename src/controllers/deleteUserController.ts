import User from "../models/userModel";
import RefreshToken from "../models/resfreshTokenModel";

const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    //Deleting user details
    await User.findByIdAndDelete(id);

    // Delete associated refresh tokens
    await RefreshToken.deleteMany({ userId: id });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: "An error occurred during user deletion" });
  }
};

export default deleteUser;
