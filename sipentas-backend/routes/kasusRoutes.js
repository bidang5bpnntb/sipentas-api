const express = require('express');
const router = express.Router();
const multer = require('multer');
const kasusController = require('../controllers/kasusController');

// Konfigurasi Multer untuk penyimpanan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});
const upload = multer({ storage: storage });

// RUTE API KITA:
// 1. Ambil semua data
router.get('/', kasusController.getAllKasus);

// 2. Tambah permohonan baru
router.post('/', upload.fields([
    { name: 'fileUsulan', maxCount: 1 },
    { name: 'fileBt', maxCount: 1 }
]), kasusController.createKasus);

// 3. Update data (Edit form, Selesaikan Tahapan, Tutup Berkas)
// Kita pakai upload.single('file') karena frontend mengirimkan bukti PDF dengan key 'file'
router.put('/:id', upload.single('file'), kasusController.updateKasus);

module.exports = router;