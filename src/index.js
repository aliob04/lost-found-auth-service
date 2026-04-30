require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
  res.json({ message: "User created" });
});

app.post("/login", (req, res) => {
  res.json({ token: "fake-token" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Auth running"));