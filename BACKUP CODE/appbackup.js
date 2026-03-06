const API_URL = 'http://localhost:8080/api';

// ══════════════════════════════════════════════════════════
// DATA LIBUR NASIONAL & CUTI BERSAMA 2026
// ══════════════════════════════════════════════════════════
const HOLIDAYS_2026 = {
  '2026-01-01': 'Tahun Baru 2026 Masehi',
  '2026-01-16': 'Isra Mikraj Nabi Muhammad S.A.W.',
  '2026-02-16': 'Cuti Bersama Tahun Baru Imlek',
  '2026-02-17': 'Tahun Baru Imlek 2577 Kongzili',
  '2026-03-18': 'Cuti Bersama Hari Suci Nyepi',
  '2026-03-19': 'Hari Suci Nyepi (Tahun Baru Saka 1948)',
  '2026-03-20': 'Cuti Bersama Idul Fitri',
  '2026-03-21': 'Idul Fitri 1447 Hijriah',
  '2026-03-22': 'Idul Fitri 1447 Hijriah',
  '2026-03-23': 'Cuti Bersama Idul Fitri',
  '2026-03-24': 'Cuti Bersama Idul Fitri',
  '2026-04-03': 'Wafat Yesus Kristus',
  '2026-04-05': 'Kebangkitan Yesus Kristus (Paskah)',
  '2026-05-01': 'Hari Buruh Internasional',
  '2026-05-14': 'Kenaikan Yesus Kristus',
  '2026-05-15': 'Cuti Bersama Kenaikan Yesus Kristus',
  '2026-05-27': 'Idul Adha 1447 Hijriah',
  '2026-05-28': 'Cuti Bersama Idul Adha',
  '2026-05-31': 'Hari Raya Waisak 2570 BE',
  '2026-06-01': 'Hari Lahir Pancasila',
  '2026-06-16': 'Tahun Baru Islam 1448 Hijriah',
  '2026-08-17': 'Proklamasi Kemerdekaan',
  '2026-08-25': 'Maulid Nabi Muhammad S.A.W.',
  '2026-12-24': 'Cuti Bersama Kelahiran Yesus Kristus',
  '2026-12-25': 'Kelahiran Yesus Kristus'
};

