const router = require("express").Router();
const db = require("../models/db");

const table = "Produk";

router.get("/", (req, res) => {
  db.query(`select * from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { ID_Produk, Nama_Produk, Harga_Produk, Stok } = req.body;
  db.query(
    `INSERT INTO  ${table} (ID_Produk, Nama_Produk, Harga_Produk, Stok) VALUES (?,?,?,?)`,
    [ID_Produk, Nama_Produk, Harga_Produk, Stok],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json({ ID_Produk, Nama_Produk, Harga_Produk, Stok });
    }
  );
});

router.get("/ID_Produk", (req, res) => {
  db.query(`select ID_Produk from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.get("/Nama_Produk", (req, res) => {
  db.query(`select Nama_Produk from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.get("/Stok", (req, res) => {
  db.query(`select Stok from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.get("/Nama_Produk/:Nama_Produk", (req, res) => {
  const Nama_Produk = req.params.Nama_Produk;
  db.query(
    `select * from ${table} where Nama_Produk = ?`,
    [Nama_Produk],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

router.get("/Harga_Produk/:Harga_Produk", (req, res) => {
  const Harga_Produk = req.params.Harga_Produk;
  db.query(
    `select * from ${table} where Harga_Produk = ?`,
    [Harga_Produk],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

router.get("/Stok/:Stok", (req, res) => {
  const Stok = req.params.Stok;
  db.query(`select * from ${table} where Stok = ?`, [Stok], (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

module.exports = router;
