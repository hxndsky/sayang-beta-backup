import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const LayananRumahPelita = () => {
  return (
    <>
      <Header />
      <section className="bg-[#024CAA]">
        <div
          className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10"
          data-aos="fade-down"
        >
          <div className="breadcrumbs text-base">
            <ul>
              <li>
                <Link to="/" className="hover:text-[#EC8305]">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">
                  Rumah Penanganan Stunting Lintas Sektor Bagi Baduta (Rumah
                  Pelita)
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white ">
            Rumah Penanganan Stunting Lintas Sektor Bagi Baduta (Rumah Pelita)
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="pb-8 pt-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <p>
              Diposting pada:{" "}
              <span className="font-medium">14-09-2023 11:26:02</span>
            </p>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-400" />
              <span className="font-medium">541 kali dilihat</span>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="https://sim.sayanganak.semarangkota.go.id/frontend/assets/images/pelita.jpg"
              alt="Gambar Artikel"
              className="rounded-sm shadow-md md:w-3/4 lg:w-2/3"
            />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
            <p>
              Rumah Pelita merupakan inisiasi dari Pemerintah Kota (Pemkot)
              Semarang sebagai salah satu upaya percepatan penurunan stunting
              dalam bentuk daycare yang bertujuan meningkatkan pola asuh, asupan
              makan anak, serta perkembangan anak sehingga bisa tercapai status
              gizi yang optimal. Rumah Pelita diresmikan pertama kali pada
              tanggal 21 Februari 2023 oleh Menteri Pemberdayaan Perempuan dan
              Perlindungan Anak (PPPA) I Gusti Ayu Bintang Darmawati. Rumah
              Pelita yang pertama kali diresmikan berlokasi di Jalan Candi Pawon
              Timur III Manyaran, Semarang Barat. Saat ini sudah terdapat 4
              Rumah Pelita yang tersebar di berbagai wilayah meliputi Semarang
              Utara (Bandarharjo), Tembalang (Bulusan), dan Gunungpati
              (Sekaran). <br />
              <br />
              Kegiatan yang dilakukan di Rumah Pelita meliputi pembelajaran dan
              pengasuhan, kegiatan bermain dalam dan luar ruangan, pemberian
              waktu tidur, pemberian makan 2 kali, snack 1 kali, dan susu 2 kali
              sehari, serta pemeriksaan kesehatan meliputi pemantauan asupan
              makan setiap hari, pengukuran antropometri setiap minggu,
              pemantuan perkembangan dan SDIDTK anak mingguan, dan pemeriksaan
              dokter puskesmas. Selain itu juga diadakan kelas parenting bagi
              ibu balita dan konseling kesehatan mental oleh psikolog. Melalui
              kegiatan-kegiatan tersebut diharapkan dapat membantu memperbaiki
              status gizi anak dan mempertahankan status gizi anak melalui
              pengasuhan yang tepat.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LayananRumahPelita;