// ══════════════════════════════════════════════════════════
// 1. DATA MASTER WILAYAH (BPS NTB)
// ══════════════════════════════════════════════════════════
const rawNTB = {"Lombok Barat": {"Gerung": "Desa Babussalam,Desa Banyu Urip,Desa Beleke,Desa Dasan Tapen,Desa Gapuk,Desa Giri Tembesi,Desa Kebon Ayu,Desa Mesanggok,Desa Suka Makmur,Desa Taman Ayu,Desa Tempos,Kelurahan Dasan Geres,Kelurahan Gerung Selatan,Kelurahan Gerung Utara", "Kediri": "Desa Banyumulek,Desa Dasan Baru,Desa Gelogor,Desa Jagaraga Indah,Desa Kediri,Desa Kediri Selatan,Desa Lelede,Desa Montong Are,Desa Ombe Baru,Desa Rumak", "Narmada": "Desa Badrain,Desa Batu Kuta,Desa Buwun Sejati,Desa Dasan Tereng,Desa Golong,Desa Grimax Indah,Desa Keru,Desa Kramat Jaya,Desa Lebah Sempage,Desa Lembuak,Desa Mekarsari,Desa Narmada,Desa Nyur Lembang,Desa Pakuan,Desa Peresak,Desa Sedau,Desa Selat,Desa Sembung,Desa Sesaot,Desa Suranadi,Desa Tanak Beak", "Sekotong": "Desa Batu Putih,Desa Buwun Mas,Desa Cendi Manik,Desa Gili Gede Indah,Desa Kedaro,Desa Pelangan,Desa Sekotong Barat,Desa Sekotong Tengah,Desa Taman Baru", "Labuapi": "Desa Bagik Polak,Desa Bagik Polak Barat,Desa Bajur,Desa Bengkel,Desa Karang Bongkot,Desa Kuranji,Desa Kuranji Dalang,Desa Labuapi,Desa Merembu,Desa Perampuan,Desa Telagawaru,Desa Terong Tawah", "Gunungsari": "Desa Bukittinggi,Desa Dopang,Desa Gelangsar,Desa Guntur Macan,Desa Gunungsari,Desa Jatisela,Desa Jeringo,Desa Kekait,Desa Kekeri,Desa Mambalan,Desa Mekar Sari,Desa Midang,Desa Penimbung,Desa Ranjok,Desa Sesele,Desa Taman Sari", "Lingsar": "Desa Batu Kumbang,Desa Batu Mekar,Desa Bug-Bug,Desa Dasan Geria,Desa Duman,Desa Gegelang,Desa Gegerung,Desa Giri Madia,Desa Gontoran,Desa Karang Bayan,Desa Langko,Desa Lingsar,Desa Peteluan Indah,Desa Saribaye,Desa Sigerongan", "Lembar": "Desa Eyat Mayang,Desa Jembatan Gantung,Desa Jembatan Kembar,Desa Jembatan Kembar Timur,Desa Labuan Tereng,Desa Lembar,Desa Lembar Selatan,Desa Mareje,Desa Mareje Timur,Desa Sekotong Timur", "Batu Layar": "Desa Batu Layar Barat,Desa Batulayar,Desa Bengkaung,Desa Lembah Sari,Desa Meninting,Desa Pusuk Lestari,Desa Sandik,Desa Senggigi,Desa Senteluk", "Kuripan": "Desa Giri Sasak,Desa Jagaraga,Desa Kuripan,Desa Kuripan Selatan,Desa Kuripan Timur,Desa Kuripan Utara"}, "Lombok Tengah": {"Praya": "Desa Aik Mual,Desa Bunut Baok,Desa Jago,Desa Mekar Damai,Desa Mertak Tombok,Desa Montong Terep,Kelurahan Gerunung,Kelurahan Gonjak,Kelurahan Leneng,Kelurahan Panji Sari,Kelurahan Perapen,Kelurahan Praya,Kelurahan Renteng,Kelurahan Semayan,Kelurahan Tiwugalih", "Jonggat": "Desa Barejulat,Desa Batu Tulis,Desa Bonjeruk,Desa Bunkate,Desa Gemel,Desa Jelantik,Desa Labulia,Desa Nyerot,Desa Pengenjek,Desa Perina,Desa Puyung,Desa Sukarara,Desa Ubung", "Batukliang": "Desa Aik Darek,Desa Barabali,Desa Beber,Desa Bujak,Desa Lendang Tampel,Desa Mantang,Desa Mekar Bersatu,Desa Pagutan,Desa Peresak,Desa Selebung,Desa Tampak Siring", "Pujut": "Desa Bangket Parak,Desa Dadap,Desa Gapura,Desa Kawo,Desa Kerame Jati,Desa Ketara,Desa Kuta,Desa Mertak,Desa Pengembur,Desa Pengengat,Desa Prabu,Desa Rembitan,Desa Segala Anyar,Desa Sengkol,Desa Sukadana,Desa Tanak Awu,Desa Teruwai,Desa Tumpak", "Praya Barat": "Desa Banyu Urip,Desa Batujai,Desa Bonder,Desa Kateng,Desa Mangkung,Desa Mekar Sari,Desa Penujak,Desa Selong Blanak,Desa Setanggor,Desa Tanak Rarang", "Praya Timur": "Desa Beleka,Desa Beleke Daye,Desa Beleke Lebe Sane,Desa Bilelando,Desa Ganti,Desa Jero Puri,Desa Kidang,Desa Landah,Desa Marong,Desa Mujur,Desa Pegonak,Desa Semoyang,Desa Sengkerang,Desa Sukaraja", "Janapria": "Desa Bakan,Desa Durian,Desa Janapria,Desa Janggawana,Desa Jango,Desa Kerembong,Desa Langko,Desa Lekor,Desa Lingkok Berenge,Desa Loang Maka,Desa Pendem,Desa Prako,Desa Saba,Desa Selebung Rembiga,Desa Setuta,Desa Tibu Sisok", "Pringgarata": "Desa Arjangka,Desa Bagu,Desa Bilebante,Desa Menemeng,Desa Murbaya,Desa Pemepek,Desa Pringarata,Desa Sepakek,Desa Sintung,Desa Sisik,Desa Taman Indah", "Kopang": "Desa Aik Bual,Desa Bebuak,Desa Berinding,Desa Darmaji,Desa Dasan Baru,Desa Kopang Rembiga,Desa Lendang Are,Desa Monggas,Desa Montong Gamang,Desa Muncan,Desa Pajangan,Desa Semparu,Desa Wajageseng", "Praya Tengah": "Desa Batunyala,Desa Beraim,Desa Dakung,Desa Jurang Jaler,Desa Kelebuh,Desa Lajut,Desa Lelong,Desa Pejanggik,Desa Pengadang,Desa Prai Meke,Kelurahan Gerantung,Kelurahan Jontlak,Kelurahan Sasake", "Praya Barat Daya": "Desa Batu Jangkih,Desa Darek,Desa Kabul,Desa Montong Ajan,Desa Montong Sapah,Desa Pandan Indah,Desa Pandan Tinggang,Desa Pelambik,Desa Ranggagata,Desa Serage,Desa Teduh,Desa Ungga", "Batukliang Utara": "Desa Aik Berik,Desa Aik Bukaq,Desa Karang Sidemen,Desa Lantan,Desa Mas-Mas,Desa Setiling,Desa Tanak Beak,Desa Teratak"}, "Lombok Timur": {"Keruak": "Desa Batu Putik,Desa Dane Rase,Desa Keruak,Desa Ketangga Jeraeng,Desa Ketapang Raya,Desa Mendana Raya,Desa Montong Belae,Desa Pijot,Desa Pijot Utara,Desa Pulau Maringkik,Desa Selebung Ketangga,Desa Senyiur,Desa Sepit,Desa Setungkep Lingsar,Desa Tanjung Luar", "Sakra": "Desa Kabar,Desa Keselet,Desa Kuang Baru,Desa Moyot,Desa Peresak,Desa Rumbuk,Desa Rumbuk Timur,Desa Sakra,Desa Sakra Selatan,Desa Songak,Desa Suwangi,Desa Suwangi Timur", "Terara": "Desa Embung Kandong,Desa Embung Raja,Desa Jenggik,Desa Kalianyar,Desa Lando,Desa Leming,Desa Pandan Duri,Desa Rarang,Desa Rarang Batas,Desa Rarang Selatan,Desa Rarang Tengah,Desa Santong,Desa Selagik,Desa Sukadana,Desa Suradadi,Desa Terara", "Sikur": "Desa Darmasari,Desa Gelora,Desa Jeruk Manis,Desa Kembang Kuning,Desa Kota Raja,Desa Loyok,Desa Montong Baan,Desa Montong Baan Selatan,Desa Semaya,Desa Sikur,Desa Sikur Barat,Desa Sikur Selatan,Desa Tete Batu,Desa Tetebatu Selatan", "Masbagik": "Desa Danger,Desa Kesik,Desa Kumbang,Desa Lendang Nangka,Desa Lendang Nangka Utara,Desa Masbagik Selatan,Desa Masbagik Timur,Desa Masbagik Utara,Desa Masbagik Utara Baru,Desa Paokmotong", "Sukamulia": "Desa Dasan Lekong,Desa Jantuk,Desa Nyiur Tebel,Desa Padamara,Desa Paok Pampang,Desa Setanggor,Desa Setanggor Selatan,Desa Sukamulia,Desa Sukamulia Timur", "Selong": "Desa Danggen Timur,Kelurahan Denggen,Kelurahan Kelaju Jorong,Kelurahan Kelayu Selatan,Kelurahan Kelayu Utara,Kelurahan Kembang Sari,Kelurahan Majidi,Kelurahan Pancor,Kelurahan Rakam,Kelurahan Sandu Baya,Kelurahan Sekarteja,Kelurahan Selong", "Pringgabaya": "Desa Anggaraksa,Desa Apit Aik,Desa Bagik Papan,Desa Batuyang,Desa Gunung Malang,Desa Kerumut,Desa Labuhan Lombok,Desa Pohgading,Desa Pohgading Timur,Desa Pringgabaya,Desa Pringgabaya Utara,Desa Seruni Mumbul,Desa Tanak Gadang,Desa Teko,Desa Telaga Waru", "Aikmel": "Desa Aik Prapa,Desa Aikmel,Desa Aikmel Barat,Desa Aikmel Timur,Desa Aikmel Utara,Desa Bagik Nyaka Santri,Desa Kalijaga,Desa Kalijaga Selatan,Desa Kalijaga Tengah,Desa Kalijaga Timur,Desa Kembang Kerang,Desa Kembang Kerang Daya,Desa Keroya,Desa Toya", "Sambelia": "Desa Bagik Manis,Desa Belanting,Desa Dadap,Desa Darakunci,Desa Labuhan Pandan,Desa Madayin,Desa Obel-Obel,Desa Padak Guar,Desa Sambalia,Desa Senanggalih,Desa Sugian", "Montong Gading": "Desa Jenggik Utara,Desa Kilang,Desa Lendang Belo,Desa Montong Betok,Desa Perian,Desa Pesanggrahan,Desa Pringga Jurang,Desa Pringgajurang Utara", "Pringgasela": "Desa Aik Dewa,Desa Jurit,Desa Jurit Baru,Desa Pengadangan,Desa Pengadangan Barat,Desa Pringgasela,Desa Pringgasela Selatan,Desa Pringgasela Timur,Desa Rempung,Desa Timbanuh", "Suralaga": "Desa Anjani,Desa Bagik Payung,Desa Bagik Payung Selatan,Desa Bagik Payung Timur,Desa Bintang Rinjani,Desa Dames Damai,Desa Dasan Borok,Desa Gapuk,Desa Gerung Permai,Desa Kerongkong,Desa Paok Lombok,Desa Suralaga,Desa Tebaban,Desa Tumbuh Mulia,Desa Waringin", "Wanasaba": "Desa Bandok,Desa Bebidas,Desa Beriri Jarak,Desa Jineng,Desa Karang Baru,Desa Karang Baru Timur,Desa Mamben Baru,Desa Mamben Daya,Desa Mamben Lauk,Desa Otak Rarangan,Desa Tembeng Putik,Desa Wanasaba,Desa Wanasaba Daya,Desa Wanasaba Lauk", "Sembalun": "Desa Bilok Petung,Desa Sajang,Desa Sembalun,Desa Sembalun Bumbung,Desa Sembalun Lawang,Desa Sembalun Timba Gading", "Suwela": "Desa Ketangga,Desa Mekar Sari,Desa Perigi,Desa Puncak Jeringo,Desa Sapit,Desa Selaparang,Desa Suela,Desa Suntalangu", "Labuhan Haji": "Desa Banjarsari,Desa Kertasari,Desa Korleko,Desa Korleko Selatan,Desa Labuhan Haji,Desa Peneda Gandor,Desa Teros,Desa Tirtanadi,Kelurahan Geres,Kelurahan Ijobalit,Kelurahan Suryawangi,Kelurahan Tanjung", "Sakra Timur": "Desa Gelanggang,Desa Gereneng,Desa Gereneng Timur,Desa Lenting,Desa Lepak,Desa Lepak Timur,Desa Menceh,Desa Montong Tangi,Desa Surabaya,Desa Surabaya Utara", "Sakra Barat": "Desa Borok Toyang,Desa Boyemare,Desa Bungtiang,Desa Gadungmas,Desa Gerisak Semanggeleng,Desa Gunung Rajak,Desa Jerogunung,Desa Kembang Are Sampai,Desa Mengkuru,Desa Montong Beter,Desa Pejaring,Desa Pematung,Desa Pengkelak Mas,Desa Rensing,Desa Rensing Bat,Desa Rensing Raya,Desa Sukarara,Desa Tanak Kaken", "Jerowaru": "Desa Batu Nampar,Desa Batunampar Selatan,Desa Ekas Buana,Desa Jerowaru,Desa Kwang Rundun,Desa Pandan Wangi,Desa Pare Mas,Desa Pemongkong,Desa Pene,Desa Sekaroh,Desa Sepapan,Desa Seriwe,Desa Sukadamai,Desa Sukaraja,Desa Wakan", "Lenek": "Desa Kalijaga Baru,Desa Lenek,Desa Lenek Baru,Desa Lenek Daya,Desa Lenek Duren,Desa Lenek Kalibambang,Desa Lenek Lauk,Desa Lenek Pesiraman,Desa Lenek Ramban Biak,Desa Sukarema"}, "Sumbawa": {"Lunyuk": "Desa Emang Lestari,Desa Jamu,Desa Lunyuk Ode,Desa Lunyuk Rea,Desa Pada Suka,Desa Perung,Desa Suka Maju,Desa Upt Perode Sp Iii", "Alas": "Desa Baru,Desa Dalam,Desa Juran Alas,Desa Kalimango,Desa Labuhan Alas,Desa Luar,Desa Marente,Desa Pulau Bungin", "Utan": "Desa Bale Brang,Desa Jorok,Desa Labuhan Bajo,Desa Motong,Desa Orong Bawa,Desa Pukat,Desa Sebedo,Desa Stowe Brang,Desa Tengah", "Batu Lanteh": "Desa Bao Desa,Desa Batu Dulang,Desa Batu Rotok,Desa Kelungkung,Desa Tangkam Pulit,Desa Tepal", "Sumbawa": "Kelurahan Brang Bara,Kelurahan Brang Biji,Kelurahan Bugis,Kelurahan Lempeh,Kelurahan Pekat,Kelurahan Samapuin,Kelurahan Seketeng,Kelurahan Uma Sima", "Moyo Hilir": "Desa Batu Bangka,Desa Berare,Desa Kakiang,Desa Labuhan Ijuk,Desa Moyo,Desa Moyo Mekar,Desa Ngeru,Desa Olat Rawa,Desa Poto,Desa Serading", "Moyo Hulu": "Desa Batu Bulan,Desa Batu Tering,Desa Brang Rea,Desa Leseng,Desa Lito,Desa Maman,Desa Marga Karya,Desa Mokong,Desa Pernek,Desa Sebasang,Desa Semamung,Desa Sempe", "Ropang": "Desa Lawin,Desa Lebangkar,Desa Lebin,Desa Ranan,Desa Ropang", "Lape": "Desa Dete,Desa Hijrah,Desa Labuhan Kuris,Desa Lape", "Plampang": "Desa Brang Kolong,Desa Muer,Desa Plampang,Desa Selanteh,Desa Sepakat,Desa Sepayung,Desa Teluk Santong,Desa Upt. Perode Sp I,Desa Upt. Perode Sp Ii,Desa Usar", "Empang": "Desa Boal,Desa Bunga Eja,Desa Empang Atas,Desa Empang Bawa,Desa Gapit,Desa Jotang,Desa Jotang Beru,Desa Lamenta,Desa Ongko,Desa Pamanto", "Alas Barat": "Desa Gontar,Desa Gontar Baru,Desa Labuhan Mapin,Desa Lekong,Desa Mapin Beru,Desa Mapin Kebak,Desa Mapin Rea,Desa Usar Mapin", "Labuhan Badas": "Desa Bajo Medang,Desa Bugis Medang,Desa Karang Dima,Desa Labuhan Aji,Desa Labuhan Badas,Desa Labuhan Sumbawa,Desa Sebotok", "Labangka": "Desa Jaya Makmur,Desa Labangka,Desa Sekokat,Desa Suka Damai,Desa Suka Mulya", "Buer": "Desa Buin Baru,Desa Juru Mapin,Desa Kalabeso,Desa Labuhan Burung,Desa Pulau Kaung,Desa Tarusa", "Rhee": "Desa Luk,Desa Rhee,Desa Rhee Loka,Desa Sampe", "Unter Iwes": "Desa Boak,Desa Jorok,Desa Kerato,Desa Kerekeh,Desa Nijang,Desa Pelat,Desa Pungka,Desa Uma Beringin", "Moyo Utara": "Desa Baru Tahan,Desa Kukin,Desa Penyaring,Desa Pungkit,Desa Sebewe,Desa Songkar", "Maronge": "Desa Labuhan Sangoro,Desa Maronge,Desa Pamasar,Desa Simu", "Tarano": "Desa Banda,Desa Bantulante,Desa Labuhan Aji,Desa Labuhan Bontong,Desa Labuhan Jambu,Desa Labuhan Pidang,Desa Mata,Desa Tolo Oi", "Lopok": "Desa Berora,Desa Langam,Desa Lopok,Desa Lopok Beru,Desa Mamak,Desa Pungkit,Desa Tatede", "Lenangguar": "Desa Ledang,Desa Lenangguar,Desa Tatebal,Desa Telaga", "Orong Telu": "Desa Kelawis,Desa Mungkin,Desa Sebeok,Desa Senawang", "Lantung": "Desa Ai Mual,Desa Lantung,Desa Padesa,Desa Sepukur"}, "Dompu": {"Dompu": "Desa Dore Bara,Desa Karamabura,Desa Kareke,Desa Katua,Desa Mangge Nae,Desa Manggeasi,Desa Mbawi,Desa O'O,Desa Sori Sakolo,Kelurahan Bada,Kelurahan Bali,Kelurahan Dora Tangga,Kelurahan Kandai I,Kelurahan Karijawa,Kelurahan Potu", "Kempo": "Desa Doro Kobo,Desa Kempo,Desa Konte,Desa Songgaja,Desa Soro,Desa Soro Barat,Desa Ta'A,Desa Tolo Kalo", "Hu'U": "Desa Adu,Desa Cempi Jaya,Desa Daha,Desa Hu'U,Desa Jala,Desa Merada,Desa Rasa Bou,Desa Sawe", "Kilo": "Desa Karama,Desa Kiwu,Desa Lasi,Desa Malaju,Desa Mbuju,Desa Taropo", "Woja": "Desa Baka Jaya,Desa Bara,Desa Mada Prama,Desa Matua,Desa Mumbu,Desa Nowa,Desa Raba Baka,Desa Riwo,Desa Saneo,Desa Sera Kapi,Desa Wawonduru,Kelurahan Kandai Ii,Kelurahan Monta Baru,Kelurahan Simpasai", "Pekat": "Desa Beringin Jaya,Desa Calabai,Desa Doro Peti,Desa Kadindi,Desa Kadindi Barat,Desa Karombo,Desa Nangakara,Desa Nangamiro,Desa Pekat,Desa Sori Nomo,Desa Sori Tatanga,Desa Tambora", "Manggalewa": "Desa Anamina,Desa Banggo,Desa Doromelo,Desa Kampasi Meci,Desa Kwangko,Desa Lanci Jaya,Desa Nangatumpu,Desa Nusa Jaya,Desa Soriutu,Desa Suka Damai,Desa Tanju,Desa Teka Sire", "Pajo": "Desa Jambu,Desa Lepadi,Desa Lune,Desa Ranggo,Desa Tembal Lae,Desa Woko"}, "Bima": {"Monta": "Desa Baralau,Desa Monta,Desa Nontotera,Desa Pela,Desa Sakuru,Desa Sie,Desa Simpasai,Desa Sondo,Desa Tangga,Desa Tangga Baru,Desa Tolotangga,Desa Tolouwi,Desa Waro,Desa Wilamaci", "Bolo": "Desa Bontokape,Desa Darussalam,Desa Kananga,Desa Kara,Desa Leu,Desa Nggembe,Desa Rada,Desa Rasabau,Desa Rato,Desa Sanolo,Desa Sondosia,Desa Tambe,Desa Timu,Desa Tumpu", "Woha": "Desa Dadibou,Desa Donggobolo,Desa Kalampa,Desa Keli,Desa Naru,Desa Nisa,Desa Pandai,Desa Penapali,Desa Rabakodo,Desa Risa,Desa Samili,Desa Talabiu,Desa Tenga,Desa Tente,Desa Waduwani", "Belo": "Desa Cenggu,Desa Diha,Desa Lido,Desa Ncera,Desa Ngali,Desa Renda,Desa Roka,Desa Runggu,Desa Soki", "Wawo": "Desa Kambilo,Desa Kombo,Desa Maria,Desa Maria Utara,Desa Ntori,Desa Pesa,Desa Raba,Desa Rianmau,Desa Tarlawi", "Sape": "Desa Bajo Pulo,Desa Boke,Desa Bugis,Desa Buncu,Desa Jia,Desa Kowo,Desa Lamera,Desa Na'E,Desa Naru,Desa Naru Barat,Desa Oi Maci,Desa Parangina,Desa Poja,Desa Rai O'I,Desa Rasabou,Desa Sangia,Desa Sari,Desa Tanah Putih", "Wera": "Desa Bala,Desa Hadirasa,Desa Kalajena,Desa Mandala,Desa Nanga Wera,Desa Ntoke,Desa Nunggi,Desa Oi Tui,Desa Pai,Desa Ranggasolo,Desa Sangiang,Desa Tadewa,Desa Tawali,Desa Wora", "Donggo": "Desa Bumi Pajo,Desa Dori Dungga,Desa Kala,Desa Mbawa,Desa Mpili,Desa Ndano Na'E,Desa O'O,Desa Palama,Desa Rora", "Sanggar": "Desa Boro,Desa Kore,Desa Oi Saro,Desa Piong,Desa Sandue,Desa Taloko", "Ambalawi": "Desa Kole,Desa Mawu,Desa Nipa,Desa Rite,Desa Talapiti,Desa Tolowata", "Langgudu": "Desa Doro O\"O,Desa Dumu,Desa Kalodu,Desa Kangga,Desa Karampi,Desa Karumbu,Desa Kawuwu,Desa Laju,Desa Pusu,Desa Rompo,Desa Rupe,Desa Sambane,Desa Sarae Ruma,Desa Waduruka,Desa Waworada", "Lambu": "Desa Hidirasa,Desa Kaleo,Desa Lambu,Desa Lanta,Desa Lanta Barat,Desa Mangge,Desa Melayu,Desa Monta Baru,Desa Nggelu,Desa Rato,Desa Sangga,Desa Simpasai,Desa Soro,Desa Sumi", "Madapangga": "Desa Bolo,Desa Campa,Desa Dena,Desa Madawau,Desa Monggo,Desa Mpuri,Desa Ncandi,Desa Ndano,Desa Rade,Desa Tonda,Desa Woro", "Tambora": "Desa Kawinda Nae,Desa Kawinda Toi,Desa Labuhan Kenanga,Desa Oi Bura,Desa Oi Katupa,Desa Oi Panihi,Desa Rasabou", "Soromandi": "Desa Bajo,Desa Kanata,Desa Lewintana,Desa Punti,Desa Sai,Desa Sampungu,Desa Wadukopa", "Parado": "Desa Kanca,Desa Kuta,Desa Lere,Desa Parado Rato,Desa Parado Wane", "Lambitu": "Desa Ka'Owa,Desa Kabaro,Desa Kuta,Desa Londu,Desa Sambori,Desa Teta", "Palibelo": "Desa Belo,Desa Bre,Desa Dore,Desa Nata,Desa Ntonggu,Desa Padolo,Desa Panda,Desa Ragi,Desa Roi,Desa Teke,Desa Tolongondoa,Desa Tonggorisa"}, "Sumbawa Barat": {"Jereweh": "Desa Belo,Desa Beru,Desa Dasan Anyar,Desa Goa", "Taliwang": "Desa Banjar,Desa Batu Putih,Desa Labuhan Kertasari,Desa Labuhan Lalar,Desa Lalar Liang,Desa Lamunga,Desa Seloto,Desa Sermong,Desa Tamekan,Kelurahan Arab Kenangan,Kelurahan Bugis,Kelurahan Dalam,Kelurahan Kuang,Kelurahan Menala,Kelurahan Sampir,Kelurahan Telaga Bertong", "Seteluk": "Desa Air Suning,Desa Desaloka,Desa Kelanir,Desa Lamusung,Desa Meraran,Desa Rempe,Desa Seran,Desa Seteluk Atas,Desa Seteluk Tengah,Desa Tapir", "Sekongkang": "Desa Ai Kangkung,Desa Kemuning,Desa Sekongkang Atas,Desa Sekongkang Bawah,Desa Talonang Baru,Desa Tatar,Desa Tongo", "Brang Rea": "Desa Bangkat Monteh,Desa Desa Beru,Desa Lamuntet,Desa Moteng,Desa Rarak Ronges,Desa Sapugara Bree,Desa Seminar Salit,Desa Tepas,Desa Tepas Sepakat", "Poto Tano": "Desa Kiantar,Desa Kokarlian,Desa Mantar,Desa Poto Tano,Desa Senayan,Desa Tebo,Desa Tuananga,Desa Upt Tambak Sari", "Brang Ene": "Desa Kalimantong,Desa Lampok,Desa Manemeng,Desa Mataiyang,Desa Mujahiddin,Desa Mura", "Maluk": "Desa Benete,Desa Bukit Damai,Desa Maluk,Desa Mantun,Desa Pasir Putih"}, "Lombok Utara": {"Tanjung": "Desa Jenggala,Desa Medana,Desa Sama Guna,Desa Sigar Penjalin,Desa Sokong,Desa Tanjung,Desa Tegal Maja,Desa Teniga", "Gangga": "Desa Bentek,Desa Genggelang,Desa Gondang,Desa Rempek,Desa Rempek Darussalam,Desa Sambik Bangkol,Desa Segara Katon,Desa Selelos", "Kayangan": "Desa Dangiang,Desa Gumantar,Desa Kayangan,Desa Pansor,Desa Pendua,Desa Salut,Desa Santong,Desa Santong Mulia,Desa Selengen,Desa Sesait", "Bayan": "Desa Akat Akar,Desa Andalan,Desa Anyar,Desa Batu Rakit,Desa Bayan,Desa Gunjan Asri,Desa Karang Bajo,Desa Loloan,Desa Mumbul Sari,Desa Sambik Elen,Desa Senaru,Desa Sukadana", "Pemenang": "Desa Gili Indah,Desa Malaka,Desa Menggala,Desa Pemenang Barat,Desa Pemenang Timur"}, "Kota Mataram": {"Ampenan": "Kelurahan Ampenan Selatan,Kelurahan Ampenan Tengah,Kelurahan Ampenan Utara,Kelurahan Banjar,Kelurahan Bintaro,Kelurahan Dayan Peken,Kelurahan Kebun Sari,Kelurahan Pajarakan Karya,Kelurahan Pejeruk,Kelurahan Taman Sari", "Mataram": "Kelurahan Mataram Timur,Kelurahan Pagesangan,Kelurahan Pagesangan Barat,Kelurahan Pagesangan Timur,Kelurahan Pagutan,Kelurahan Pagutan Barat,Kelurahan Pagutan Timur,Kelurahan Pejanggik,Kelurahan Punia", "Cakranegara": "Kelurahan Cakranegara Barat,Kelurahan Cakranegara Selatan,Kelurahan Cakranegara Selatan Baru,Kelurahan Cakranegara Timur,Kelurahan Cakranegara Utara,Kelurahan Cilinaya,Kelurahan Karang Taliwang,Kelurahan Mayura,Kelurahan Sapta Marga,Kelurahan Sayang-Sayang", "Sekarbela": "Kelurahan Jempong Baru,Kelurahan Karang Pule,Kelurahan Kekalik Jaya,Kelurahan Tanjung Karang,Kelurahan Tanjung Karang Permai", "Selaprang": "Kelurahan Dasan Agung,Kelurahan Dasan Agung Baru,Kelurahan Gomong,Kelurahan Karang Baru,Kelurahan Mataram Barat,Kelurahan Monjok,Kelurahan Monjok Barat,Kelurahan Monjok Timur,Kelurahan Rembiga", "Sandubaya": "Kelurahan Abian Tubuh Baru,Kelurahan Babakan,Kelurahan Bertais,Kelurahan Dasan Cermen,Kelurahan Mandalika,Kelurahan Selagalas,Kelurahan Turida"}, "Kota Bima": {"Rasanae Barat": "Kelurahan Dara,Kelurahan Nae,Kelurahan Pane,Kelurahan Paruga,Kelurahan Sarae,Kelurahan Tanjung", "Rasanae Timur": "Kelurahan Dodu,Kelurahan Kodo,Kelurahan Kumbe,Kelurahan Lampe,Kelurahan Lelamase,Kelurahan Nungga,Kelurahan Oi Fo'O,Kelurahan Oimbo", "Asakota": "Kelurahan Jatibaru,Kelurahan Jatibaru Timur,Kelurahan Jatiwangi,Kelurahan Kolo,Kelurahan Melayu,Kelurahan Ule", "Raba": "Kelurahan Kendo,Kelurahan Nitu,Kelurahan Ntobo,Kelurahan Penanae,Kelurahan Penaraga,Kelurahan Rabadompu Barat,Kelurahan Rabadompu Timur,Kelurahan Rabangodu Selatan,Kelurahan Rabangodu Utara,Kelurahan Rite,Kelurahan Rontu", "Mpunda": "Kelurahan Lewirato,Kelurahan Mande,Kelurahan Manggemaci,Kelurahan Matakando,Kelurahan Monggonao,Kelurahan Panggi,Kelurahan Penatoi,Kelurahan Sadia,Kelurahan Sambinae,Kelurahan Santi"}};

