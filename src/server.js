const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("server listening on " + port));
