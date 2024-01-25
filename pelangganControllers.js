const router = require("express").Router();
const db = require("../models/db");

const table = "pelanggan";


router.get("/", (re, res) => {
  db.query(`select * from ${table}`, (err, result) => {
    if (err) {
      res.status(500).json(err.message);
    }
    res.json(result);
  });
});

router.post("/", (req, res) => {
    const { ID_Pelanggan, Nama_Pelanggan, Alamat, Nomor_Telepon } = req.body;
    db.query(
        `INSERT INTO  ${table} (ID_Pelanggan, Nama_Pelanggan, Alamat, Nomor_Telepon) VALUES (?,?,?,?)`,
        [ID_Pelanggan, Nama_Pelanggan, Alamat, Nomor_Telepon],
        (err, result) => {
            if (err) {
                res.status(500).json(err.message);
            }
            res.json({ ID_Pelanggan, Nama_Pelanggan, Alamat, Nomor_Telepon });
        }
        );
    });
    
    router.get("/Nama_Pelanggan", (req, res) => {
      db.query(`select Nama_Pelanggan from ${table}`, (err, result) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.json(result);
      });
    });

    router.get("/ID_Pelanggan/:ID_Pelanggan", (req, res) => {
      const ID_Pelanggan = req.params.ID_Pelanggan;
      db.query(`select * from ${table} where ID_Pelanggan = ?`, [ID_Pelanggan], (err, result) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.json(result);
      });
    });
    
    router.get("/Alamat/:Alamat", (req, res) => {
      const Alamat = req.params.Alamat;
      db.query(`select * from ${table} where Alamat = ?`, [Alamat], (err, result) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.json(result);
      });
    });
    
    router.get("/Nomor_Telepon/:Nomor_Telepon", (req, res) => {
      const Nomor_Telepon = req.params.Nomor_Telepon;
      db.query(`select * from ${table} where Nomor_Telepon = ?`, [Nomor_Telepon], (err, result) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.json(result);
      });
    });
    






























    module.exports = router;
    