const ntbData = {};
for (const kab in rawNTB) {
  ntbData[kab] = {};
  for (const kec in rawNTB[kab]) {
    ntbData[kab][kec] = rawNTB[kab][kec].split(',').sort();
  }
}

function initWilayah() {
  const k = document.getElementById('f-kabupaten');
  if (!k) return;
  k.innerHTML = '<option value="">-- Pilih Kota/Kabupaten --</option>';
  Object.keys(ntbData).sort().forEach(kab => k.add(new Option(kab, kab)));
}

function handleKabupatenChange() {
  const k = document.getElementById('f-kabupaten').value;
  const c = document.getElementById('f-kecamatan');
  const d = document.getElementById('f-desa');
  c.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
  d.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
  d.disabled = true;
  if (k && ntbData[k]) {
    c.disabled = false;
    Object.keys(ntbData[k]).sort().forEach(kec => c.add(new Option(kec, kec)));
  } else {
    c.disabled = true;
  }
}

function handleKecamatanChange() {
  const k = document.getElementById('f-kabupaten').value;
  const c = document.getElementById('f-kecamatan').value;
  const d = document.getElementById('f-desa');
  d.innerHTML = '<option value="">-- Pilih Desa/Kelurahan --</option>';
  if (k && c && ntbData[k][c]) {
    d.disabled = false;
    ntbData[k][c].forEach(desa => d.add(new Option(desa, desa)));
    d.add(new Option('Lainnya...', 'Lainnya'));
  } else {
    d.disabled = true;
  }
}

const KODE_KANTAH_MAP = {
  "Lombok Barat": "LOBAR", "Lombok Timur": "LOTIM", "Lombok Tengah": "LOTENG",
  "Kota Mataram": "MTR", "Lombok Utara": "KLU", "Kantor Wilayah": "KANWIL",
  "Sumbawa Barat": "KSB", "Sumbawa": "SMBW", "Dompu": "DMPU",
  "Bima": "KABI", "Kota Bima": "KOBI"
};

