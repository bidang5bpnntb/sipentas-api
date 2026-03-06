const mysql = require('mysql2/promise');
require('dotenv').config();

// Mendukung koneksi via Socket (macOS/Linux Homebrew) ATAU TCP (Linux server/Windows)
// Atur DB_SOCKET di .env untuk koneksi socket, atau DB_HOST + DB_PORT untuk TCP
const poolConfig = {
  user:             process.env.DB_USER,
  password:         process.env.DB_PASSWORD,
  database:         process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit:  10,
  queueLimit:       0,
};

if (process.env.DB_SOCKET) {
  // Mode Socket (contoh: /tmp/mysql.sock)
  poolConfig.socketPath = process.env.DB_SOCKET;
} else {
  // Mode TCP (contoh: host=127.0.0.1, port=3306)
  poolConfig.host = process.env.DB_HOST || '127.0.0.1';
  poolConfig.port = process.env.DB_PORT || 3306;
}

const pool = mysql.createPool(poolConfig);

pool.getConnection()
  .then(() => console.log('✅ Koneksi ke Database SIPENTAS Berhasil!'))
  .catch((err) => console.error('❌ Gagal terhubung ke Database:', err));

module.exports = pool;
