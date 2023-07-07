import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);

    if (connect) {
      console.log("Connected to database.");
    }
  } catch (error) {
    console.log("Error connecting to database; ERROR :", error);
  }
};

export default dbConnect;