// ══════════════════════════════════════════════════════════
// 2. OTENTIKASI & PROFIL
// ══════════════════════════════════════════════════════════
function checkLogin() {
  const isLog = localStorage.getItem('sipentas-logged-in') === 'true';
  document.getElementById('login-container').style.display = isLog ? 'none' : 'flex';
  document.getElementById('app-container').style.display = isLog ? 'flex' : 'none';
  if (isLog) {
    const pName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';
    document.getElementById('topbar-user-name').textContent = pName;
    document.getElementById('topbar-avatar-initials').textContent = pName.substring(0, 2).toUpperCase();
    // Load stored avatar
    const savedAvatar = localStorage.getItem('sipentas-avatar');
    if (savedAvatar) {
      const topbarImg = document.getElementById('topbar-avatar-img');
      const topbarInitials = document.getElementById('topbar-avatar-initials');
      if (topbarImg) { topbarImg.src = savedAvatar; topbarImg.style.display = 'block'; }
      if (topbarInitials) topbarInitials.style.display = 'none';
    }
    // Restore profile fields
    const pNama = document.getElementById('p-nama');
    const pNip = document.getElementById('p-nip');
    if (pNama) pNama.value = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById('l-username').value;
  const pass = document.getElementById('l-password').value;
  
  if (user === 'admin' && pass === 'admin123') {
    localStorage.setItem('sipentas-logged-in', 'true');
    document.getElementById('l-password').value = '';
    checkLogin();
    loadCasesFromDB();
    navigateTo('dashboard');
    showToast('Login berhasil! Selamat bekerja.', 'success'); 
  } else {
    showToast('NIP atau Sandi salah.', 'error');
  }
}
function logout() {
  if (confirm('Keluar dari sistem?')) {
    localStorage.removeItem('sipentas-logged-in');
    checkLogin();
  }
}

function togglePassword() {
  const i = document.getElementById('l-password');
  i.type = i.type === 'password' ? 'text' : 'password';
}

function toggleUserMenu(e) {
  e.stopPropagation();
  document.getElementById('user-dropdown').classList.toggle('show');
}

window.addEventListener('click', function (e) {
  // Hanya fokus untuk menutup dropdown profil/Zen Ring saat user klik sembarang tempat
  const d = document.getElementById('user-dropdown');
  if (d && d.classList.contains('show')) {
    d.classList.remove('show');
  }
});

// ══════════════════════════════════════════════════════════
// 3. UTILITIES & FORMATTING
// ══════════════════════════════════════════════════════════
const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}
function formatNumber(num) { return num ? new Intl.NumberFormat('id-ID').format(num) : '0'; }
function fmtDate(str) { if (!str) return '-'; const d = new Date(str); return isNaN(d) ? str : `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; }
function fmtTime(str) { const d = new Date(str); return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; }
function readFileAsBase64(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = e => reject(e); reader.readAsDataURL(file); }); }
// ==========================================================
// ADVANCED MODAL & Z-INDEX MANAGER
// ==========================================================
let activeModals = []; // Tumpukan memori untuk melacak modal yang aktif

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  // 1. Z-Index Dinamis: Modal baru selalu berada di atas modal sebelumnya
  const baseZ = 200;
  modal.style.zIndex = baseZ + (activeModals.length * 10);

  // 2. Cegah "Double Darkening" & "Double Blur" jika ada 2 modal bertumpuk
  if (activeModals.length > 0) {
    modal.style.background = 'rgba(5,5,5,0.15)'; // Gelap tipis saja untuk modal kedua
    modal.style.backdropFilter = 'none';
    modal.style.webkitBackdropFilter = 'none';
  } else {
    modal.style.background = ''; // Gunakan default CSS
    modal.style.backdropFilter = '';
    modal.style.webkitBackdropFilter = '';
  }

  modal.classList.add('open');
  if (!activeModals.includes(id)) activeModals.push(id);

  // 3. Kunci scroll layar belakang (UX Hack)
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove('open');
  
  // Hapus dari memori tumpukan
  activeModals = activeModals.filter(m => m !== id);

  // Bersihkan cache iFrame PDF
  if (id === 'modal-pdf-viewer') {
    setTimeout(() => { 
      const iframe = document.getElementById('pdf-iframe');
      if(iframe) iframe.src = ''; 
    }, 300);
  }

  // 4. Lepas kunci scroll HANYA jika semua modal sudah tertutup
  if (activeModals.length === 0) {
    document.body.style.overflow = '';
  }
}
function openPdfViewer(fileName) {
  const iframe = document.getElementById('pdf-iframe');
  const title = document.getElementById('pdf-viewer-title');
  if (!iframe) return;
  if (fileName) {
    iframe.src = `${API_URL}/uploads/${encodeURIComponent(fileName)}`;
    if (title) title.textContent = fileName;
    document.getElementById('pdf-viewer').src = urlPDF;
  } else {
    iframe.src = '';
    if (title) title.textContent = 'Pratinjau Dokumen';
    
  }
  openModal('modal-pdf-viewer');
}

// 5. UX Premium: Tutup modal menggunakan tombol ESC di Keyboard
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && activeModals.length > 0) {
    // Ambil modal yang letaknya paling atas
    const topModal = activeModals[activeModals.length - 1];
    closeModal(topModal);
  }
});

// 6. UX Premium: Klik di luar area modal untuk menutup (Hanya menutup yang teratas)
document.querySelectorAll('.modal-overlay').forEach(ov => {
  ov.onclick = function (e) {
    if (e.target === this) {
      const topModal = activeModals[activeModals.length - 1];
      // Pastikan klik di luar hanya menutup modal yang sedang paling atas
      if (topModal === this.id) closeModal(this.id);
    }
  };
});

function formatRibuan(input) {
  const value = input.value.replace(/[^0-9]/g, '');
  input.value = value !== '' ? new Intl.NumberFormat('id-ID').format(value) : '';
}

function showToast(msg, type = '') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  t.innerHTML = `<span class="toast-icon">${icon}</span> <span>${msg}</span> <div class="toast-progress"></div>`;
  c.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut 0.4s cubic-bezier(0.4,0,0.2,1) forwards';
    setTimeout(() => t.remove(), 400);
  }, 3000);
}
// ==========================================================
// THE ZEN RING NOTIFICATION LOGIC
// ==========================================================
function clearZenNotifs(e) {
  e.stopPropagation();
  
  // 1. Matikan cincin menyala di Avatar
  const avatar = document.getElementById('topbar-avatar-container');
  if (avatar) avatar.classList.remove('has-notif');
  
  // 2. Hilangkan tanda 'unread' (garis samping) di daftar notifikasi
  document.querySelectorAll('.zen-notif-item.unread').forEach(item => {
    item.classList.remove('unread');
    item.style.borderLeft = 'none';
  });
  
  showToast('Semua notifikasi telah ditandai dibaca.', 'info');
}
// ==========================================================
// THE SHY BUTTON LOGIC
// ==========================================================
function deleteZenNotif(e, btnElement) {
  // 1. Mencegah klik "bocor" ke event onclick parent (navigateTo)
  e.stopPropagation(); 
  
  // 2. Cari elemen bungkus notifikasinya
  const item = btnElement.closest('.zen-notif-item');
  
  // 3. Tambahkan class animasi menciut & menghilang
  item.classList.add('removing');
  
  // 4. Tunggu animasi selesai (300ms) baru benar-benar buang dari HTML
  setTimeout(() => {
    item.remove();
    checkEmptyNotif(); // Periksa apakah masih ada notif lain
  }, 300); 
}

function checkEmptyNotif() {
  const list = document.getElementById('zen-notif-list');
  const items = list.querySelectorAll('.zen-notif-item');
  const emptyState = document.getElementById('zen-notif-empty');
  
  // Jika sudah tidak ada notifikasi lagi
  if (items.length === 0) {
    emptyState.style.display = 'flex'; // Munculkan status "Waktunya ngopi"
    
    // Matikan juga cincin neon yang berdenyut di Avatar
    const avatar = document.getElementById('topbar-avatar-container');
    if (avatar) avatar.classList.remove('has-notif');
  }
}
// ══════════════════════════════════════════════════════════
// 4. DATABASE & API LOGIC (NODE.JS + MYSQL)
// ══════════════════════════════════════════════════════════
let cases = [];
let calendarEvents = JSON.parse(localStorage.getItem('sipentas-events') || '[]');
const TAHAPAN_LABELS = [
  'Telaah Staff', 
  'Penelitian Lapang', 
  'Gelar Kasus Akhir', 
  'Penerbitan Surat Keputusan', 
  'Laporan Penyelesaian'
];

const STATUS_MAP = {
  0: { label: 'Usulan Baru', cls: 'status-0' }, // Belum masuk tahap 1
  1: { label: 'Telaah Staff', cls: 'status-1' },
  2: { label: 'Penelitian Lapang', cls: 'status-2' },
  3: { label: 'Gelar Kasus Akhir', cls: 'status-3' },
  4: { label: 'Penerbitan SK', cls: 'status-4' },
  5: { label: 'Selesai', cls: 'status-5' }
};

async function loadCasesFromDB() {
  try {
    // 1. TAMPILKAN SKELETON SEBELUM FETCH DIMULAI
    if (currentPage === 'dashboard') {
      showTableSkeleton('recent-cases-tbody', 6); // Tampilkan 6 baris rangka di dashboard
    } else if (currentPage.startsWith('list')) {
      showTableSkeleton('tbody-' + currentPage.split('-')[1], 8); // Tampilkan 8 baris rangka di halaman list
    }

    // 2. MULAI MENGAMBIL DATA DARI SERVER
    const response = await fetch(`${API_URL}/kasus`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    
    cases = data.map(c => ({
      ...c,
      tahapan: typeof c.tahapan === 'string' ? JSON.parse(c.tahapan) : c.tahapan,
      auditTrail: typeof c.auditTrail === 'string' ? JSON.parse(c.auditTrail) : c.auditTrail,
      dokumenUsulan: typeof c.dokumenUsulan === 'string' && c.dokumenUsulan.startsWith('{') ? JSON.parse(c.dokumenUsulan) : c.dokumenUsulan,
      dokumenbt: typeof c.dokumenbt === 'string' && c.dokumenbt.startsWith('{') ? JSON.parse(c.dokumenbt) : c.dokumenbt
    }));
    
    // 3. DATA TIBA, SKELETON OTOMATIS TERTIPMA OLEH DATA ASLI
    updateStats();
    if (currentPage === 'dashboard') renderDashboard();
    if (currentPage.startsWith('list')) renderTable(currentPage.split('-')[1]);
    
  } catch (error) {
    console.error('Gagal memuat data dari server:', error);
    showToast('Gagal terhubung ke Database Server', 'error');
    // Jika error, bersihkan skeleton agar tidak berkedip selamanya
    const currentTbody = currentPage === 'dashboard' ? document.getElementById('recent-cases-tbody') : document.getElementById('tbody-' + currentPage.split('-')[1]);
    if (currentTbody) currentTbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px;">Gagal memuat data.</td></tr>';
  }
}

// ══════════════════════════════════════════════════════════
// 5. NAVIGASI, DASHBOARD & CHARTS
// ══════════════════════════════════════════════════════════
let currentPage = 'dashboard';
let prevPage = 'dashboard';

function navigateTo(page, param) {
  prevPage = currentPage;
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    if (n.getAttribute('onclick')?.includes(`'${page}'`)) n.classList.add('active');
  });
  const backBtn = document.getElementById('universal-back');
  const crumbText = document.getElementById('page-crumb-text');
  if (backBtn && crumbText) {
    if (page === 'dashboard') {
      backBtn.classList.remove('show');
      crumbText.textContent = 'Dashboard';
    } else {
      backBtn.classList.add('show');
      if (page === 'list-semua') crumbText.textContent = 'Semua Permohonan';
      else if (page.includes('cacat')) crumbText.textContent = 'Cacat Administrasi';
      else if (page.includes('putusan')) crumbText.textContent = 'Putusan Pengadilan';
      else if (page === 'tambah') crumbText.textContent = 'Tambah Permohonan';
      else if (page === 'pengaturan') crumbText.textContent = 'Pengaturan Akun';
      else if (page === 'detail') crumbText.textContent = 'Detail Berkas';
      else crumbText.textContent = page.charAt(0).toUpperCase() + page.slice(1);
    }
  }
  if (page === 'list-cacat' || page === 'list-putusan' || page === 'list-semua') renderTable(page.split('-')[1]);  
  if (page === 'dashboard') { updateStats(); renderDashboard(); }
  if (page === 'tambah') resetForm(param);
  // Di dalam fungsi navigateTo(page, param), pada blok if (backBtn && crumbText):
// ... kode lama ...
else if (page === 'arsip') crumbText.textContent = 'Arsip Digital';
else if (page === 'dossier') crumbText.textContent = 'Dossier Arsip';
// ... kode lama ...

// Tambahkan trigger render:
if (page === 'arsip') renderArsip();
}

function goBackUniversal() {
  if (prevPage === 'dashboard') {
    navigateTo('dashboard');
  } else {
    navigateTo(prevPage);
  }
}

function updateStats() {
  const jumlahCacat = cases.filter(c => c.jenis === 'cacat').length;
  const jumlahPutusan = cases.filter(c => c.jenis === 'putusan').length;
  const jumlahSelesai = cases.filter(c => c.isClosed).length;
  const statTotal = document.getElementById('stat-total'); if (statTotal) statTotal.textContent = cases.length;
  const statCacat = document.getElementById('stat-cacat'); if (statCacat) statCacat.textContent = jumlahCacat;
  const statPutusan = document.getElementById('stat-putusan'); if (statPutusan) statPutusan.textContent = jumlahPutusan;
  const statSelesai = document.getElementById('stat-selesai'); if (statSelesai) statSelesai.textContent = jumlahSelesai;
  const badgeCacat = document.getElementById('badge-cacat'); if (badgeCacat) badgeCacat.textContent = jumlahCacat;
  const badgePutusan = document.getElementById('badge-putusan'); if (badgePutusan) badgePutusan.textContent = jumlahPutusan;
  renderCharts();
}

// ==========================================================
// VARIABEL GLOBAL WAJIB (JANGAN DIHAPUS)
// ==========================================================
let chartJenisInstance = null;
let ntbMap = null;
let mapMarkers = [];

// Variabel Global Baru untuk Peta Deep-Dive
let isMapDeepDive = false;
let geojsonLayer = null;

function renderCharts() {
  const kantahCounts = {};
  const jenisCounts = { cacat: 0, putusan: 0 };
  cases.forEach(c => {
    kantahCounts[c.kantah] = (kantahCounts[c.kantah] || 0) + 1;
    if (c.jenis === 'cacat') jenisCounts.cacat++;
    if (c.jenis === 'putusan') jenisCounts.putusan++;
  });

  // ==========================================================
  // WEBGIS MAP (SMART DEEP-DIVE SYSTEM)
  // ==========================================================
  const mapContainer = document.getElementById('mapNTB');
  if (mapContainer) {
    const KANTAH_COORDS = {
      "Kantor Wilayah": [-8.5833, 116.1167], "Kota Mataram": [-8.5933, 116.1067],
      "Lombok Barat": [-8.6833, 116.1167], "Lombok Tengah": [-8.7167, 116.2833],
      "Lombok Timur": [-8.6500, 116.5333], "Lombok Utara": [-8.3500, 116.1500],
      "Sumbawa Barat": [-8.7167, 116.8333], "Sumbawa": [-8.5000, 117.4167],
      "Dompu": [-8.5333, 118.4667], "Bima": [-8.6000, 118.7333], "Kota Bima": [-8.4500, 118.7333]
    };
    
    // Inisialisasi Peta jika belum ada
    if (!ntbMap) {
      ntbMap = L.map('mapNTB', { zoomControl: false, attributionControl: false }).setView([-8.6, 117.3], 7.5);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 12, minZoom: 6 }).addTo(ntbMap);
    }

    // 🔥 OBAT MUJARAB: Paksa Peta Memuat Ulang Ukurannya (Invalidate Size)
    setTimeout(() => {
      if (ntbMap) ntbMap.invalidateSize();
    }, 250);
    
    // Hanya tampilkan titik merah jika tidak sedang mode Deep-Dive (Zoom In)
    if (!isMapDeepDive) {
      mapMarkers.forEach(m => ntbMap.removeLayer(m));
      mapMarkers = [];
      
      for (const [kantah, count] of Object.entries(kantahCounts)) {
        if (KANTAH_COORDS[kantah] && count > 0) {
          const pulseIcon = L.divIcon({ className: 'custom-pulse-icon', html: `<div class="pulse-marker"></div>`, iconSize: [18, 18], iconAnchor: [9, 9] });
          const marker = L.marker(KANTAH_COORDS[kantah], { icon: pulseIcon });
          
          marker.bindTooltip(`
            <div class="map-popup-title">${kantah}</div>
            <div class="map-popup-text">Terdapat <span style="font-weight:800; color:#EF4444;">${count}</span> sengketa aktif</div>
            <div style="font-size:10px; color:var(--text-muted); margin-top:6px; font-style:italic;">👉 Klik titik untuk melihat batas wilayah</div>
          `, { direction: 'top', className: 'custom-map-tooltip', offset: [0, -10] });
          
          // Event Deep-Dive saat titik diklik
          marker.on('click', () => triggerMapDeepDive(kantah, KANTAH_COORDS[kantah]));
          
          marker.addTo(ntbMap);
          mapMarkers.push(marker);
        }
      }
    }
  }

  // ==========================================================
  // DOUGHNUT CHART JENIS SENGKETA
  // ==========================================================
  Chart.defaults.font.family = "'DM Sans', sans-serif";
  const ctxJenis = document.getElementById('typeChart');
  if (ctxJenis) {
    if (chartJenisInstance) chartJenisInstance.destroy();
    chartJenisInstance = new Chart(ctxJenis, {
      type: 'doughnut',
      data: {
        labels: ['Cacat Administrasi', 'Putusan Pengadilan'],
        datasets: [{ data: [jenisCounts.cacat, jenisCounts.putusan], backgroundColor: ['#00b0be', '#eddca5'], borderWidth: 3, borderColor: '#FFFFFF', hoverOffset: 8 }]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 24, font: { size: 12, weight: '600' } } }, tooltip: { backgroundColor: '#0F172A', padding: 12, cornerRadius: 8 } } }
    });
  }
}

// ══════════════════════════════════════════════════════════
// FUNGSI KENDALI DEEP-DIVE (PROGRESSIVE DISCLOSURE)
// ══════════════════════════════════════════════════════════
function triggerMapDeepDive(kantahName, coords) {
  isMapDeepDive = true;
  
  // 1. Sembunyikan semua titik merah Kabupaten agar layar bersih
  mapMarkers.forEach(m => ntbMap.removeLayer(m));
  
  // 2. Terbang / Zoom in mulus ke lokasi spesifik
  ntbMap.flyTo(coords, 10.5, { duration: 1.2 });
  
  // 3. Munculkan tombol "Kembali" melayang
  const btnBack = document.getElementById('btn-map-back');
  if (btnBack) btnBack.style.display = 'flex';
  
  // 4. Render Garis Poligon GeoJSON
  renderGeoJsonBoundary(kantahName, coords);
}

function resetMapView() {
  isMapDeepDive = false;
  
  // 1. Hapus Poligon Desa
  if (geojsonLayer) ntbMap.removeLayer(geojsonLayer);
  
  // 2. Sembunyikan tombol Kembali
  const btnBack = document.getElementById('btn-map-back');
  if (btnBack) btnBack.style.display = 'none';
  
  // 3. Terbang keluar / Zoom out kembali ke view awal NTB
  ntbMap.flyTo([-8.6, 117.3], 7.5, { duration: 1.2 });
  
  // 4. Munculkan ulang titik-titik merah setelah animasi terbang selesai
  setTimeout(() => {
    renderCharts();
  }, 1200);
}

// Gantikan seluruh fungsi renderGeoJsonBoundary yang lama dengan yang baru ini:

async function renderGeoJsonBoundary(kantahName, coords) {
  if (geojsonLayer) ntbMap.removeLayer(geojsonLayer);
  
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  const strokeColor = isDark ? '#CCFF00' : '#10B981';
  const fillColor = isDark ? '#CCFF00' : '#34D399';

  // Tampilkan notifikasi loading agar user tahu sistem sedang menarik data spasial
  showToast(`Memuat data geospasial ${kantahName}...`, 'info');

  try {
    // Memanggil API PetaNusa (pastikan nama kabupaten di-encode agar aman di URL)
    const response = await fetch(`https://api.petanusa.web.id/geojson?kabupaten=${encodeURIComponent(kantahName)}`);
    
    if (!response.ok) throw new Error('API PetaNusa gagal merespons');
    
    const geojsonData = await response.json();

    // Render Poligon GeoJSON Asli
    geojsonLayer = L.geoJSON(geojsonData, {
      style: {
        color: strokeColor,
        fillColor: fillColor,
        fillOpacity: 0.15,
        weight: 2,
        dashArray: '5, 5' // Tetap pertahankan garis putus-putus yang elegan
      }
    }).addTo(ntbMap);

    // UX MAGIC: Otomatis paskan zoom dan posisi kamera dengan ukuran asli poligon kabupaten
    ntbMap.flyToBounds(geojsonLayer.getBounds(), {
      padding: [30, 30], // Beri ruang kosong (margin) di pinggir peta
      duration: 1.2      // Samakan dengan durasi animasi sebelumnya
    });

    // Pasang Tooltip ke area poligon asli
    geojsonLayer.bindTooltip(`
      <div style="font-family:'DM Sans', sans-serif;">
        <strong>Wilayah Administrasi: ${kantahName}</strong><br>
        <span style="font-size:11px; color:var(--text-muted);">Sumber Data: Badan Informasi Geospasial (BIG)</span>
      </div>
    `, { direction: 'center', sticky: true, className: 'custom-map-tooltip' });

    showToast(`Peta batas wilayah ${kantahName} berhasil dimuat.`, 'success');

  } catch (error) {
    console.warn('Gagal memuat GeoJSON asli, mengalihkan ke mode simulasi:', error);
    showToast(`Koneksi ke server Geospasial terputus. Menggunakan Peta Simulasi.`, 'error');
    
    // FALLBACK: Jika API mati/tidak ada internet, gunakan kembali lingkaran radius
    geojsonLayer = L.circle(coords, {
      color: strokeColor,
      fillColor: fillColor,
      fillOpacity: 0.15,
      weight: 2,
      dashArray: '5, 5'
    }).setRadius(15000).addTo(ntbMap);

    geojsonLayer.bindTooltip(`
      <div style="font-family:'DM Sans', sans-serif;">
        <strong>Area: ${kantahName}</strong><br>
        <span style="font-size:11px; color:var(--text-muted);">Simulasi batas wilayah (Mode Offline).</span>
      </div>
    `, { direction: 'center', className: 'custom-map-tooltip' });
  }
}


function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Selamat Datang';
  if (hour >= 5 && hour < 12) greeting = 'Selamat Pagi';
  else if (hour >= 12 && hour < 15) greeting = 'Selamat Siang';
  else if (hour >= 15 && hour < 18) greeting = 'Selamat Sore';
  else greeting = 'Selamat Malam';
  const adminName = localStorage.getItem('sipentas-admin-name') || 'Admin';
  const firstName = adminName.split(' ')[0];
  const greetingEl = document.getElementById('dynamic-greeting');
  if (greetingEl) greetingEl.innerHTML = `${greeting}<em>,</em> ${firstName}`;
}

