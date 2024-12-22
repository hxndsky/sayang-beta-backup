import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import DataKegiatan from "../../assets/dummy/DummyDataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo === "tentang") {
      const tentangSection = document.getElementById("tentang");
      if (tentangSection) {
        tentangSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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

      {/* Media Informasi */}
      <section id="mediainformasi" className="bg-white">
        <div
          className="py-16 pt-12 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <Link
              to="/media-informasi/video"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Video
              </h3>
            </Link>

            <Link
              to="/media-informasi/infografis"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Infografis
              </h3>
            </Link>

            <Link
              to="/media-informasi/majalah"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Majalah
              </h3>
            </Link>

            <Link
              to="/media-informasi/artikel-kesehatan"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Artikel Kesehatan
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Kegiatan */}
      <section id="kegiatan" className="bg-white">
        <div
          className="py-16 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-right"
        >
          <h2 className="flex items-center gap-4 text-4xl font-bold text-[#EC8305] mb-8">
            Kegiatan Kami
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DataKegiatan.slice(0, 4).map((kegiatan) => (
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

      {/* Tentang Kami */}
      <section className="bg-white py-16" id="tentang">
        <div className="mx-auto flex flex-col lg:flex-row items-center sm:px-6 lg:px-8 xl:px-36 xxl:px-72">
          <div className="xl:w-1/2">
            <img
              src="https://i.ibb.co.com/Z6jd7tY/thumb.jpg"
              alt="Rumah Pelita"
              className="w-full h-auto rounded-sm"
              data-aos="fade-right"
            />
          </div>

          <div className="hidden lg:block mx-8">
            <div className="h-96 w-px bg-gray-300" data-aos="fade-up"></div>
          </div>

          <div
            className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-start"
            data-aos="fade-left"
          >
            <h2 className="text-4xl font-bold text-[#EC8305] mb-2">
              Tentang Kami
            </h2>
            <p className="text-[#263238] mb-10">
              Aplikasi untuk mempermudah pemantauan pertumbuhan & perkembangan
              Balita sehingga dapat menunjang kesehatan anak & memberikan
              informasi kepada Orang tua secara mudah dan terpercaya.
            </p>
            <ul>
              <li className="mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                <p className="text-[#263238] mb-4">
                  Mewujudkan generasi Balita yang sehat dan berkembang optimal
                  melalui pemantauan pertumbuhan dan perkembangan yang mudah,
                  akurat, dan terpercaya bagi setiap orang tua.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                <p className="text-[#263238]">
                  Misi kami adalah menyediakan platform digital yang praktis dan
                  terstruktur untuk membantu orang tua dalam memantau kesehatan
                  dan perkembangan Balita secara optimal
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div
          className="py-16 pb-20 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
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
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(0)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === 0 ? "text-[#EC8305]" : "text-gray-900"
                  }`}
                >
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

            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(1)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === 1 ? "text-[#EC8305]" : "text-gray-900"
                  }`}
                >
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

            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(2)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === 2 ? "text-[#EC8305]" : "text-gray-900"
                  }`}
                >
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

            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(3)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === 3 ? "text-[#EC8305]" : "text-gray-900"
                  }`}
                >
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
            <div className="rounded-sm overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-[#F0F0F0]"
                onClick={() => toggleAccordion(4)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === 4 ? "text-[#EC8305]" : "text-gray-900"
                  }`}
                >
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

      {/* Layanan */}
      <section id="mediainformasi" className="bg-white">
        <div
          className="py-16 pt-12 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-left"
        >
          <div className="flex items-center justify-start w-full mb-8">
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
            <h2 className="text-4xl font-bold text-[#EC8305] pl-4">Layanan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link
              to="/layanan/rumah-penanganan-stunting-lintas-sektor-bagi-baduta"
              className="block p-6 bg-white transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900 hover:text-[#EC8305]">
                Rumah Penanganan Stunting Lintas Sektor Bagi Baduta (Rumah
                Pelita)
              </h3>
              <p className="text-md text-gray-600">
                Rumah Pelita merupakan inisiasi dari Pemerintah Kota (Pemkot)
                Semarang sebagai salah satu upaya percepatan penurunan stunting
                dalam bentuk daycare yang bertujuan meningkatkan pola asuh,
                asupan makan anak, serta perkembangan anak sehingga bisa
                tercapai status gizi yang optimal...
              </p>
            </Link>

            <Link
              to="/layanan/rumah-gizi-pelangi-nusantara"
              className="block p-6 bg-white transition relative"
            >
              <h3 className="mb-2 text-2xl font-semibold text-gray-900 hover:text-[#EC8305]">
                Rumah Gizi Pelangi Nusantara
              </h3>
              <p className="text-md text-gray-600">
                Rumah Gizi Pelangi Nusantara merupakan upaya percepatan
                penurunan stunting melalui pendekatan continuum of care 1000 HPK
                melalui upaya promotif preventif (kebun gizi, wisata edukasi
                bagi remaja dan anak sekolah), upaya kuratif (penanganan balita
                secara komprehensif di rumah gizi selama 6 bulan), serta upaya
                penunjang (rumah gizi, dan mobil stunting).
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="bg-white">
        <div className="flex flex-col lg:flex-row items-start gap-8 py-16 pb-20 xl:px-36 sm:px-4 lg:px-8 xxl:px-72">
          {/* Bagian Kiri (Judul dan Deskripsi) */}
          <div className="w-full lg:w-1/3" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#EC8305] mb-4">
              Testimonial
            </h2>
            <p className="text-gray-500">
              Berikut adalah beberapa testimonial dari para pengguna SayangBeta.
            </p>
          </div>

          <div className="hidden lg:block mx-8">
            <div className="h-56 w-px bg-gray-300" data-aos="fade-up"></div>
          </div>

          <div
            className="w-full lg:w-2/3 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Item Testimonial */}
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col gap-4 px-4 sm:px-6 md:px-8"
                >
                  <div className="flex items-center text-[#EC8305]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                  </p>
                  <div>
                    <p className="text-gray-900 font-semibold">Nama Pengguna</p>
                    <p className="text-blue-500">Pekerjaan</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigasi Carousel */}
            <div className="absolute top-2/3 transform -translate-y-1/2 flex gap-4 right-4">
              <button
                onClick={handlePrev}
                className="border border-gray-300 rounded-full p-2 hover:bg-[#EC8305] hover:text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="border border-gray-300 rounded-full p-2 hover:bg-[#EC8305] hover:text-white transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
