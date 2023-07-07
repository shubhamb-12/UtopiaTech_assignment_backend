import User from "../models/userModel";

const userSignUp = async (req: any, res: any) => {
  try {
    const { name, email, password, confirmPass } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // Create a new user
    await User.create({ name, email, password, confirmPass });

    res
      .status(201)
      .json({ message: "User created successfully", user: { name, email } });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "An error occurred during signup",
      Error: error.message,
    });
  }
};

export default userSignUp;