function renderDashboard() {
  updateGreeting();
  const tbody = document.getElementById('recent-cases-tbody');
  const searchInput = document.getElementById('dashboard-search');
  const keyword = searchInput ? searchInput.value.toLowerCase() : '';

  // 1. Filter data berdasarkan keyword (Nomor Berkas, Pemohon, atau Kantah)
  let displayCases = [...cases];
  if (keyword) {
    displayCases = displayCases.filter(c => 
      c.nomorberkas.toLowerCase().includes(keyword) || 
      c.pemohon.toLowerCase().includes(keyword) ||
      c.kantah.toLowerCase().includes(keyword)
    );
  } else {
    // 2. Jika tidak ada pencarian, urutkan berdasarkan yang terbaru & ambil 8 saja
    displayCases = displayCases.sort((a, b) => new Date(b.tglUsulan) - new Date(a.tglUsulan)).slice(0, 8);
  }

  // 3. Tampilkan Empty State jika hasil pencarian kosong
  if (!displayCases.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state" style="padding: 32px 20px;">
      <div class="empty-state-icon" style="width: 56px; height: 56px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
      <div class="empty-state-title" style="font-size: 16px;">Berkas Tidak Ditemukan</div>
      <div class="empty-state-desc" style="font-size: 13px;">Pencarian untuk "<strong>${keyword}</strong>" tidak membuahkan hasil.</div>
    </div></td></tr>`;
    return;
  }
  
  // 4. Render baris tabel jika data ditemukan
  tbody.innerHTML = displayCases.map(c => `<tr onclick="viewDetail('${c.id}')"><td><code>${c.nomorberkas}</code></td><td>${c.pemohon}</td><td><span class="badge ${c.jenis === 'cacat' ? 'badge-admin' : 'badge-court'}"><span class="badge-dot" style="background:${c.jenis === 'cacat' ? 'var(--gray-dark)' : 'var(--white)'}"></span> ${c.jenis === 'cacat' ? 'Cacat Adm.' : 'Putusan PN'}</span></td><td>${c.kantah}</td><td><span class="status-badge ${c.isClosed ? '' : STATUS_MAP[c.currentStep]?.cls || ''}">${c.isClosed ? '🔒 Ditutup' : STATUS_MAP[c.currentStep]?.label || 'Usulan Baru'}</span></td></tr>`).join('');
}

function renderTable(type) {
  const tbody = document.getElementById(`tbody-${type}`);
  if (!tbody) return;

  let displayCases = [...cases];

  // 1. Filter Berdasarkan Halaman (Cacat / Putusan / Semua)
  if (type !== 'semua') {
    displayCases = displayCases.filter(c => c.jenis === type);
  } else {
    // Khusus halaman "Semua", cek dropdown filter jenisnya
    const jenisFilter = document.getElementById('filter-jenis-semua')?.value;
    if (jenisFilter) displayCases = displayCases.filter(c => c.jenis === jenisFilter);
  }

  // 2. Filter Berdasarkan Status (Berlaku untuk semua halaman)
  const statusFilter = document.getElementById(`filter-status-${type}`)?.value;
  if (statusFilter) {
    if (statusFilter === '5') {
      displayCases = displayCases.filter(c => c.isClosed);
    } else if (statusFilter === 'pending') {
      displayCases = displayCases.filter(c => !c.isClosed && c.statusState === 'pending');
    } else if (statusFilter === 'rejected') {
      displayCases = displayCases.filter(c => c.statusState === 'rejected');
    } else {
      displayCases = displayCases.filter(c => !c.isClosed && String(c.currentStep) === statusFilter);
    }
  }

  // 3. Render Empty State jika kosong
  if (!displayCases.length) {
    const colCount = type === 'semua' ? 8 : 9;
    tbody.innerHTML = `<tr><td colspan="${colCount}"><div class="empty-state" style="padding: 40px 20px;">
      <div class="empty-state-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg></div>
      <div class="empty-state-title">Tidak Ada Data</div>
      <div class="empty-state-desc">Belum ada permohonan yang sesuai filter yang dipilih.</div>
    </div></td></tr>`;
    return;
  }

  // 4. Render Baris Tabel (Suntikkan Lencana 'Jenis' khusus di halaman Semua)
  tbody.innerHTML = displayCases.map(c => `
    <tr onclick="viewDetail('${c.id}')">
      <td><code>${c.nomorberkas}</code></td>
      ${type === 'semua' ? `<td><span class="badge ${c.jenis === 'cacat' ? 'badge-admin' : 'badge-court'}"><span class="badge-dot" style="background:${c.jenis === 'cacat' ? 'var(--gray-dark)' : 'var(--white)'}"></span> ${c.jenis === 'cacat' ? 'Cacat Adm.' : 'Putusan PN'}</span></td>` : ''}
      <td>${c.kantah}</td>
      <td>${c.pemohon}</td>
      <td>${c.nosurat || '-'}</td>
      <td>${c.desa || '-'}</td>
      <td>${fmtDate(c.tglUsulan)}</td>
      <td><span class="status-badge ${c.isClosed ? '' : STATUS_MAP[c.currentStep]?.cls}">${c.isClosed ? '🔒 Ditutup' : STATUS_MAP[c.currentStep]?.label}</span></td>
    </tr>
  `).join('');
}
// ==========================================================
// THE DIGITAL VAULT & DOSSIER LOGIC
// ==========================================================

function renderArsip() {
  const tbody = document.getElementById('tbody-arsip');
  const keyword = document.getElementById('search-arsip')?.value.toLowerCase() || '';

  // Filter HANYA data yang sudah ditutup (isClosed === true)
  let archivedCases = cases.filter(c => c.isClosed);

  // Fitur Search
  if (keyword) {
    archivedCases = archivedCases.filter(c => 
      c.nomorberkas.toLowerCase().includes(keyword) || 
      c.pemohon.toLowerCase().includes(keyword)
    );
  }

  // Urutkan berdasarkan tanggal terakhir diupdate (audit trail terakhir)
  archivedCases.sort((a, b) => {
    const dateA = a.auditTrail && a.auditTrail.length > 0 ? new Date(a.auditTrail[a.auditTrail.length - 1].date) : new Date(a.tglUsulan);
    const dateB = b.auditTrail && b.auditTrail.length > 0 ? new Date(b.auditTrail[b.auditTrail.length - 1].date) : new Date(b.tglUsulan);
    return dateB - dateA;
  });

  if (!archivedCases.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state" style="padding: 40px 20px;">
      <div class="empty-state-icon" style="background:var(--surface);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="8" width="18" height="14" rx="2" ry="2"></rect><path d="M4 8v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path></svg></div>
      <div class="empty-state-title">Brankas Kosong</div>
      <div class="empty-state-desc">Belum ada berkas sengketa yang diselesaikan atau diarsipkan.</div>
    </div></td></tr>`;
    return;
  }

  tbody.innerHTML = archivedCases.map(c => {
    // Ambil tanggal dari langkah terakhir yang diselesaikan
    let tglSelesai = '-';
    if (c.tahapan && c.tahapan.length > 0) {
      const lastStep = [...c.tahapan].reverse().find(t => t.date);
      if (lastStep) tglSelesai = fmtDate(lastStep.date);
    } else if (c.auditTrail && c.auditTrail.length > 0) {
      tglSelesai = fmtDate(c.auditTrail[c.auditTrail.length - 1].date);
    }

    // Tentukan label status (Ditolak vs Selesai Normal)
    let statusLabel = c.statusState === 'rejected' 
      ? '<span style="color:#EF4444; font-weight:600;"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align:middle; margin-right:4px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>Ditolak</span>' 
      : '<span style="color:#10B981; font-weight:600;"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="vertical-align:middle; margin-right:4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>Selesai</span>';

    return `
      <tr onclick="openDossier('${c.id}')">
        <td><code style="background:none; border:none; color:var(--text-sub);">${c.nomorberkas}</code></td>
        <td>${c.jenis === 'cacat' ? 'Cacat Adm.' : 'Putusan PN'}</td>
        <td>${c.kantah}</td>
        <td>${c.pemohon}</td>
        <td>${tglSelesai}</td>
        <td>${statusLabel}</td>
      </tr>
    `;
  }).join('');
}

function openDossier(id) {
  const c = cases.find(x => x.id === id);
  if (!c) return;

  // 1. Suntik Data Ringkasan
  document.getElementById('ds-nomor').textContent = c.nomorberkas;
  document.getElementById('ds-pemohon').textContent = c.pemohon;
  document.getElementById('ds-objek').textContent = `Desa ${c.desa || '-'}, Kec. ${c.kecamatan || '-'} (${c.jenissert} No. ${c.nosert || '-'})`;
  
  // Hitung Durasi (dari tglUsulan ke audit terakhir)
  let durasiText = '-';
  if (c.tglUsulan && c.auditTrail && c.auditTrail.length > 0) {
    const start = new Date(c.tglUsulan);
    const end = new Date(c.auditTrail[c.auditTrail.length - 1].date);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    durasiText = `${diffDays} Hari Kalender`;
  }
  document.getElementById('ds-durasi').textContent = durasiText;

  // 2. Set Stempel (Ditolak / Selesai)
  const stamp = document.getElementById('dossier-stamp');
  // Reset animasi (trick CSS)
  stamp.style.animation = 'none';
  stamp.offsetHeight; /* trigger reflow */
  stamp.style.animation = null;

  if (c.statusState === 'rejected') {
    stamp.textContent = 'DITOLAK';
    stamp.classList.add('rejected');
  } else {
    stamp.textContent = 'SELESAI';
    stamp.classList.remove('rejected');
  }

  // 3. Suntik Audit Trail (Format Read-Only)
  const auditHTML = c.auditTrail ? c.auditTrail.map(a => `
    <div class="audit-item" style="margin-bottom: 12px;">
      <div class="audit-dot"></div>
      <div class="audit-content">
        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">${fmtDate(a.date)}</div>
        <div class="audit-action">${a.action}</div>
      </div>
    </div>
  `).reverse().join('') : '<div style="font-size:12px; color:var(--text-muted);">Data riwayat tidak tersedia.</div>';
  
  document.getElementById('ds-audit').innerHTML = auditHTML;

  // 4. Set PDF Viewer
  const iframe = document.getElementById('ds-pdf-iframe');
  
  // Cari file PDF terakhir dari tahapan, atau dokumen lain
  let finalPdfName = '';
  if (c.tahapan) {
    // Cari dari belakang (tahap terakhir yang punya file)
    const tahapPunyaFile = [...c.tahapan].reverse().find(t => t.fileName);
    if (tahapPunyaFile) finalPdfName = tahapPunyaFile.fileName;
  }
  
  if (finalPdfName) {
    iframe.src = `${API_URL}/api/uploads/${encodeURIComponent(finalPdfName)}`;
  } else {
    // Jika tidak ada file sama sekali
    iframe.srcdoc = `
      <div style="display:flex; height:100%; align-items:center; justify-content:center; font-family:sans-serif; color:#94A3B8; background:#F8FAFC;">
        <div style="text-align:center;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:48px; height:48px; margin-bottom:16px; stroke-width:1.5;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          <p>Dokumen fisik belum didigitalisasi.</p>
        </div>
      </div>
    `;
  }

  // Set sumber untuk modal PDF penuh (jika tombol Perbesar diklik)
  // Trick: Timpa fungsi openModal khusus untuk dossier ini agar membaca file yang benar
  window._currentDossierFile = finalPdfName;

  navigateTo('dossier');
}

function scrollToRecent() {
  const recentTable = document.querySelector('.dashboard-main');
  if (recentTable) recentTable.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateAndFilterSelesai() {
  navigateTo('list-semua');
  setTimeout(() => {
    const filterStatus = document.getElementById('filter-status-semua');
    if (filterStatus) {
      filterStatus.value = '5';
      renderTable('semua');
      showToast('Menampilkan semua berkas yang telah Selesai / Ditutup', 'success');
    }
  }, 50);
}

// ══════════════════════════════════════════════════════════
// 6. FORM TAMBAH & LOGIKA SUBMIT API
// ══════════════════════════════════════════════════════════
const DUMMY_OPERATORS = ['Budi Santoso', 'Siti Aminah', 'Ahmad Fauzi', 'Rini Sulistyowati', 'Reza Pramana'];
let currentFormTab = 'info';
const formTabs = ['info', 'detail'];

function switchFormTab(tab) {
  formTabs.forEach(t => {
    const el = document.getElementById('form-tab-' + t);
    if (t === tab) { el.style.display = 'block'; el.classList.add('fade-in-tab'); }
    else { el.style.display = 'none'; el.classList.remove('fade-in-tab'); }
  });
  document.querySelectorAll('.tabs .tab').forEach((b, i) => b.classList.toggle('active', formTabs[i] === tab));
  currentFormTab = tab;
  document.getElementById('btn-prev-tab').style.display = tab === 'info' ? 'none' : '';
  document.getElementById('btn-next-tab').style.display = tab === 'detail' ? 'none' : '';
  document.getElementById('btn-submit').style.display = tab === 'detail' ? '' : 'none';
}

function nextFormTab() { if (currentFormTab === 'info') switchFormTab('detail'); }
function prevFormTab() { if (currentFormTab === 'detail') switchFormTab('info'); }

function resetForm(preselect) {
  document.getElementById('form-permohonan').reset();
  if (preselect) document.getElementById('f-jenis').value = preselect;
  switchFormTab('info');
  togglePutsanField();
  document.getElementById('f-jenis').onchange = togglePutsanField;
  initWilayah();
  setTimeout(initSmartDropzones, 50);
  document.getElementById('f-pj').innerHTML = '<option value="">-- Pilih Penanggung Jawab --</option>' + DUMMY_OPERATORS.map(n => `<option value="${n}">${n}</option>`).join('');
}

function togglePutsanField() {
  document.getElementById('f-noputs-group').style.display = document.getElementById('f-jenis').value === 'putusan' ? 'block' : 'none';
}

function generateNomorBerkas(jenis, kantah) {
  const date = new Date();
  const tahun = date.getFullYear();
  const bulan = String(date.getMonth() + 1).padStart(2, '0');
  const kodeJenis = jenis === 'cacat' ? 'CA' : 'PP';
  const kodeKantah = KODE_KANTAH_MAP[kantah] || 'XXX';
  // Hitung nomor urut berdasarkan jumlah berkas yang sudah ada untuk jenis & kantah ini
  const existing = cases.filter(c => c.jenis === jenis && c.kantah === kantah).length;
  const urut = String(existing + 1).padStart(3, '0');
  return `${urut}/${kodeJenis}/${kodeKantah}/${bulan}/${tahun}`;
}

async function submitForm(e) {
  e.preventDefault();
  const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
  const reqInfo = ['f-nosurat', 'f-tglUsulan', 'f-jenis', 'f-kantah', 'f-pemohon', 'f-pj'];
  const reqDetail = ['f-pemeganghak', 'f-kabupaten', 'f-kecamatan', 'f-desa'];
  for (let id of reqInfo) {
    const el = document.getElementById(id);
    if (!el || !el.value) { switchFormTab('info'); showToast('Harap lengkapi bagian Informasi Umum!', 'error'); if (el) el.focus(); return; }
  }
  for (let id of reqDetail) {
    const el = document.getElementById(id);
    if (!el || !el.value) { switchFormTab('detail'); showToast('Harap lengkapi bagian Detail Objek!', 'error'); if (el) el.focus(); return; }
  }

  const j = getVal('f-jenis');
  const k = getVal('f-kantah');
  const autoNo = generateNomorBerkas(j, k);
  const newId = 'c' + Date.now();
  const luasBersih = getVal('f-luas').replace(/\./g, '');

  const formData = new FormData();
  formData.append('id', newId);
  formData.append('nomorberkas', autoNo);
  formData.append('nosurat', getVal('f-nosurat'));
  formData.append('jenis', j);
  formData.append('kantah', k);
  formData.append('tglUsulan', getVal('f-tglUsulan'));
  formData.append('pemohon', getVal('f-pemohon'));
  formData.append('termohon', getVal('f-termohon'));
  formData.append('pj', getVal('f-pj'));
  formData.append('noputs', getVal('f-noputs'));
  formData.append('pemeganghak', getVal('f-pemeganghak'));
  formData.append('jenissert', getVal('f-jenissert'));
  formData.append('nosert', getVal('f-nosert'));
  formData.append('luas', luasBersih);
  formData.append('kabupaten', getVal('f-kabupaten'));
  formData.append('kecamatan', getVal('f-kecamatan'));
  formData.append('desa', getVal('f-desa'));
  formData.append('uraian', getVal('f-uraian'));
  formData.append('currentStep', 0);
  formData.append('isClosed', false);
  formData.append('tahapan', JSON.stringify(Array(6).fill({ date: '', note: '', file: null, fileName: '' })));
  formData.append('auditTrail', JSON.stringify([{ date: new Date().toISOString(), userName: localStorage.getItem('sipentas-admin-name') || 'Admin', userRole: 'System', action: `Usulan baru. No: ${autoNo}` }]));

  const uI = document.getElementById('f-dokumenUsulan');
  const bI = document.getElementById('f-dokumenbt');
  if (uI && uI.files[0]) formData.append('fileUsulan', uI.files[0]);
  if (bI && bI.files[0]) formData.append('fileBt', bI.files[0]);

  try {
    const btnSubmit = document.getElementById('btn-submit');
    if (btnSubmit) btnSubmit.innerText = 'Mengunggah...';
    const response = await fetch(`${API_URL}/kasus`, { method: 'POST', body: formData });
    if (!response.ok) throw new Error('Gagal menyimpan ke database');
    await loadCasesFromDB();
    if (btnSubmit) btnSubmit.innerText = 'Simpan Data Permohonan';
    const modalNo = document.getElementById('success-no');
    if (modalNo) modalNo.textContent = autoNo;
    openModal('modal-success-generate');
  } catch (error) {
    console.error(error);
    const btnSubmit = document.getElementById('btn-submit');
    if (btnSubmit) btnSubmit.innerText = 'Simpan Data Permohonan';
    showToast('Terjadi kesalahan! Pastikan Server menyala.', 'error');
  }
}

function closeSuccessModal() { closeModal('modal-success-generate'); navigateTo('dashboard'); }

// ══════════════════════════════════════════════════════════
// KALENDER KOMPAK DASHBOARD & LOGIKA AGENDA
// ══════════════════════════════════════════════════════════
let calCurrentDate = new Date();
let calMonth = calCurrentDate.getMonth();
let calYear = calCurrentDate.getFullYear();
let agendaEvents = JSON.parse(localStorage.getItem('sipentas-agenda') || '[]');

function changeCalMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  else if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCompactCalendar();
}

