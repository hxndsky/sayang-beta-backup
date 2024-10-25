import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DataPosyandu = () => {
  // Data dummy
  const data = [
    {
      nama: "PUSPITA",
      kecamatan: "Banyumanik",
      kelurahan: "Ngesrep",
      puskesmas: "Ngesrep",
    },
    {
      nama: "KUNCUP MEKAR",
      kecamatan: "Banyumanik",
      kelurahan: "Ngesrep",
      puskesmas: "Ngesrep",
    },
    {
      nama: "GOTONGROYONG",
      kecamatan: "Banyumanik",
      kelurahan: "Tinjomoyo",
      puskesmas: "Ngesrep",
    },
    {
      nama: "TRISARI",
      kecamatan: "Banyumanik",
      kelurahan: "Ngesrep",
      puskesmas: "Ngesrep",
    },
    {
      nama: "MEKAR INDAH",
      kecamatan: "Banyumanik",
      kelurahan: "Ngesrep",
      puskesmas: "Ngesrep",
    },
    {
      nama: "KARTIKA PAKSI",
      kecamatan: "Banyumanik",
      kelurahan: "Ngesrep",
      puskesmas: "Ngesrep",
    },
    {
      nama: "TUNAS HARAPAN",
      kecamatan: "Banyumanik",
      kelurahan: "Tinjomoyo",
      puskesmas: "Ngesrep",
    },
    {
      nama: "TANJUNGSARI",
      kecamatan: "Banyumanik",
      kelurahan: "Sumurboto",
      puskesmas: "Ngesrep",
    },
    {
      nama: "CHERRY",
      kecamatan: "Banyumanik",
      kelurahan: "Sumurboto",
      puskesmas: "Ngesrep",
    },
    {
      nama: "MAWAR",
      kecamatan: "Banyumanik",
      kelurahan: "Tinjomoyo",
      puskesmas: "Ngesrep",
    },
    {
      nama: "MELATI",
      kecamatan: "Candisari",
      kelurahan: "Jatingaleh",
      puskesmas: "Candisari",
    },
    {
      nama: "KAMBOJA",
      kecamatan: "Candisari",
      kelurahan: "Karangrejo",
      puskesmas: "Candisari",
    },
    {
      nama: "SERUNI",
      kecamatan: "Candisari",
      kelurahan: "Jomblang",
      puskesmas: "Candisari",
    },
    {
      nama: "FLAMBOYAN",
      kecamatan: "Candisari",
      kelurahan: "Jatingaleh",
      puskesmas: "Candisari",
    },
    {
      nama: "ANGGREK",
      kecamatan: "Candisari",
      kelurahan: "Karangrejo",
      puskesmas: "Candisari",
    },
    {
      nama: "TULIP",
      kecamatan: "Candisari",
      kelurahan: "Jomblang",
      puskesmas: "Candisari",
    },
    {
      nama: "BUNGA PUTIH",
      kecamatan: "Gajahmungkur",
      kelurahan: "Lempongsari",
      puskesmas: "Gajahmungkur",
    },
    {
      nama: "BOUGENVILLE",
      kecamatan: "Gajahmungkur",
      kelurahan: "Gajahmungkur",
      puskesmas: "Gajahmungkur",
    },
    {
      nama: "DAHLIA",
      kecamatan: "Gajahmungkur",
      kelurahan: "Karangrejo",
      puskesmas: "Gajahmungkur",
    },
    {
      nama: "TERATAI",
      kecamatan: "Gajahmungkur",
      kelurahan: "Karangrejo",
      puskesmas: "Gajahmungkur",
    },
    {
      nama: "KEBAYA",
      kecamatan: "Gunungpati",
      kelurahan: "Ngijo",
      puskesmas: "Gunungpati",
    },
    {
      nama: "DAISY",
      kecamatan: "Gunungpati",
      kelurahan: "Mangunsari",
      puskesmas: "Gunungpati",
    },
    {
      nama: "SEKAR ARUM",
      kecamatan: "Gunungpati",
      kelurahan: "Cepoko",
      puskesmas: "Gunungpati",
    },
    {
      nama: "KIRANA",
      kecamatan: "Gunungpati",
      kelurahan: "Sekaran",
      puskesmas: "Gunungpati",
    },
    {
      nama: "KENANGA",
      kecamatan: "Gunungpati",
      kelurahan: "Sekaran",
      puskesmas: "Gunungpati",
    },
    {
      nama: "LILLY",
      kecamatan: "Mijen",
      kelurahan: "Mijen",
      puskesmas: "Mijen",
    },
    {
      nama: "TANJUNG",
      kecamatan: "Mijen",
      kelurahan: "Jatibarang",
      puskesmas: "Mijen",
    },
    {
      nama: "KEMUNING",
      kecamatan: "Mijen",
      kelurahan: "Wonolopo",
      puskesmas: "Mijen",
    },
    {
      nama: "AYU",
      kecamatan: "Mijen",
      kelurahan: "Tambangan",
      puskesmas: "Mijen",
    },
    {
      nama: "ALAMANDA",
      kecamatan: "Mijen",
      kelurahan: "Tambangan",
      puskesmas: "Mijen",
    },
    {
      nama: "KRISAN",
      kecamatan: "Ngaliyan",
      kelurahan: "Wonosari",
      puskesmas: "Ngaliyan",
    },
    {
      nama: "LOVINA",
      kecamatan: "Ngaliyan",
      kelurahan: "Tambakaji",
      puskesmas: "Ngaliyan",
    },
    {
      nama: "PALM",
      kecamatan: "Ngaliyan",
      kelurahan: "Tambakaji",
      puskesmas: "Ngaliyan",
    },
    {
      nama: "JATILAWANG",
      kecamatan: "Ngaliyan",
      kelurahan: "Wonosari",
      puskesmas: "Ngaliyan",
    },
    {
      nama: "SUMBER SARI",
      kecamatan: "Pedurungan",
      kelurahan: "Tlogosari",
      puskesmas: "Pedurungan",
    },
    {
      nama: "DAMAR WULAN",
      kecamatan: "Pedurungan",
      kelurahan: "Sendangmulyo",
      puskesmas: "Pedurungan",
    },
    {
      nama: "BANYUASIN",
      kecamatan: "Pedurungan",
      kelurahan: "Sendangmulyo",
      puskesmas: "Pedurungan",
    },
    {
      nama: "NUSA INDAH",
      kecamatan: "Pedurungan",
      kelurahan: "Gemah",
      puskesmas: "Pedurungan",
    },
    {
      nama: "MANDIRI",
      kecamatan: "Pedurungan",
      kelurahan: "Gemah",
      puskesmas: "Pedurungan",
    },
    {
      nama: "RAJAWALI",
      kecamatan: "Semarang Barat",
      kelurahan: "Karangayu",
      puskesmas: "Semarang Barat",
    },
    {
      nama: "ELANG",
      kecamatan: "Semarang Barat",
      kelurahan: "Karangayu",
      puskesmas: "Semarang Barat",
    },
    {
      nama: "GARUDA",
      kecamatan: "Semarang Barat",
      kelurahan: "Kembangarum",
      puskesmas: "Semarang Barat",
    },
    {
      nama: "MERPATI",
      kecamatan: "Semarang Barat",
      kelurahan: "Kembangarum",
      puskesmas: "Semarang Barat",
    },
    {
      nama: "KUNTI",
      kecamatan: "Semarang Timur",
      kelurahan: "Gayamsari",
      puskesmas: "Semarang Timur",
    },
    {
      nama: "SRIKANDI",
      kecamatan: "Semarang Timur",
      kelurahan: "Gayamsari",
      puskesmas: "Semarang Timur",
    },
    {
      nama: "BIMA",
      kecamatan: "Semarang Timur",
      kelurahan: "Sambirejo",
      puskesmas: "Semarang Timur",
    },
    {
      nama: "DURGA",
      kecamatan: "Semarang Timur",
      kelurahan: "Karangtempel",
      puskesmas: "Semarang Timur",
    },
    {
      nama: "PUTRI",
      kecamatan: "Semarang Utara",
      kelurahan: "Bulu Lor",
      puskesmas: "Semarang Utara",
    },
    {
      nama: "RAJA WALI",
      kecamatan: "Semarang Utara",
      kelurahan: "Panggung Lor",
      puskesmas: "Semarang Utara",
    },
    {
      nama: "ARJUNA",
      kecamatan: "Semarang Utara",
      kelurahan: "Bandarharjo",
      puskesmas: "Semarang Utara",
    },
    {
      nama: "NAGA",
      kecamatan: "Semarang Utara",
      kelurahan: "Panggung Lor",
      puskesmas: "Semarang Utara",
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
      item.kecamatan.toLowerCase().includes(search.toLowerCase()) ||
      item.kelurahan.toLowerCase().includes(search.toLowerCase()) ||
      item.puskesmas.toLowerCase().includes(search.toLowerCase())
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
      <section className="bg-[#024CAA]">
        <div className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10">
          <div className="breadcrumbs text-base">
            <ul>
              <li>
                <Link to="/" className="hover:text-[#EC8305]">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">Data Posyandu di Kota Semarang</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-5xl font-bold pt-6 text-white">
            Data Posyandu di Kota Semarang
          </h1>
        </div>
      </section>

      <section className="bg-white lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pb-8 pt-4 text-black">
        <div className="p-4">
          <div
            className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0"
            data-aos="fade-up"
          >
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
            <div className="flex items-center">
              <label className="mr-2">Cari:</label>
              <input
                type="text"
                className="border rounded-sm p-2 bg-white"
                placeholder="Cari..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto" data-aos="fade-up">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#024CAA] text-white">
                <tr>
                  <th className="border p-2">Nama Posyandu</th>
                  <th className="border p-2">Kecamatan</th>
                  <th className="border p-2">Kelurahan</th>
                  <th className="border p-2">Puskesmas</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#F0F0F0]">
                    <td className="border p-2">{item.nama}</td>
                    <td className="border p-2">{item.kecamatan}</td>
                    <td className="border p-2">{item.kelurahan}</td>
                    <td className="border p-2">{item.puskesmas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="flex flex-col sm:flex-col md:flex-row sm:justify-between items-start md:items-center mt-4 space-y-4 sm:space-y-4 md:space-y-0"
            data-aos="fade-up"
          >
            <p>
              Menampilkan {startIndex + 1} hingga{" "}
              {Math.min(endIndex, filteredData.length)} dari{" "}
              {filteredData.length} entri
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

export default DataPosyandu;
