require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "auth-service", status: "running" });
});

app.post("/signup", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: "User created successfully",
    user: { name, email }
  });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  res.json({
    message: "Login successful",
    token: "fake-jwt-token",
    user: { email }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));