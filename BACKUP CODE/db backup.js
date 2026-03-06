const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    socketPath: '/tmp/mysql.sock',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
    .then(() => console.log('✅ Koneksi ke Database SIPENTAS Berhasil!'))
    .catch((err) => console.error('❌ Gagal terhubung ke Database:', err));

module.exports = pool;