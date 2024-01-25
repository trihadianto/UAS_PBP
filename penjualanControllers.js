const router = require("express").Router();
const db = require("../models/db");

const table = "penjualan";

router.get("/", (req, res) => {
  db.query(`select * from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const {
    ID_Penjualan,
    ID_Produk,
    ID_Pelanggan,
    Tanggal_Penjualan,
    Jumlah_Produk,
    Harga_Produk,
    Total_Penjualan,
  } = req.body;
  db.query(
    `INSERT INTO  ${table} (ID_Penjualan, ID_Produk, ID_Pelanggan, Tanggal_Penjualan, Jumlah_Produk, Harga_Produk, Total_Penjualan) VALUES (?,?,?,?,?,?,?)`,
    [
      ID_Penjualan,
      ID_Produk,
      ID_Pelanggan,
      Tanggal_Penjualan,
      Jumlah_Produk,
      Harga_Produk,
      Total_Penjualan,
    ],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json({
        ID_Penjualan,
        ID_Produk,
        ID_Pelanggan,
        Tanggal_Penjualan,
        Jumlah_Produk,
        Harga_Produk,
        Total_Penjualan,
      });
    }
  );
});
 

router.get("/ID_Penjualan/:ID_Penjualan", (req, res) => {
  const ID_Penjualan = req.params.ID_Penjualan;
  db.query(
    `select * from ${table} where ID_Penjualan = ?`,
    [ID_Penjualan],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

router.get("/ID_Produk/:ID_Produk", (req, res) => {
  const ID_Produk = req.params.ID_Produk;
  db.query(
    `select * from ${table} where ID_Produk = ?`,
    [ID_Produk],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

router.get("/ID_Pelanggan/:ID_Pelanggan", (req, res) => {
  const ID_Pelanggan = req.params.ID_Pelanggan;
  db.query(
    `select * from ${table} where ID_Pelanggan = ?`,
    [ID_Pelanggan],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

router.get("/Total_Penjualan/:Total_Penjualan", (req, res) => {
  const Total_Penjualan = req.params.Total_Penjualan;
  db.query(
    `select * from ${table} where Total_Penjualan = ?`,
    [Total_Penjualan],
    (err, result) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.json(result);
    }
  );
});

module.exports = router;
