const db = require('../config/db');

exports.createKasus = async (req, res) => {
    try {
        const data = req.body;
        
        // Menangkap nama file yang diunggah oleh Multer
        const dokumenUsulan = req.files && req.files['fileUsulan'] ? req.files['fileUsulan'][0].filename : null;
        const dokumenbt = req.files && req.files['fileBt'] ? req.files['fileBt'][0].filename : null;

        // Query SQL
        const query = `
            INSERT INTO kasus (
                id, nomorberkas, nosurat, jenis, kantah, tglUsulan, pemohon, termohon, pj, noputs, 
                pemeganghak, jenissert, nosert, luas, kabupaten, kecamatan, desa, uraian, 
                currentStep, isClosed, dokumenUsulan, dokumenbt, tahapan, auditTrail
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            data.id, data.nomorberkas, data.nosurat, data.jenis, data.kantah, data.tglUsulan, 
            data.pemohon, data.termohon, data.pj, data.noputs, data.pemeganghak, data.jenissert, 
            data.nosert, data.luas, data.kabupaten, data.kecamatan, data.desa, data.uraian,
            data.currentStep || 0, 
            data.isClosed === 'true' || data.isClosed === true ? 1 : 0, 
            dokumenUsulan, dokumenbt, 
            data.tahapan, data.auditTrail
        ];

        await db.query(query, values);

        res.status(201).json({ 
            success: true, 
            message: 'Permohonan berhasil disimpan!',
            nomorberkas: data.nomorberkas 
        });

    } catch (error) {
        console.error('Error createKasus:', error);
        res.status(500).json({ success: false, message: 'Gagal menyimpan data ke server.' });
    }
};
// --- FUNGSI UNTUK MENGAMBIL SEMUA DATA (DASHBOARD) ---
exports.getAllKasus = async (req, res) => {
    try {
        // Mengambil semua data dan mengurutkannya dari yang terbaru
        const [rows] = await db.query('SELECT * FROM kasus ORDER BY created_at DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error getAllKasus:', error);
        res.status(500).json({ success: false, message: 'Gagal mengambil data dari database' });
    }
};

// --- FUNGSI UNTUK MENGUPDATE DATA (EDIT, TAHAPAN, TUTUP BERKAS) ---
exports.updateKasus = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        
        // Pengecekan apakah data ada di database
        const [existing] = await db.query('SELECT id FROM kasus WHERE id = ?', [id]);
        if (existing.length === 0) {
            return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
        }

        // Kita buat sistem update yang dinamis (hanya mengupdate field yang dikirim frontend)
        let updateFields = [];
        let values = [];

        // Daftar kolom yang diizinkan untuk di-update dari frontend
        const updatableColumns = [
            'pemohon', 'termohon', 'pemeganghak', 'luas', 'pj', 
            'currentStep', 'isClosed', 'statusState', 'tahapan', 'auditTrail', 'alasanTutup'
        ];
        
        updatableColumns.forEach(col => {
            if (data[col] !== undefined) {
                updateFields.push(`${col} = ?`);
                
                // Khusus isClosed, pastikan formatnya integer (1/0) untuk MySQL
                if (col === 'isClosed') {
                    values.push(data[col] === 'true' || data[col] === true ? 1 : 0);
                } else {
                    values.push(data[col]);
                }
            }
        });

        if (updateFields.length === 0) {
            return res.status(400).json({ success: false, message: 'Tidak ada data untuk diupdate' });
        }

        values.push(id); // Masukkan ID untuk klausa WHERE
        const query = `UPDATE kasus SET ${updateFields.join(', ')} WHERE id = ?`;
        
        await db.query(query, values);
        
        res.status(200).json({ success: true, message: 'Data berhasil diperbarui!' });

    } catch (error) {
        console.error('Error updateKasus:', error);
        res.status(500).json({ success: false, message: 'Gagal mengupdate data di server' });
    }
};