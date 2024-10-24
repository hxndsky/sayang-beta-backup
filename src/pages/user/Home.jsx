import React from "react";
import { Link } from "react-router-dom";
import DataKegiatan from "./DataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-[#024CAA]">
        <div className="py-14 md:px-8 xl:px-36 sm:px-8 xxl:px-72" data-aos="fade-down">
          <h1 className="text-6xl font-bold pt-14 text-white">
            SayangBeta
          </h1>
          <p className="text-2xl pt-4 w-3/4">
            Sayang Beta merupakan aplikasi yang dikembangkan oleh Dinas
            Kesehatan Kota Semarang untuk pemantauan perkembangan dan
            pertumbuhan anak serta balita, yang digunakan sebagai salah satu
            upaya penurunan angka stunting di Kota Semarang.
          </p>
        </div>
      </section>
      <section className="bg-white py-12" id="tentang">
        <div className=" mx-auto flex flex-col lg:flex-row items-center xl:px-36 xxl:px-72">
          {/* Gambar bagian kiri */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/Z6jd7tY/thumb.jpg" // Ganti dengan path gambar yang benar
              alt="Rumah Pelita"
              className="w-full h-auto rounded-sm"
              data-aos="fade-right"
            />
          </div>

          {/* Divider */}
          <div
            className="hidden lg:block lg:w-px bg-gray-300 h-96 mx-8"
            data-aos="fade-up"
          ></div>

          {/* Bagian teks di sebelah kanan */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-[#EC8305] mb-2">
              Tentang Kami
            </h2>
            <p className="text-[#263238] mb-10">
              By creating a visual guide along the way, the designer or
              developer can get input from the other people involved in the
              website such as the customer, their manager, and other members of
              the team.
            </p>
            <ul>
              <li className="mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                <p className="text-[#263238] mb-4">
                  The effect of different scenarios on the display
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                <p className="text-[#263238]">
                  The range of functions available
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="mediainformasi" className="bg-white">
        <div className="py-8 pt-12 xl:px-36 sm:px-6 lg:px-8 xxl:px-72" data-aos="fade-left">
          <div className="flex items-center justify-start w-full mb-8">
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
            <h2 className="text-3xl font-bold text-[#EC8305] pl-4">
              Media Informasi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link
              to="/media/1"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Video
              </h3>
              <p className="text-sm text-gray-600">
                We introduced the Aged Care Bill 2024 to Parliament on 12
                September 2024. Learn more about changes to the new Act and how
                to contribute.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              to="/media/2"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Infografis
              </h3>
              <p className="text-sm text-gray-600">
                The Australian Immunisation Handbook provides clinical advice
                for health professionals on the safest and most effective use of
                vaccines in their practice.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              to="/media/3"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Majalah
              </h3>
              <p className="text-sm text-gray-600">
                The way you access vapes in Australia is changing from 1 October
                2024. Learn more.
              </p>
            </Link>

            {/* Card 4 */}
            <Link
              to="/media/4"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Artikel Kesehatan
              </h3>
              <p className="text-sm text-gray-600">
                Use our workforce locator map to check the health workforce
                classification and geographical information of any area in
                Australia.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section id="kegiatan" className="bg-white">
        <div className="py-12 xl:px-36 sm:px-6 lg:px-8 xxl:px-72" data-aos="fade-right">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mb-8">
            Kegiatan
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
                  <p className="text-sm text-gray-500 mt-2">{kegiatan.date}</p>
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

      <Footer />
    </>
  );
};

export default Home;
