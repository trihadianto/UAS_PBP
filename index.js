const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models/db");
const bodyParser = require("body-parser");
const adminAuth = require("./middleware/admin");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pelangganControllers = require("./controllers/pelangganControllers");
const produkControllers = require("./controllers/produkControllers");
const penjualanControllers = require("./controllers/penjualanControllers");

app.use("/api/pelanggan", pelangganControllers);
app.use("/api/produk", produkControllers);
app.use("/api/penjualan", penjualanControllers);

app.get("/admin", adminAuth, (req, res) => {
  res.json({ message: "You have access to this protected route", user: res.user });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = { username: "admin", password: "admin"};
  if (username === user.username && password === user.password){
    const token = jwt.sign(user, "secret-key");
    res.json({ token });
  }
  res.json({ message: "kamu tidak dapat akses"});
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
