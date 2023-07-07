import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import dbConnect from "./dbConnect";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(bodyparser.json());

dotenv.config();

// Connect to database
dbConnect();

app.use("/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