// ══════════════════════════════════════════════════════════
// LOGIKA HORIZONTAL TIMELINE CALENDAR
// ══════════════════════════════════════════════════════════
function renderCompactCalendar() {
  const track = document.getElementById('timeline-track');
  const monthLabel = document.getElementById('timeline-month-text');
  const yearLabel = document.getElementById('timeline-year-text');
  
  if (!track) return;

  // Update Teks Header
  if (monthLabel && yearLabel) { 
    monthLabel.textContent = MONTHS[calMonth]; 
    yearLabel.textContent = calYear; 
  }
  
  track.innerHTML = '';

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  // Render Kapsul Tanggal dari tanggal 1 sampai akhir bulan
  for (let i = 1; i <= daysInMonth; i++) {
    const dateObj = new Date(calYear, calMonth, i);
    const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const dayName = daysOfWeek[dateObj.getDay()];
    
    // Pengecekan Status
    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
    const isHoliday = HOLIDAYS_2026 && HOLIDAYS_2026[dateStr];
    const isToday = dateStr === todayStr;
    const hasAgenda = agendaEvents.some(e => e.date === dateStr);

    // Menyusun Class CSS
    let classes = 'timeline-item';
    if (isToday) classes += ' today';
    if (isWeekend || isHoliday) classes += ' holiday';
    if (hasAgenda) classes += ' has-agenda';

    const div = document.createElement('div');
    div.className = classes;
    if (isHoliday) div.title = HOLIDAYS_2026[dateStr];

    // Menyusun Elemen Kapsul
    div.innerHTML = `
      <span class="timeline-day">${dayName}</span>
      <span class="timeline-date">${i}</span>
      <div class="timeline-indicator"></div>
    `;

    // Pasang Event Klik untuk buka modal Agenda
    div.onclick = () => openAgendaCompact(dateStr);
    track.appendChild(div);

    // UX HACK: Jika ini adalah "Hari Ini", otomatis geser scrollbar agar posisinya di tengah
    if (isToday) {
      setTimeout(() => {
        div.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, 150); // Jeda kecil agar DOM selesai dirender dulu
    }
  }
}

// ══════════════════════════════════════════════════════════
// LOGIKA AGENDA KALENDER (CRUD)
// ══════════════════════════════════════════════════════════
function openAgendaCompact(dateStr) {
  document.getElementById('agenda-date-input').value = dateStr;
  document.getElementById('agenda-modal-title').textContent = `Agenda: ${fmtDate(dateStr)}`;
  const list = document.getElementById('agenda-modal-list');
  agendaEvents.forEach(a => { if (!a.id) a.id = 'ag-' + Math.random().toString(36).substr(2, 9); });
  const dayAgendas = agendaEvents.filter(e => e.date === dateStr);

  if (dayAgendas.length > 0) {
    list.innerHTML = dayAgendas.map(a => `
      <div class="agenda-item">
        <div class="agenda-item-content">
          <div class="agenda-item-title" style="display:flex; align-items:center; gap:8px;">
            ${a.time ? `<span style="background:var(--bg); color:var(--text-muted); font-family:'Syne', sans-serif; font-size:10.5px; font-weight:700; padding:3px 8px; border-radius:6px; letter-spacing:0.05em; box-shadow:inset 0 0 0 1px var(--border);">${a.time}</span>` : ''} 
            ${a.title}
          </div>
          ${a.berkas ? `<div class="agenda-item-berkas" style="margin-top:6px;">Terkait: ${a.berkas}</div>` : ''}
        </div>
        <div class="agenda-actions">
          <button type="button" class="btn-agenda-action edit" onclick="editAgenda('${a.id}')" title="Edit">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button type="button" class="btn-agenda-action delete" onclick="deleteAgenda('${a.id}', '${dateStr}')" title="Hapus">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>`).join('');
  } else {
    list.innerHTML = '<div style="text-align:center; font-size:12.5px; color:var(--text-muted); padding:10px 0;">Belum ada jadwal di tanggal ini.</div>';
  }

  const select = document.getElementById('agenda-berkas');
  select.innerHTML = '<option value="">-- Tidak Terkait Berkas Manapun --</option>';
  cases.filter(c => !c.isClosed).forEach(c => select.add(new Option(`${c.nomorberkas} - ${c.pemohon}`, c.nomorberkas)));

  document.getElementById('form-add-agenda').reset();
  document.getElementById('agenda-id-input').value = '';
  document.getElementById('btn-submit-agenda').textContent = 'Simpan Agenda Baru';
  openModal('modal-agenda-compact');
  document.getElementById('agenda-time').value = '09:00'
}

function handleSaveAgenda(e) {
  e.preventDefault();
  const dateStr = document.getElementById('agenda-date-input').value;
  const id = document.getElementById('agenda-id-input').value;
  const title = document.getElementById('agenda-title').value;
  const time = document.getElementById('agenda-time').value; // AMBIL NILAI WAKTU
  const berkas = document.getElementById('agenda-berkas').value;

  if (id) {
    const index = agendaEvents.findIndex(a => a.id === id);
    if (index > -1) { 
      agendaEvents[index].title = title; 
      agendaEvents[index].time = time; // UPDATE WAKTU
      agendaEvents[index].berkas = berkas; 
    }
    showToast('Agenda berhasil diperbarui!', 'success');
  } else {
    // SIMPAN WAKTU KE AGENDA BARU
    agendaEvents.push({ id: 'ag-' + Date.now(), date: dateStr, time, title, berkas });
    showToast('Agenda baru ditambahkan!', 'success');
  }

  localStorage.setItem('sipentas-agenda', JSON.stringify(agendaEvents));
  openAgendaCompact(dateStr);
  renderCompactCalendar();
}

function editAgenda(id) {
  const agenda = agendaEvents.find(a => a.id === id);
  if (!agenda) return;
  document.getElementById('agenda-id-input').value = agenda.id;
  document.getElementById('agenda-title').value = agenda.title;
  document.getElementById('agenda-time').value = agenda.time || '09:00'; // ISI KE FORM
  document.getElementById('agenda-berkas').value = agenda.berkas || '';
  document.getElementById('btn-submit-agenda').textContent = 'Perbarui Data Agenda';
  document.getElementById('agenda-title').focus();
}

function deleteAgenda(id, dateStr) {
  if (!confirm('Apakah Anda yakin ingin menghapus agenda kegiatan ini?')) return;
  agendaEvents = agendaEvents.filter(a => a.id !== id);
  localStorage.setItem('sipentas-agenda', JSON.stringify(agendaEvents));
  showToast('Agenda berhasil dihapus.', 'success');
  openAgendaCompact(dateStr);
  renderCompactCalendar();
}

// ══════════════════════════════════════════════════════════
// HALAMAN DETAIL BERKAS
// ══════════════════════════════════════════════════════════
function viewDetail(id) {
  const c = cases.find(x => x.id === id);
  if (!c) return;
  window._currentDetailId = id; // Store for modal references
  const content = document.getElementById('detail-content');
  
  // 1. GENERATE VERTICAL STEPPER TAHAPAN
  let stepperHTML = `<ul class="stepper" style="list-style: none; padding: 0;">`;
  TAHAPAN_LABELS.forEach((label, i) => {
    let statusClass = '';
    let contentHTML = '';
    let stepNum = i + 1;
    // Mengambil data tahapan dari database (jika ada), jika tidak buat kosong
    let tahapanData = (c.tahapan && c.tahapan[i]) ? c.tahapan[i] : { date: '', note: '', fileName: '' };

    // Mesin Logika Stepper Baru (Happy Path & Unhappy Path)
    if (c.currentStep > i || (c.isClosed && c.currentStep >= i && c.statusState !== 'rejected')) {
      // STATE: SELESAI NORMAL (Masa Lalu)
      statusClass = 'done success';
      contentHTML = `<div class="step-title" style="color:var(--black);">${label} <span style="font-size:10px; background:#E8F5E9; color:#1B5E20; padding:3px 8px; border-radius:12px; margin-left:8px; font-weight:700;">SELESAI</span></div>
        <div class="step-date">${fmtDate(tahapanData.date)}</div>
        ${tahapanData.note ? `<div class="step-note">${tahapanData.note}</div>` : ''}
        ${tahapanData.fileName ? `<div style="margin-top:10px;"><button class="btn btn-secondary btn-sm" onclick="openModal('modal-pdf-viewer')">Lihat Dokumen</button></div>` : ''}`;
    } 
    else if (c.currentStep === i && c.statusState === 'pending') {
      // STATE: UNHAPPY PATH - PENDING/DIKEMBALIKAN (Jingga)
      statusClass = 'warning';
      contentHTML = `<div class="step-title" style="color:var(--black);">${label} <span style="font-size:10px; background:#FFF8E1; color:#F59E0B; padding:3px 8px; border-radius:12px; margin-left:8px; font-weight:700;">TERTUNDA KANTAH</span></div>
        <div class="step-date">Dikembalikan: ${fmtDate(tahapanData.date)}</div>
        <div class="step-note" style="border-left-color:#F59E0B; background:#FFFBEB;"><strong>Alasan Pengembalian:</strong><br>${tahapanData.note}</div>
        <button class="btn btn-secondary btn-sm" onclick="openTahapanModal('${c.id}', ${i})" style="margin-top:12px; border-color:#F59E0B; color:#F59E0B;">Lanjutkan Kembali (Resume)</button>`;
    }
    else if (c.currentStep === i && c.statusState === 'rejected') {
      // STATE: UNHAPPY PATH - DITOLAK (Merah)
      statusClass = 'danger';
      contentHTML = `<div class="step-title" style="color:#EF4444;">${label} <span style="font-size:10px; background:#FEF2F2; color:#EF4444; padding:3px 8px; border-radius:12px; margin-left:8px; font-weight:700;">DITOLAK PERMANEN</span></div>
        <div class="step-date">Ditolak Pada: ${fmtDate(tahapanData.date)}</div>
        <div class="step-note" style="border-left-color:#EF4444; background:#FEF2F2; color:#991B1B;"><strong>Dasar Penolakan:</strong><br>${tahapanData.note}</div>
        ${tahapanData.fileName ? `<div style="margin-top:10px;"><button class="btn btn-danger btn-sm" onclick="openModal('modal-pdf-viewer')">Lihat Surat Tolak</button></div>` : ''}`;
    }
    else if (c.currentStep === i && !c.isClosed) {
      // STATE: AKTIF NORMAL
      statusClass = 'active';
      contentHTML = `<div class="step-title" style="color: var(--black);">${label} <span style="font-size:10px; background:#E3F2FD; color:#1565C0; padding:3px 8px; border-radius:12px; margin-left:8px; font-weight:700;">SEDANG BERJALAN</span></div>
        <div style="font-size:12px; color:var(--text-sub); margin-top:4px; margin-bottom:12px;">Tahap ini sedang menunggu penyelesaian dan unggah berkas.</div>
        <button class="btn btn-primary btn-sm" onclick="openTahapanModal('${c.id}', ${i})">Selesaikan Tahapan</button>`;
    } 
    else {
      // STATE: TERKUNCI (Masa Depan)
      if (c.statusState === 'rejected') return; // Menghentikan stepper jika ditolak
      statusClass = '';
      contentHTML = `<div class="step-title" style="color: var(--text-muted); opacity:0.7;">${label}</div>`;
    }

    // Suntikkan class dashed untuk garis putus-putus jika pending
    const isDashed = (c.currentStep === i && c.statusState === 'pending') ? 'dashed' : '';
    
    stepperHTML += `
      <li class="step-item ${isDashed}">
        <div class="step-num ${statusClass}">${stepNum}</div>
        <div class="step-content">${contentHTML}</div>
      </li>
    `;
  });
  stepperHTML += `</ul>`;

  // 2. GENERATE DOKUMEN LAINNYA
  const dokumenLainHTML = (c.dokumenLain && c.dokumenLain.length > 0) ? c.dokumenLain.map(d => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border:1px solid var(--border); border-radius:8px; margin-bottom:10px; background:var(--white); transition:all 0.2s;">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="width:36px; height:36px; background:#FEE2E2; color:#EF4444; border-radius:8px; display:flex; align-items:center; justify-content:center;">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        </div>
        <div>
          <div style="font-weight:600; font-size:13px; color:var(--text);">${d.nama}</div>
          <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Diunggah: ${fmtDate(d.date)}</div>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="openPdfViewer('${d.fileName}')">Lihat</button>
    </div>
  `).join('') : `
    <div class="empty-state" style="padding:24px 10px;">
      <div class="empty-state-icon" style="width:48px; height:48px; margin-bottom:12px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
      <div class="empty-state-desc">Belum ada dokumen tambahan yang diunggah.</div>
    </div>
  `;

  // 3. GENERATE AUDIT TRAIL
  const auditHTML = c.auditTrail ? c.auditTrail.map(a => `
    <div class="audit-item">
      <div class="audit-dot"></div>
      <div class="audit-content">
        <div class="audit-header">
          <div><span class="audit-user">${a.userName}</span> <span class="audit-role">${a.userRole || 'Admin'}</span></div>
          <div class="audit-time">${fmtDate(a.date)} — ${fmtTime(a.date)}</div>
        </div>
        <div class="audit-action">${a.action}</div>
      </div>
    </div>
  `).reverse().join('') : '<div style="font-size:12px; color:var(--text-muted);">Belum ada riwayat aktivitas.</div>';

  // 4. SUSUN SELURUH HALAMAN
  content.innerHTML = `
    <div class="detail-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
      <div>
        <div class="detail-case-id">NO. REGISTRASI: ${c.nomorberkas}</div>
        <div class="detail-title">
          Permohonan a.n. ${c.pemohon} 
          ${c.termohon ? `<span style="color:var(--text-muted); font-size:18px; font-weight:400; font-style:italic; margin: 0 8px;">vs</span> ${c.termohon}` : ''}
        </div>
        <div class="detail-metas">
          <span class="detail-meta-item"><strong>Jenis:</strong> ${c.jenis === 'cacat' ? 'Cacat Administrasi' : 'Putusan Pengadilan'}</span>
          <span class="detail-meta-item"><strong>Kantah:</strong> ${c.kantah}</span>
          <span class="detail-meta-item"><strong>Tgl Usulan:</strong> ${fmtDate(c.tglUsulan)}</span>
          <span class="detail-meta-item"><strong>Status:</strong> ${c.isClosed ? '🔒 Berkas Ditutup' : STATUS_MAP[c.currentStep]?.label || 'Usulan Masuk'}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-secondary" onclick="openEditModal('${c.id}')" style="background: rgba(255,255,255,0.1); color: var(--white); border-color: rgba(255,255,255,0.2); backdrop-filter: blur(4px);">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="margin-right: 4px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          Koreksi Data
        </button>
        ${!c.isClosed ? `<button class="btn btn-secondary" onclick="openTutupModal('${c.id}')" style="background: rgba(239,68,68,0.15); color: #FCA5A5; border-color: rgba(239,68,68,0.3);">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Tutup Berkas
        </button>` : `<button class="btn btn-secondary" onclick="openModal('modal-buka')" style="background: rgba(16,185,129,0.15); color: #6EE7B7; border-color: rgba(16,185,129,0.3);">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
          Buka Kembali
        </button>`}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;">
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Progres Penanganan & Dokumen Wajib</span></div>
          <div class="card-body" style="padding: 24px 24px 8px 12px;">
            ${stepperHTML}
          </div>
        </div>

        <div class="card">
          <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
            <span class="card-title">Dokumen Terkait Lainnya</span>
            <button class="btn btn-secondary btn-sm" onclick="openUploadTambahanModal('${c.id}')">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" style="margin-right:4px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Upload
            </button>
          </div>
          <div class="card-body" style="background: var(--bg);">
            ${dokumenLainHTML}
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="card">
          <div class="card-header"><span class="card-title">Informasi Objek & Kepemilikan</span></div>
          <div class="card-body">
            <div class="info-grid">
              <div class="info-item full"><label>Pemegang Hak</label><span>${c.pemeganghak || '-'}</span></div>
              <div class="info-item"><label>Hak & No. Sertipikat</label><span>${c.jenissert || ''} No. ${c.nosert || '-'}</span></div>
              <div class="info-item"><label>Luas Objek</label><span>${c.luas ? formatNumber(c.luas) + ' m²' : '-'}</span></div>
              <div class="info-item full"><label>Letak Tanah</label><span>Desa ${c.desa || '-'}, Kec. ${c.kecamatan || '-'}, Kab. ${c.kabupaten || '-'}</span></div>
              
              <div class="info-item"><label>Nama Pemohon</label><span>${c.pemohon || '-'}</span></div>
              <div class="info-item"><label>Termohon / Pihak Lawan</label><span>${c.termohon || '-'}</span></div>
              
              <div class="info-item full" style="margin-top: 4px; padding-top: 12px; border-top: 1px dashed var(--border);"><label>Penanggung Jawab (PIC)</label><span>${c.pj || '-'}</span></div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" style="background: var(--bg);"><span class="card-title">Riwayat Perubahan (Audit Trail)</span></div>
          <div class="card-body">
            <div class="audit-timeline">
              ${auditHTML}
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
  navigateTo('detail');
}
function openTahapanModal(caseId, stepIndex) {
  const c = cases.find(x => x.id === caseId);
  if (!c) return;

  const stageName = TAHAPAN_LABELS[stepIndex];
  const isLastStep = stepIndex === TAHAPAN_LABELS.length - 1;
  const btnText = isLastStep ? 'Simpan & Selesai' : 'Simpan & Lanjut';
  const today = new Date().toISOString().split('T')[0];

  // Smart Default untuk Nama Dokumen
  let defaultDocName = `Dokumen ${stageName}`;
  if (stepIndex === 3) defaultDocName = 'Surat Keputusan (SK) Kepala Kanwil';
  if (stepIndex === 4) defaultDocName = 'Laporan Penyelesaian Sengketa';

  // Rombak Header Modal
  const modalHeader = document.querySelector('#modal-tahapan .modal-header');
  if (modalHeader) {
    modalHeader.innerHTML = `
      <div class="modal-title" style="font-size: 18px;">Selesaikan: ${stageName}</div>
      <button type="button" class="modal-close" onclick="closeModal('modal-tahapan')">
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;
  }

  // Sembunyikan Footer Bawaan (Karena kita memindahkan tombol ke dalam Form)
  const modalFooter = document.querySelector('#modal-tahapan .modal-footer');
  if (modalFooter) modalFooter.style.display = 'none';

 // Suntikkan Form UI/UX Modern (LAYOUT PANEL KONTROL KEPUTUSAN)
  const body = document.getElementById('modal-tahapan-body');
  body.innerHTML = `
    <form id="form-update-tahapan" onsubmit="saveTahapanUpdate(event, '${caseId}', ${stepIndex})">
      
      <div style="display: flex; flex-direction: column; gap: 20px;">
        
        <div class="form-grid" style="margin: 0;">
          <div class="form-group">
            <label id="lbl-doc-name">Nama Dokumen *</label>
            <input type="text" id="tahapan-doc-name" class="form-control" value="${defaultDocName}" required>
          </div>
          <div class="form-group">
            <label id="lbl-doc-date">Tanggal Pelaksanaan *</label>
            <input type="date" id="tahapan-date" class="form-control" value="${today}" required>
          </div>
        </div>

        <div class="form-grid" style="margin: 0; align-items: stretch;">
          
          <div class="form-group" style="height: 100%;">
            <label>Unggah Dokumen Bukti (PDF) *</label>
            <div class="dropzone-wrapper" id="dz-tahapan" style="height: calc(100% - 22px); display: flex; flex-direction: column; justify-content: center; padding: 20px 16px;">
              <input type="file" id="tahapan-file" accept="application/pdf" required>
              <div class="dropzone-content">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" style="color:var(--text-muted); margin-bottom:10px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <div style="font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px;">Klik / Seret File</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 12px;">Format .PDF (Maks 5MB)</div>
                <div class="dropzone-file-name" id="name-tahapan"></div>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px; justify-content: space-between;">
            
            <div class="form-group" style="flex: 1; display: flex; flex-direction: column;">
              <label>Keterangan / Kesimpulan</label>
              <textarea id="tahapan-note" class="form-control" style="flex: 1; resize: none; min-height: 80px;" placeholder="Tuliskan catatan penting dari tahapan ini..."></textarea>
            </div>

            <div class="form-group" style="padding: 12px 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
              <label style="color: var(--black); font-size: 11px; margin-bottom: 6px; display: block;">Keputusan Tahapan *</label>
              <select id="tahapan-keputusan" class="form-control" onchange="toggleTahapanKeputusan(this.value)" style="border-color: var(--black); font-weight: 600; font-size: 13px; padding: 8px 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <option value="lanjut">Sesuai SOP - Lanjut ke Tahap Berikut</option>
                <option value="pending">Kurang Syarat - Kembalikan ke Kantah</option>
                <option value="tolak">Tidak Penuhi Syarat - Tolak Permohonan</option>
              </select>
            </div>

          </div>
        </div>

      </div>
      
      <div class="divider" style="margin: 24px 0 16px;"></div>
      
      <div style="display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn-secondary" onclick="closeModal('modal-tahapan')">Batal</button>
        <button type="submit" id="btn-submit-tahapan" class="btn btn-primary">
          ${btnText}
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-left:4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </form>
  `;

  openModal('modal-tahapan');
  setTimeout(initSmartDropzones, 100); 
}
function toggleTahapanKeputusan(val) {
  const lblDoc = document.getElementById('lbl-doc-name');
  const lblDate = document.getElementById('lbl-doc-date');
  const noteArea = document.getElementById('tahapan-note');
  const btnSubmit = document.getElementById('btn-submit-tahapan');
  
  if (val === 'lanjut') {
    lblDoc.innerText = 'Nama Dokumen *';
    lblDate.innerText = 'Tanggal Pelaksanaan *';
    noteArea.placeholder = "Tuliskan catatan penting atau kesimpulan dari tahapan ini...";
    noteArea.required = false;
    btnSubmit.innerHTML = 'Simpan & Lanjut <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-left:4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    btnSubmit.className = 'btn btn-primary';
  } else if (val === 'pending') {
    lblDoc.innerText = 'Surat / Nota Pengembalian *';
    lblDate.innerText = 'Tanggal Dikembalikan *';
    noteArea.placeholder = "Tuliskan alasan spesifik mengapa berkas dikembalikan ke Kantah (Wajib)...";
    noteArea.required = true;
    btnSubmit.innerHTML = 'Simpan & Kembalikan Berkas <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-left:4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>';
    btnSubmit.className = 'btn btn-secondary'; // Warna putih untuk pending
  } else if (val === 'tolak') {
    lblDoc.innerText = 'Surat Penolakan Resmi *';
    lblDate.innerText = 'Tanggal Ditolak *';
    noteArea.placeholder = "Tuliskan dasar hukum penolakan permohonan ini (Wajib)...";
    noteArea.required = true;
    btnSubmit.innerHTML = 'Tolak & Tutup Berkas <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-left:4px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    btnSubmit.className = 'btn btn-danger'; // Warna merah untuk tolak
  }
}
// 1. Fungsi untuk Mereset dan Membuka Modal
function openUploadTambahanModal(caseId) {
  document.getElementById('upload-tambahan-id').value = caseId;
  document.getElementById('form-upload-tambahan').reset(); // Bersihkan form sebelumnya
  openModal('modal-upload-tambahan');
}

// 2. Fungsi untuk Menyimpan Data, Update Audit, & Re-Render UI
function saveDokumenTambahan(e) {
  e.preventDefault();
  
  const id = document.getElementById('upload-tambahan-id').value;
  const docName = document.getElementById('tambahan-doc-name').value;
  const fileInput = document.getElementById('tambahan-file');
  
  const c = cases.find(x => x.id === id);
  if (!c) return;

  // Ubah tombol jadi "Loading" agar user tidak klik 2x
  const btnSubmit = document.getElementById('btn-submit-tambahan');
  btnSubmit.innerHTML = 'Mengunggah... <span class="time-pulse" style="display:inline-block; margin-left:8px; width:6px; height:6px; background:#fff;"></span>';
  btnSubmit.disabled = true;

  // Jika user tidak pilih file aneh, kita asumsikan namanya
  const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : `${docName}.pdf`;

  // --- A. SIMPAN KE ARRAY DOKUMEN ---
  if (!c.dokumenLain) c.dokumenLain = []; // Inisialisasi jika belum ada
  c.dokumenLain.push({
    id: 'doc-' + Date.now(),
    nama: docName,
    fileName: fileName,
    date: new Date().toISOString()
  });

  // --- B. CETAK JEJAK AUDIT (AUDIT TRAIL) ---
  if (!c.auditTrail) c.auditTrail = [];
  const currentUserName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';
  c.auditTrail.push({
    date: new Date().toISOString(),
    userName: currentUserName,
    userRole: 'Administrator',
    action: `Melampirkan dokumen tambahan baru: <strong>${docName}</strong>.`
  });

  // --- C. SIMULASI JARINGAN & UPDATE UI INSTAN ---
  setTimeout(() => {
    closeModal('modal-upload-tambahan');
    
    // Keajaiban UX: Render ulang fungsi viewDetail akan membuat dokumen baru
    // dan riwayat audit langsung muncul di layar tanpa loading sama sekali!
    viewDetail(id); 
    
    showToast(`Dokumen "${docName}" berhasil diunggah!`, 'success');
    
    // Kembalikan tombol ke bentuk semula untuk pemakaian berikutnya
    btnSubmit.innerHTML = `Simpan & Unggah <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="margin-left: 4px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`;
    btnSubmit.disabled = false;
  }, 600); // Jeda 0.6 detik agar animasi transisi terasa natural
}

// ══════════════════════════════════════════════════════════
// 7. INISIALISASI
// ══════════════════════════════════════════════════════════
// Fungsi untuk memunculkan Skeleton dengan efek Staggered (Domino)
function showTableSkeleton(tbodyId, rowCount = 5) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  
  let skeletonHTML = '';
  for (let i = 0; i < rowCount; i++) {
    // Memberikan jeda waktu agar animasi berjalan seperti air terjun (cascading)
    const delay = (i * 0.08).toFixed(2); 
    
    // Struktur rangka ini disesuaikan dengan struktur tabel Dashboard kita
    skeletonHTML += `
      <tr>
        <td><div class="skeleton-box skel-code" style="animation-delay: ${delay}s"></div></td>
        <td><div class="skeleton-box skel-text" style="animation-delay: ${delay}s"></div></td>
        <td><div class="skeleton-box skel-badge" style="animation-delay: ${delay}s"></div></td>
        <td><div class="skeleton-box skel-text-short" style="animation-delay: ${delay}s"></div></td>
        <td><div class="skeleton-box skel-badge" style="animation-delay: ${delay}s"></div></td>
      </tr>
    `;
  }
  tbody.innerHTML = skeletonHTML;
}
checkLogin();
if (localStorage.getItem('sipentas-logged-in') === 'true') {
  loadCasesFromDB();
  navigateTo('dashboard');
  renderCompactCalendar();
}

