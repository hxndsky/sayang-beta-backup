const DummyDataDokter = [
  {
    nama: "dr. Aldo Yustianto Muliana, Sp.A",
    spesialis: "Dokter Spesialis Anak",
    alamatPraktek: [
      "RS Panti Wilasa Citarum | Jl. Citarum No.98 Kel Mlatiharjo Kec. Semarang Timur",
      "Apotek Kimia Farma 468 | Jl. Majapahit No.170 Kel Gayamsari Kec. Gayamsari",
    ],
  },
  {
    nama: "dr. Fitria Anggita, Sp.OG",
    spesialis: "Dokter Spesialis Kandungan",
    alamatPraktek: [
      "RS Telogorejo | Jl. Jend. Sudirman No.6-8 Kel Pindrikan Lor Kec. Semarang Tengah",
      "Apotek Sinar Abadi | Jl. Pemuda No.11 Kel Sekayu Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Wahyu Setiawan, Sp.B",
    spesialis: "Dokter Spesialis Bedah",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
      "Apotek K24 | Jl. Simpang Lima No.7 Kel Karangkidul Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Rina Wijaya, Sp.KJ",
    spesialis: "Dokter Spesialis Jiwa",
    alamatPraktek: [
      "RS Jiwa Dr. Amino Gondohutomo | Jl. Brigjen Sudiarto No.347 Kel Plamongan Barat Kec. Pedurungan",
    ],
  },
  {
    nama: "dr. Daniel Purnama, Sp.THT",
    spesialis: "Dokter Spesialis THT",
    alamatPraktek: [
      "RS Elizabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
      "Klinik Pratama Harapan | Jl. Gajah Mada No.45 Kel Mugasari Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Lintang Sari, Sp.M",
    spesialis: "Dokter Spesialis Mata",
    alamatPraktek: [
      "RS Mata Undaan | Jl. MT Haryono No.78 Kel Jagalan Kec. Semarang Utara",
    ],
  },
  {
    nama: "dr. Vito Anggara, Sp.PD",
    spesialis: "Dokter Spesialis Penyakit Dalam",
    alamatPraktek: [
      "RS Tugurejo | Jl. Walisongo No.155 Kel Krapyak Kec. Semarang Barat",
      "Apotek Mulia Farma | Jl. Siliwangi No.100 Kel Ngaliyan Kec. Ngaliyan",
    ],
  },
  {
    nama: "dr. Anisa Rahma, Sp.KK",
    spesialis: "Dokter Spesialis Kulit dan Kelamin",
    alamatPraktek: [
      "RS Hermina | Jl. Pandanaran No.24 Kel Mugas Kec. Semarang Selatan",
      "Klinik Sehat Selalu | Jl. Veteran No.99 Kel Bugangan Kec. Semarang Timur",
    ],
  },
  {
    nama: "dr. Andika Prasetyo, Sp.JP",
    spesialis: "Dokter Spesialis Jantung",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
      "Apotek Medika | Jl. Pemuda No.2 Kel Sekayu Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Hanafi Subagyo, Sp.P",
    spesialis: "Dokter Spesialis Paru",
    alamatPraktek: [
      "RS Bhayangkara | Jl. Majapahit No.8 Kel Lamper Kidul Kec. Semarang Selatan",
    ],
  },
  // Tambahkan hingga 50 data
  {
    nama: "dr. Fajar Rahadian, Sp.PD",
    spesialis: "Dokter Spesialis Penyakit Dalam",
    alamatPraktek: [
      "RS Sultan Agung | Jl. Raya Kaligawe No.1 Kel Trimulyo Kec. Genuk",
      "Klinik Mitra Sehat | Jl. Tentara Pelajar No.11 Kel Sendangmulyo Kec. Tembalang",
    ],
  },
  {
    nama: "dr. Mega Saraswati, Sp.KO",
    spesialis: "Dokter Spesialis Kedokteran Olahraga",
    alamatPraktek: [
      "RS Telogorejo | Jl. Jend. Sudirman No.6-8 Kel Pindrikan Lor Kec. Semarang Tengah",
      "Klinik Prima Medika | Jl. Dr. Cipto No.20 Kel Karangturi Kec. Semarang Timur",
    ],
  },
  {
    nama: "dr. Yudi Hartono, Sp.U",
    spesialis: "Dokter Spesialis Urologi",
    alamatPraktek: [
      "RS Elizabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
      "Apotek Sejahtera | Jl. Setiabudi No.112 Kel Banyumanik Kec. Banyumanik",
    ],
  },
  {
    nama: "dr. Dina Salsabila, Sp.THT",
    spesialis: "Dokter Spesialis THT",
    alamatPraktek: [
      "RS Hermina | Jl. Pandanaran No.24 Kel Mugas Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Yoga Prasetyo, Sp.B",
    spesialis: "Dokter Spesialis Bedah",
    alamatPraktek: [
      "RS Bhayangkara | Jl. Majapahit No.8 Kel Lamper Kidul Kec. Semarang Selatan",
      "Apotek Family | Jl. Ahmad Yani No.77 Kel Miroto Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Hendra Saputra, Sp.KJ",
    spesialis: "Dokter Spesialis Jiwa",
    alamatPraktek: [
      "RS Jiwa Dr. Amino Gondohutomo | Jl. Brigjen Sudiarto No.347 Kel Plamongan Barat Kec. Pedurungan",
    ],
  },
  {
    nama: "dr. Retno Iswanti, Sp.A",
    spesialis: "Dokter Spesialis Anak",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
      "Apotek Keluarga Sehat | Jl. MT Haryono No.80 Kel Karangkidul Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Kurnia Ramadhan, Sp.M",
    spesialis: "Dokter Spesialis Mata",
    alamatPraktek: [
      "RS Mata Undaan | Jl. MT Haryono No.78 Kel Jagalan Kec. Semarang Utara",
    ],
  },
  {
    nama: "dr. Nurul Aisyah, Sp.PD",
    spesialis: "Dokter Spesialis Penyakit Dalam",
    alamatPraktek: [
      "RS Telogorejo | Jl. Jend. Sudirman No.6-8 Kel Pindrikan Lor Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Ahmad Syarif, Sp.B",
    spesialis: "Dokter Spesialis Bedah",
    alamatPraktek: [
      "RS Hermina | Jl. Pandanaran No.24 Kel Mugas Kec. Semarang Selatan",
      "Apotek Kimia Farma | Jl. MT Haryono No.45 Kel Karangturi Kec. Semarang Timur",
    ],
  },
  {
    nama: "dr. Susi Hartanti, Sp.A",
    spesialis: "Dokter Spesialis Anak",
    alamatPraktek: [
      "RS Panti Wilasa | Jl. Dr. Wahidin No.5 Kel Tegalrejo Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Indra Wijaya, Sp.OT",
    spesialis: "Dokter Spesialis Orthopedi",
    alamatPraktek: [
      "RS Elizabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
      "Apotek Nusantara | Jl. Pemuda No.7 Kel Sekayu Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Meliana Susanti, Sp.Rad",
    spesialis: "Dokter Spesialis Radiologi",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Arif Kurniawan, Sp.JP",
    spesialis: "Dokter Spesialis Jantung",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
      "Klinik Cinta Sehat | Jl. Imam Bonjol No.22 Kel Sekayu Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Dina Prasetya, Sp.KK",
    spesialis: "Dokter Spesialis Kulit dan Kelamin",
    alamatPraktek: [
      "RS Hermina | Jl. Pandanaran No.24 Kel Mugas Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Luthfi Hadi, Sp.BS",
    spesialis: "Dokter Spesialis Bedah Saraf",
    alamatPraktek: [
      "RS Elisabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
    ],
  },
  {
    nama: "dr. Nida Ardiansyah, Sp.PD",
    spesialis: "Dokter Spesialis Penyakit Dalam",
    alamatPraktek: [
      "RS Tugurejo | Jl. Walisongo No.155 Kel Krapyak Kec. Semarang Barat",
    ],
  },
  {
    nama: "dr. Faizal Rahman, Sp.KO",
    spesialis: "Dokter Spesialis Kedokteran Olahraga",
    alamatPraktek: [
      "RS Sultan Agung | Jl. Kaligawe Raya No.1 Kel Trimulyo Kec. Genuk",
    ],
  },
  {
    nama: "dr. Liana Herawati, Sp.M",
    spesialis: "Dokter Spesialis Mata",
    alamatPraktek: [
      "RS Mata Undaan | Jl. MT Haryono No.78 Kel Jagalan Kec. Semarang Utara",
    ],
  },
  {
    nama: "dr. Galang Wijaya, Sp.THT",
    spesialis: "Dokter Spesialis THT",
    alamatPraktek: [
      "RS Hermina | Jl. Pandanaran No.24 Kel Mugas Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Saraswati Nur, Sp.OG",
    spesialis: "Dokter Spesialis Kandungan",
    alamatPraktek: [
      "RS Panti Wilasa | Jl. Dr. Wahidin No.5 Kel Tegalrejo Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Rendi Aditya, Sp.B",
    spesialis: "Dokter Spesialis Bedah",
    alamatPraktek: [
      "RS Telogorejo | Jl. Jend. Sudirman No.6-8 Kel Pindrikan Lor Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Rizka Melania, Sp.KJ",
    spesialis: "Dokter Spesialis Jiwa",
    alamatPraktek: [
      "RS Jiwa Dr. Amino Gondohutomo | Jl. Brigjen Sudiarto No.347 Kel Plamongan Barat Kec. Pedurungan",
    ],
  },
  {
    nama: "dr. Wawan Setyawan, Sp.P",
    spesialis: "Dokter Spesialis Paru",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Intan Ramadhani, Sp.BA",
    spesialis: "Dokter Spesialis Bedah Anak",
    alamatPraktek: [
      "RS Elisabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
    ],
  },
  {
    nama: "dr. Nugraha Adi, Sp.PD",
    spesialis: "Dokter Spesialis Penyakit Dalam",
    alamatPraktek: [
      "RS Sultan Agung | Jl. Kaligawe Raya No.1 Kel Trimulyo Kec. Genuk",
    ],
  },
  {
    nama: "dr. Dita Rahayu, Sp.KK",
    spesialis: "Dokter Spesialis Kulit dan Kelamin",
    alamatPraktek: [
      "RS Telogorejo | Jl. Jend. Sudirman No.6-8 Kel Pindrikan Lor Kec. Semarang Tengah",
    ],
  },
  {
    nama: "dr. Setyo Nugroho, Sp.S",
    spesialis: "Dokter Spesialis Saraf",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
    ],
  },
  {
    nama: "dr. Irfan Wicaksono, Sp.M",
    spesialis: "Dokter Spesialis Mata",
    alamatPraktek: [
      "RS Mata Undaan | Jl. MT Haryono No.78 Kel Jagalan Kec. Semarang Utara",
    ],
  },
  {
    nama: "dr. Rina Andriani, Sp.JP",
    spesialis: "Dokter Spesialis Jantung",
    alamatPraktek: [
      "RS Elisabeth | Jl. Kawi No.1 Kel Wonotingal Kec. Candisari",
    ],
  },
  {
    nama: "dr. Faiza Nurhaliza, Sp.A",
    spesialis: "Dokter Spesialis Anak",
    alamatPraktek: [
      "RSUP Dr. Kariadi | Jl. Dr. Sutomo No.16 Kel Randusari Kec. Semarang Selatan",
    ],
  },
];

export default DummyDataDokter;
