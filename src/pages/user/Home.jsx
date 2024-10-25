import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DataKegiatan from "./DataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle logic, if clicked again it will close
  };

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-[#024CAA]">
        <div
          className="py-14 md:px-8 xl:px-36 sm:px-8 xxl:px-72"
          data-aos="fade-down"
        >
          <h1 className="text-6xl font-bold pt-14 text-white">SayangBeta</h1>
          <p className="text-2xl pt-4 w-3/4">
            Sayang Beta merupakan aplikasi yang dikembangkan oleh Dinas
            Kesehatan Kota Semarang untuk pemantauan perkembangan dan
            pertumbuhan anak serta balita, yang digunakan sebagai salah satu
            upaya penurunan angka stunting di Kota Semarang.
          </p>
        </div>
      </section>
      {/* Tentang Kami */}
      <section className="bg-white py-12 pt-12" id="tentang">
        <div className="mx-auto flex flex-col lg:flex-row items-center sm:px-6 lg:px-8 xl:px-36 xxl:px-72">
          {/* Gambar */}
          <div className="xl:w-1/2">
            <img
              src="https://i.ibb.co.com/Z6jd7tY/thumb.jpg" // Ganti dengan path gambar yang benar
              alt="Rumah Pelita"
              className="w-full h-auto rounded-sm"
              data-aos="fade-right"
            />
          </div>

          {/* Divider Vertikal */}
          <div className="hidden lg:block mx-8">
            <div className="h-96 w-px bg-gray-300" data-aos="fade-up"></div>
          </div>

          {/* Konten */}
          <div
            className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-start"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold text-[#EC8305] mb-2">
              Tentang Kami
            </h2>
            <p className="text-[#263238] mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi atque voluptas possimus ex dolore ab dicta dolor consequatur temporibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, vero! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, voluptas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, cumque!
            </p>
            <ul>
              <li className="mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                <p className="text-[#263238] mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, distinctio.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                <p className="text-[#263238]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, sequi. 
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Media Informasi */}
      <section id="mediainformasi" className="bg-white">
        <div
          className="py-8 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-left"
        >
          <div className="flex items-center justify-start w-full mb-8">
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
            <h2 className="text-4xl font-bold text-[#EC8305] pl-4">
              Media Informasi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link
              to="/media/1"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Video
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptas quia, pariatur cumque quasi dicta perferendis eum quis
                blanditiis officia corrupti tempora eaque error eligendi.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              to="/media/2"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Infografis
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptas quia, pariatur cumque quasi dicta perferendis eum quis
                blanditiis officia corrupti tempora eaque error eligendi.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              to="/media/3"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Majalah
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptas quia, pariatur cumque quasi dicta perferendis eum quis
                blanditiis officia corrupti tempora eaque error eligendi.
              </p>
            </Link>

            {/* Card 4 */}
            <Link
              to="/media/4"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Artikel Kesehatan
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                voluptas quia, pariatur cumque quasi dicta perferendis eum quis
                blanditiis officia corrupti tempora eaque error eligendi.
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* Kegiatan */}
      <section id="kegiatan" className="bg-white">
        <div
          className="py-12 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-right"
        >
          <h2 className="flex items-center gap-4 text-4xl font-bold text-[#EC8305] mb-8">
            Kegiatan Kami
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DataKegiatan.map((kegiatan) => (
              <Link
                key={kegiatan.id}
                to={`/kegiatan/${kegiatan.slug}`}
                className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
              >
                <img
                  src={kegiatan.imageUrl}
                  alt={kegiatan.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {kegiatan.title}
                  </h3>
                  <p className="text-sm text-[#024CAA] mt-2">{kegiatan.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link
              to="/kegiatan"
              className="text-[#024CAA] hover:text-[#EC8305] font-semibold"
            >
              Cari Kegiatan Lainnya &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="#faq" className="bg-white ">
        <div
          className="py-8 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-start w-full mb-8">
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
            <h2 className="text-4xl font-bold text-[#EC8305] pl-4 pr-4">FAQ</h2>
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </div>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(0)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Berapa biaya masuk Daycare Rumah Pelita?
                </h3>
                <span className="ml-2">
                  {activeIndex === 0 ? (
                    <FaChevronUp className="h-4 w-4 text-[#024CAA]" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-[#024CAA]" />
                  )}
                </span>
              </div>
              {activeIndex === 0 && (
                <div className="text-lg px-6 pb-4 pt-2 text-gray-700">
                  Gratis (Tidak dipungut biaya sepeserpun)
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(1)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Apa saja syarat masuk Daycare Rumah Pelita?
                </h3>
                <span className="ml-2">
                  {activeIndex === 1 ? (
                    <FaChevronUp className="h-4 w-4 text-[#024CAA]" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-[#024CAA]" />
                  )}
                </span>
              </div>
              {activeIndex === 1 && (
                <div className="text-lg px-6 pb-4 pt-2 text-gray-700">
                  Balita dengan masalah gizi (stunting atau wasting), termasuk
                  keluarga kurang mampu, ibu bekerja / tidak optimal mengasuh
                  anak.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(2)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Kegiatan apa saja yang dilakukan di Daycare Rumah Pelita?
                </h3>
                <span className="ml-2">
                  {activeIndex === 2 ? (
                    <FaChevronUp className="h-4 w-4 text-[#024CAA]" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-[#024CAA]" />
                  )}
                </span>
              </div>
              {activeIndex === 2 && (
                <div className="text-lg px-6 pb-4 pt-2 text-gray-700">
                  Di Daycare Rumah Pelita, anak mendapatkan makan 2 kali sehari,
                  kudapan 1 kali sehari, serta susu. Anak juga akan dipantau
                  status gizinya melalui pengukuran antropometri dan pemantauan
                  asupan makan oleh nutrisionist, serta pemantauan perkembangan
                  oleh bidan. Anak juga akan mengikuti kegiatan pembelajaran
                  baik dalam maupun luar ruangan oleh pengasuh, serta diberikan
                  jam untuk tidur / beristirahat. Terdapat juga pemeriksaan oleh
                  dokter puskesmas setiap bulan. Orang tua balita juga akan
                  diedukasi oleh tenaga kesehatan melalui kelas parenting
                  sehingga mampu menerapkan pola asuh yang baik di rumah, serta
                  diberikan konseling oleh psikolog.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(3)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Apakah orang tua diperbolehkan mendampingi anak selama
                  kegiatan di Daycare Rumah Pelita?
                </h3>
                <span className="ml-2">
                  {activeIndex === 3 ? (
                    <FaChevronUp className="h-4 w-4 text-[#024CAA]" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-[#024CAA]" />
                  )}
                </span>
              </div>
              {activeIndex === 3 && (
                <div className="text-lg px-6 pb-4 pt-2 text-gray-700">
                  Orang tua tidak diperkenankan mendampingi anak, karena akan
                  membuat anak tantrum atau rewel saat ditinggal sehingga
                  membuat tidak optimal dalam mengikuti kegiatan di Daycare.
                  Namun, orang tua berhak mengantar dan menjemput anak, serta
                  selama dalam pembelajaran, anak akan diasuh oleh pengasuh yang
                  sudah bersertifikat.
                </div>
              )}
            </div>
            {/* FAQ Item 5 */}
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(4)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Kapan anak dikategorikan lulus dari Daycare Rumah Pelita?
                </h3>
                <span className="ml-2">
                  {activeIndex === 4 ? (
                    <FaChevronUp className="h-4 w-4 text-[#024CAA]" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-[#024CAA]" />
                  )}
                </span>
              </div>
              {activeIndex === 4 && (
                <div className="text-lg px-6 pb-4 pt-2 text-gray-700">
                  Pertumbuhan dan perkembangan anak akan dievaluasi oleh dokter
                  spesialis anak atau dokter puskesmas. Jika berdasarkan hasil
                  evaluasi, pertumbuhan dan perkembangan anak sudah bagus, maka
                  anak akan diluluskan dari Daycare.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
