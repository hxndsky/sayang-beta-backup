import React from "react";
import { Link } from "react-router-dom";
import DataKegiatan from "./DataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="py-14 bg-[#024CAA] md:px-8 xl:px-36 sm:px-8 xxl:px-72">
          <h1 className="text-5xl font-bold pt-14">
            Sayang<span className="text-[#EC8305]">Beta</span>
          </h1>
          <p className="text-2xl pt-4 w-3/4">
            Sayang Beta merupakan aplikasi yang dikembangkan oleh Dinas
            Kesehatan Kota Semarang untuk pemantauan perkembangan dan
            pertumbuhan anak serta balita, yang digunakan sebagai salah satu
            upaya penurunan angka stunting di Kota Semarang.
          </p>
        </div>
      </section>

      <section>
        <div className="py-12 xl:px-36 bg-white sm:px-6 lg:px-8 xxl:px-72">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mb-8">
            Kegiatan
            <div class="divider divider-horizontal w-full"></div>
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

      <section>
        <div className="py-12 xl:px-36 bg-white sm:px-6 lg:px-8 xxl:px-72">
          <h2 className="flex text-end items-center text-3xl font-bold text-[#EC8305] mb-8">
            <div class="divider divider-horizontal w-full"></div>
            Media Informasi
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