// Peta background halaman login
function initLoginBackgroundMap() {
  const mapEl = document.getElementById('login-map-bg');
  if (!mapEl) return;
  const loginMap = L.map('login-map-bg', {
    center: [-8.65, 117.2], zoom: 8,
    zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, keyboard: false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; CARTO' }).addTo(loginMap);
  const dummyHotspots = [
    { coords: [-8.5833, 116.1167], type: 'cyan', size: 8 },
    { coords: [-8.7167, 116.2833], type: 'red', size: 12 },
    { coords: [-8.6500, 117.4167], type: 'cyan', size: 8 },
    { coords: [-8.4500, 118.7500], type: 'red', size: 10 },
    { coords: [-8.3333, 116.1500], type: 'cyan', size: 6 }
  ];
  dummyHotspots.forEach(spot => {  // ✅
    const randomDelay = (Math.random() * 2).toFixed(2);
    const icon = L.divIcon({
      className: `neon-marker ${spot.type}`,
      iconSize: [spot.size, spot.size],
      html: `<div style="width: 100%; height: 100%; border-radius: 50%; animation-delay: ${randomDelay}s;"><style>.neon-marker::after { animation-delay: ${randomDelay}s; }</style></div>`
    });
    L.marker(spot.coords, { icon }).addTo(loginMap);
  });
}

if (localStorage.getItem('sipentas-logged-in') !== 'true') {
  setTimeout(initLoginBackgroundMap, 100);
}
// ==========================================================
// UNIVERSAL DROPZONE HANDLER
// ==========================================================
function initSmartDropzones() {
  const dropzones = document.querySelectorAll('.dropzone-wrapper');
  
  dropzones.forEach(zone => {
    const input = zone.querySelector('input[type="file"]');
    const nameDisplay = zone.querySelector('.dropzone-file-name');
    if (!input || !nameDisplay) return;

    // Efek saat file diseret masuk ke area
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });

    // Efek saat file batal diseret / keluar dari area
    ['dragleave', 'dragend'].forEach(type => {
      zone.addEventListener(type, () => {
        zone.classList.remove('dragover');
      });
    });

    // Efek saat file dijatuhkan (di-drop)
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      
      if (e.dataTransfer.files.length) {
        input.files = e.dataTransfer.files; // Masukkan file yang didrop ke dalam input
        updateFileName(input, nameDisplay, zone);
      }
    });

    // Efek saat file dipilih melalui klik biasa
    input.addEventListener('change', () => {
      updateFileName(input, nameDisplay, zone);
    });
  });
}

