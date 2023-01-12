const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running ");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((one) => one._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("server listening on " + port));
