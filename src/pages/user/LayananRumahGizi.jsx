import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const LayananRumahGizi = () => {
  return (
    <>
      <Header />
      <section className="bg-[#024CAA]">
        <div className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10" data-aos="fade-down">
          <div className="breadcrumbs text-base">
            <ul>
              <li>
                <Link to="/" className="hover:text-[#EC8305]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/kegiatan" className="hover:text-[#EC8305]">
                  Layanan
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">
                  Rumah Gizi Pelangi Nusantara
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            Rumah Gizi Pelangi Nusantara
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="pb-8 pt-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg" data-aos="fade-up">
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <p>
              Diposting pada:{" "}
              <span className="font-medium">14-09-2023 11:27:28</span>
            </p>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-400" />
              <span className="font-medium">771 kali dilihat</span>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="https://sim.sayanganak.semarangkota.go.id/frontend/assets/images/pelangi.jpg"
              alt="Gambar Artikel"
              className="rounded-sm shadow-md w-full lg:w-full"
            />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>
              Rumah Gizi Pelangi Nusantara merupakan upaya percepatan penurunan
              stunting melalui pendekatan continuum of care 1000 HPK melalui
              upaya promotif preventif (kebun gizi, wisata edukasi bagi remaja
              dan anak sekolah), upaya kuratif (penanganan balita secara
              komprehensif di rumah gizi selama 6 bulan), serta upaya penunjang
              (rumah gizi, dan mobil stunting). <br />
              <br /> Rumah Gizi Pelangi Nusantara berlokasi di Jalan Nusa Indah
              No 12, Srondol, Kecamatan Banyumanik. Kegiatan yang dilakukan di
              rumah gizi pelangi nusantara meliputi upaya promotif preventif
              salah satunya Wisata Edukasi Gizi dengan sasaran anak sekolah
              mulai dari TK/PAUD, SD, SMP, SMA, dan PONPES. Siswa akan diajak
              belajar mengenai gizi seimbang dan penerapan pola hidup bersih dan
              sehat melalui kegiatan pembelajaran yang menarik dan interaktif
              melalui permainan, studi kasus, dan praktik penyusunan menu. Upaya
              Kuratif melalui pemeriksaan balita stunting dan gizi buruk secara
              komprehensif selama 6 bulan (15 kali pemeriksaan) meliputi
              pengukuran antropometri, pemeriksaan dokter spesialis, pemeriksaan
              fisioterapi, konseling psikolog, konseling gizi, pemberian F-100,
              dan pemberian kudapan tinggi energi. Balita juga akan diperiksakan
              kondisi kesehatan melalui pemeriksaan laboratorium di Labkes Kota
              Semarang, dan pemeriksaan thorax dan darah lengkap di Balkesmas
              Provinsi Jawa Tengah untuk skrining awal. Upaya penunjang meliputi
              kebun gizi yang dapat digunakan sebagai media edukasi dan promosi,
              serta mengenalkan kepada masyarakat mengenai sayuran dan
              buah-buahan yang bermanfaat bagi tubuh serta sebagai upaya
              menunjang ketahanan pangan.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LayananRumahGizi;