function updateFileName(input, displayElement, zoneElement) {
  if (input.files.length > 0) {
    const fileName = input.files[0].name;
    displayElement.innerHTML = `<span style="color:#10B981;">✓ File terpilih:</span><br>${fileName}`;
    zoneElement.style.borderColor = '#10B981'; // Ubah border jadi hijau tanda sukses
    zoneElement.style.background = '#ECFDF5';
  } else {
    displayElement.innerHTML = '';
    zoneElement.style.borderColor = '';
    zoneElement.style.background = '';
  }
}

// Panggil fungsi ini tepat setelah halaman dan elemen DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
  initSmartDropzones();
});
// ==========================================================
// FITUR EXPORT EXCEL (CSV) OTOMATIS
// ==========================================================
// ══════════════════════════════════════════════════════════
// 8. FUNGSI YANG DIPANGGIL DARI UI (SEBELUMNYA HILANG)
// ══════════════════════════════════════════════════════════

// Simpan update tahapan
async function saveTahapanUpdate(e, caseId, stepIndex) {
  if (e) e.preventDefault();
  const c = cases.find(x => x.id === caseId);
  if (!c) return;

  const keputusan = document.getElementById('tahapan-keputusan')?.value || 'lanjut';
  const docName = document.getElementById('tahapan-doc-name')?.value || '';
  const docDate = document.getElementById('tahapan-date')?.value || new Date().toISOString().split('T')[0];
  const note = document.getElementById('tahapan-note')?.value || '';
  const fileInput = document.getElementById('tahapan-file');
  const fileName = fileInput?.files?.length > 0 ? fileInput.files[0].name : `${docName}.pdf`;

  const btnSubmit = document.getElementById('btn-submit-tahapan');
  if (btnSubmit) { btnSubmit.disabled = true; btnSubmit.textContent = 'Menyimpan...'; }

  // Simpan data tahapan
  if (!c.tahapan) c.tahapan = Array(6).fill({ date: '', note: '', fileName: '' });
  c.tahapan[stepIndex] = { date: docDate, note, fileName };

  const currentUserName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';

  if (keputusan === 'lanjut') {
    const isLastStep = stepIndex === TAHAPAN_LABELS.length - 1;
    if (isLastStep) {
      c.currentStep = stepIndex + 1;
      c.isClosed = true;
      c.statusState = 'selesai';
    } else {
      c.currentStep = stepIndex + 1;
      c.statusState = 'active';
    }
    c.auditTrail = c.auditTrail || [];
    c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Menyelesaikan tahapan: <strong>${TAHAPAN_LABELS[stepIndex]}</strong>. Dokumen: ${docName}.` });
  } else if (keputusan === 'pending') {
    c.statusState = 'pending';
    c.auditTrail = c.auditTrail || [];
    c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Berkas dikembalikan ke Kantah pada tahap: <strong>${TAHAPAN_LABELS[stepIndex]}</strong>. Alasan: ${note}.` });
  } else if (keputusan === 'tolak') {
    c.statusState = 'rejected';
    c.isClosed = true;
    c.auditTrail = c.auditTrail || [];
    c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Permohonan <strong>DITOLAK</strong> pada tahap: <strong>${TAHAPAN_LABELS[stepIndex]}</strong>. Dasar: ${note}.` });
  }

  // Kirim ke server (non-blocking, graceful degradation)
  try {
    const formData = new FormData();
    formData.append('currentStep', c.currentStep);
    formData.append('isClosed', c.isClosed);
    formData.append('statusState', c.statusState || 'active');
    formData.append('tahapan', JSON.stringify(c.tahapan));
    formData.append('auditTrail', JSON.stringify(c.auditTrail));
    if (fileInput?.files?.length > 0) formData.append('file', fileInput.files[0]);
    await fetch(`${API_URL}/kasus/${caseId}`, { method: 'PUT', body: formData });
  } catch (err) {
    console.warn('Server tidak tersedia, data tersimpan lokal:', err);
  }

  setTimeout(() => {
    closeModal('modal-tahapan');
    viewDetail(caseId);
    updateStats();
    if (keputusan === 'lanjut') showToast('Tahapan berhasil diselesaikan!', 'success');
    else if (keputusan === 'pending') showToast('Berkas dikembalikan ke Kantah.', 'success');
    else showToast('Permohonan ditolak. Berkas ditutup.', 'error');
    if (btnSubmit) { btnSubmit.disabled = false; }
  }, 400);
}

// Tutup berkas
// Tutup berkas
function openTutupModal(caseId) {
  window._currentDetailId = caseId;
  // Store id in hidden input if available, otherwise use window variable
  const hiddenInput = document.getElementById('tutup-berkas-id');
  if (hiddenInput) hiddenInput.value = caseId;
  document.getElementById('tutup-alasan').value = '';
  openModal('modal-tutup');
}

async function saveTutupBerkas() {
  const alasan = document.getElementById('tutup-alasan')?.value;
  if (!alasan) { showToast('Alasan penutupan wajib diisi!', 'error'); return; }
  const caseId = window._currentDetailId;
  const c = caseId ? cases.find(x => x.id === caseId) : null;
  if (!c) { showToast('Data berkas tidak ditemukan.', 'error'); return; }

  const currentUserName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';
  c.isClosed = true;
  c.statusState = 'closed';
  c.auditTrail = c.auditTrail || [];
  c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Berkas ditutup secara manual. Alasan: <strong>${alasan}</strong>.` });

  try {
    await fetch(`${API_URL}/kasus/${c.id}`, { method: 'PUT', body: JSON.stringify({ isClosed: true, statusState: 'closed', alasanTutup: alasan }), headers: { 'Content-Type': 'application/json' } });
  } catch (err) { console.warn('Server tidak tersedia:', err); }

  closeModal('modal-tutup');
  viewDetail(c.id);
  updateStats();
  showToast('Berkas berhasil ditutup.', 'success');
}
async function saveBukaBerkas() {
  const alasan = document.getElementById('buka-alasan')?.value;
  if (!alasan) { showToast('Alasan pembukaan wajib diisi!', 'error'); return; }
  const c = cases.find(x => x.id === window._currentDetailId);
  if (!c) return;

  const currentUserName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';
  c.isClosed = false;
  c.statusState = 'active';
  c.auditTrail = c.auditTrail || [];
  c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Berkas dibuka kembali. Alasan: <strong>${alasan}</strong>.` });

  try {
    await fetch(`${API_URL}/kasus/${c.id}`, { method: 'PUT', body: JSON.stringify({ isClosed: false, statusState: 'active' }), headers: { 'Content-Type': 'application/json' } });
  } catch (err) { console.warn('Server tidak tersedia:', err); }

  closeModal('modal-buka');
  viewDetail(c.id);
  updateStats();
  showToast('Berkas berhasil dibuka kembali.', 'success');
}

// Buka modal edit berkas
function openEditModal(caseId) {
  const c = cases.find(x => x.id === caseId);
  if (!c) return;
  window._currentDetailId = caseId;
  document.getElementById('edit-id').value = caseId;
  document.getElementById('edit-pemohon').value = c.pemohon || '';
  document.getElementById('edit-termohon').value = c.termohon || '';
  document.getElementById('edit-pemeganghak').value = c.pemeganghak || '';
  const luasVal = c.luas ? new Intl.NumberFormat('id-ID').format(c.luas) : '';
  document.getElementById('edit-luas').value = luasVal;
  const pjEl = document.getElementById('edit-pj');
  if (pjEl) pjEl.value = c.pj || '';
  document.getElementById('edit-alasan').value = '';
  openModal('modal-edit-berkas');
}

// Simpan edit berkas
async function saveEditBerkas(e) {
  e.preventDefault();
  const id = document.getElementById('edit-id').value;
  const c = cases.find(x => x.id === id);
  if (!c) return;

  const alasan = document.getElementById('edit-alasan').value;
  const currentUserName = localStorage.getItem('sipentas-admin-name') || 'Admin Kanwil';

  const luasRaw = (document.getElementById('edit-luas').value || '').replace(/\./g, '').replace(/,/g, '');
  c.pemohon = document.getElementById('edit-pemohon').value;
  c.termohon = document.getElementById('edit-termohon').value;
  c.pemeganghak = document.getElementById('edit-pemeganghak').value;
  c.luas = luasRaw;
  c.pj = document.getElementById('edit-pj').value;
  c.auditTrail = c.auditTrail || [];
  c.auditTrail.push({ date: new Date().toISOString(), userName: currentUserName, userRole: 'Administrator', action: `Data berkas dikoreksi. Alasan: <strong>${alasan}</strong>.` });

  try {
    await fetch(`${API_URL}/kasus/${id}`, { method: 'PUT', body: JSON.stringify({ pemohon: c.pemohon, termohon: c.termohon, pemeganghak: c.pemeganghak, luas: c.luas, pj: c.pj }), headers: { 'Content-Type': 'application/json' } });
  } catch (err) { console.warn('Server tidak tersedia:', err); }

  closeModal('modal-edit-berkas');
  viewDetail(id);
  showToast('Data berkas berhasil diperbarui!', 'success');
}

// Pengaturan: Simpan profil
function handleSimpanProfil(e) {
  e.preventDefault();
  const nama = document.getElementById('p-nama')?.value || 'Admin Kanwil';
  localStorage.setItem('sipentas-admin-name', nama);
  const topbarName = document.getElementById('topbar-user-name');
  const topbarInitials = document.getElementById('topbar-avatar-initials');
  if (topbarName) topbarName.textContent = nama;
  if (topbarInitials) topbarInitials.textContent = nama.substring(0, 2).toUpperCase();
  showToast('Profil berhasil disimpan!', 'success');
}

// Pengaturan: Ubah sandi
function handleUbahSandi(e) {
  e.preventDefault();
  const oldPass = document.getElementById('s-old-pass')?.value;
  const newPass = document.getElementById('s-new-pass')?.value;
  const confirmPass = document.getElementById('s-confirm-pass')?.value;
  const currentPass = localStorage.getItem('sipentas-password') || 'admin123';
  if (oldPass !== currentPass) { showToast('Sandi lama tidak sesuai!', 'error'); return; }
  if (newPass !== confirmPass) { showToast('Konfirmasi sandi tidak cocok!', 'error'); return; }
  if (newPass.length < 6) { showToast('Sandi baru minimal 6 karakter!', 'error'); return; }
  localStorage.setItem('sipentas-password', newPass);
  document.getElementById('s-old-pass').value = '';
  document.getElementById('s-new-pass').value = '';
  document.getElementById('s-confirm-pass').value = '';
  showToast('Kata sandi berhasil diperbarui!', 'success');
}

// Pengaturan: Upload avatar
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { showToast('Ukuran file melebihi 2MB!', 'error'); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    localStorage.setItem('sipentas-avatar', dataUrl);
    const preview = document.getElementById('profile-preview-img');
    const initials = document.getElementById('profile-preview-initials');
    const topbarImg = document.getElementById('topbar-avatar-img');
    const topbarInitials = document.getElementById('topbar-avatar-initials');
    if (preview) { preview.src = dataUrl; preview.style.display = 'block'; }
    if (initials) initials.style.display = 'none';
    if (topbarImg) { topbarImg.src = dataUrl; topbarImg.style.display = 'block'; }
    if (topbarInitials) topbarInitials.style.display = 'none';
    showToast('Foto profil berhasil diperbarui!', 'success');
  };
  reader.readAsDataURL(file);
}

function exportToExcel(type) {
  // 1. Filter data berdasarkan jenis (cacat / putusan)
  const dataToExport = type === 'semua' ? cases : cases.filter(c => c.jenis === type);
  
  if (dataToExport.length === 0) {
    showToast('Tidak ada data untuk diunduh.', 'error');
    return;
  }

  // Ubah teks tombol sementara agar UX terlihat interaktif
  showToast('Menyiapkan dokumen Excel...', 'success');

  // 2. Siapkan Header Kolom Excel
  let csvContent = "No. Registrasi,Kantah,Pemohon,Termohon,No. Surat,Tgl Usulan,Luas (m2),Status Saat Ini\n";

  // 3. Looping data dan masukkan ke baris CSV
  dataToExport.forEach(c => {
    const noReg = c.nomorberkas || '-';
    const kantah = c.kantah || '-';
    // Gunakan tanda kutip ganda ("") agar teks yang mengandung koma tidak merusak kolom Excel
    const pemohon = `"${c.pemohon || '-'}"`; 
    const termohon = `"${c.termohon || '-'}"`;
    const noSurat = `"${c.nosurat || '-'}"`;
    const tgl = fmtDate(c.tglUsulan);
    const luas = c.luas || '0';
    const status = c.isClosed ? 'Selesai (Ditutup)' : (STATUS_MAP[c.currentStep]?.label || 'Usulan Masuk');

    // Gabungkan menjadi satu baris
    csvContent += `${noReg},${kantah},${pemohon},${termohon},${noSurat},${tgl},${luas},${status}\n`;
  });

  // 4. Sulap teks menjadi File dan paksa Browser untuk mengunduhnya
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.setAttribute("href", url);
  
  // Beri nama file yang rapi dan profesional (contoh: Rekap_Cacat_Administrasi_2026-03-01.csv)
  const fileNameLabel = type === 'cacat' ? 'Cacat_Administrasi' : type === 'putusan' ? 'Putusan_Pengadilan' : 'Semua_Permohonan';
  const todayDate = new Date().toISOString().split('T')[0];
  link.setAttribute("download", `Rekap_${fileNameLabel}_${todayDate}.csv`);
  
  // Eksekusi klik tersembunyi
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// ==========================================================
// FITUR DARK MODE THEME
// ==========================================================
function initTheme() {
  const savedTheme = localStorage.getItem('sipentas-theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('icon-moon').style.display = 'none';
    document.getElementById('icon-sun').style.display = 'block';
  }
}

function toggleTheme() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  
  const iconMoon = document.getElementById('icon-moon');
  const iconSun = document.getElementById('icon-sun');

  if (isDark) {
    body.removeAttribute('data-theme');
    localStorage.setItem('sipentas-theme', 'light');
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('sipentas-theme', 'dark');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  }
}

// Panggil fungsi ini saat aplikasi dimuat
document.addEventListener('DOMContentLoaded', initTheme);