import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DataDokter = () => {
  // Data dummy
  const data = [
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

  // State for search, pagination, and entries per page
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtering the data based on the search
  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.spesialis.toLowerCase().includes(search.toLowerCase()) ||
      item.alamatPraktek.some((alamat) =>
        alamat.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Calculate the number of pages needed
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Handle pagination change
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 when changing entries per page
  };

  return (
    <>
      <Header />
      <section className="bg-white lg:px-6 xl:px-32 md:px-6 sm:px-4 pt-24">
        <div className="breadcrumbs text-base">
          <ul>
            <li>
              <Link to="/" className="hover:text-[#EC8305]">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#EC8305]">Data</Link>
            </li>
            <li>
              <Link className="font-semibold text-[#024CAA]">
                Data Dokter Spesialis Anak Kota Semarang
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white lg:px-6 xl:px-32 md:px-4 sm:px-4 pb-8 pt-8 text-black">
        <div className="p-4">
          <div className="flex flex-col sm:flex-col md:flex-row md:justify-between sm:items-start items-center mb-4 space-y-4 sm:space-y-4 md:space-y-0"
          data-aos="fade-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <label className="mr-2">Tampilkan</label>
              <select
                className="border rounded-sm p-2 bg-white"
                value={entriesPerPage}
                onChange={handleEntriesChange}
              >
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={60}>60</option>
              </select>
              <span className="ml-2">entri</span>
            </div>
            <div className="flex items-start sm:items-center">
              <label className="mr-2">Cari:</label>
              <input
                type="text"
                className="border rounded-sm p-2 bg-white w-full sm:w-auto"
                placeholder="Cari..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto" data-aos="fade-up">
            <table className="w-full min-w-full border-collapse">
              <thead className="bg-[#024CAA] text-white">
                <tr>
                  <th className="border p-2 w-1/3">Nama Lengkap</th>
                  <th className="border p-2 w-2/3">Alamat Praktek</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#F0F0F0]">
                    <td className="border p-4 flex flex-col items-center">
                      <img
                        src={item.photo}
                        alt={item.nama}
                        className="w-44 mb-2 rounded-sm"
                      />
                      <p className="text-center font-semibold">{item.nama}</p>
                      <span className="bg-[#EC8305] text-white px-2 py-1 rounded-sm text-sm mt-2">
                        {item.spesialis}
                      </span>
                    </td>
                    <td className="border p-4">
                      {item.alamatPraktek.map((alamat, index) => (
                        <p key={index} className="text-sm mb-1">
                          {index + 1}. {alamat}
                        </p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-row sm:justify-between items-start md:items-center mt-4 space-y-4 sm:space-y-4 md:space-y-0" data-aos="fade-up">
            <p>
              Menampilkan {startIndex + 1} hingga{" "}
              {Math.min(endIndex, filteredData.length)} dari {filteredData.length}{" "}
              entri
            </p>
            <div className="flex justify-center sm:justify-start space-x-2">
              <button
                className="px-3 py-2 bg-[#F0F0F0] hover:bg-[#EC8305] hover:text-white rounded-sm"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Sebelumnya
              </button>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number}
                  className={`px-3 py-2 rounded-sm ${
                    currentPage === number + 1
                      ? "bg-[#024CAA] text-white hover:bg-[#EC8305]"
                      : "bg-[#F0F0F0] hover:bg-[#EC8305] hover:text-white"
                  }`}
                  onClick={() => setCurrentPage(number + 1)}
                >
                  {number + 1}
                </button>
              ))}

              <button
                className="px-3 py-2 bg-[#F0F0F0] hover:bg-[#EC8305] hover:text-white rounded-sm"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DataDokter;
