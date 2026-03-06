const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// 1. Middleware Dasar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Mengekspos folder uploads agar PDF bisa diakses oleh frontend
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 3. Test Route (Opsional, untuk mengecek server di browser)
app.get('/', (req, res) => {
  res.send('SIPENTAS API is running');
});

// 4. Import & Gunakan Routes Utama
const kasusRoutes = require('./routes/kasusRoutes');
app.use('/api/kasus', kasusRoutes);

// 5. Jalankan Server
app.listen(PORT, () => {
  console.log(`[SERVER] SIPENTAS Backend berjalan di http://localhost:${PORT}`);
});