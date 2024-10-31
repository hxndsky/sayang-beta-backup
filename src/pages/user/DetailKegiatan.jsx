import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import DummyDataKegiatan from "../../assets/dummy/DummyDataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DetailKegiatan = () => {
  const { slug } = useParams();
  const kegiatan = DummyDataKegiatan.find((item) => item.slug === slug);

  if (!kegiatan) {
    return <p>Kegiatan tidak ditemukan</p>;
  }

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
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">
                  {kegiatan.title}
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            {kegiatan.title}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="pb-8 pt-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg">
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4" data-aos="fade-up">
            <p>
              Diposting pada:{" "}
              <span className="font-medium">{kegiatan.date}</span>
            </p>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-400" />
              <span className="font-medium">771 kali dilihat</span>
            </div>
          </div>
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <img
              src={kegiatan.imageUrl}
              alt="Gambar Artikel"
              className="rounded-sm shadow-md md:w-3/4 lg:w-2/3"
            />
          </div>
          <div className="mt-4 text-gray-800" data-aos="fade-up">
            <p>{kegiatan.content}</p>
          </div>
          <h2 className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mt-12" data-aos="fade-left">
            Kegiatan Lainnya
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
        </div>
      </section>

      <section className="bg-white">
        <div className="pb-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8" data-aos="fade-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DummyDataKegiatan.slice(0, 4).map((kegiatan) => (
              <Link
                to={`/kegiatan/${kegiatan.slug}`} // Ubah link sesuai slug kegiatan
                key={kegiatan.id}
                className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {kegiatan.title}
                  </h3>
                  <p className="text-sm text-[#024CAA] mt-4">{kegiatan.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailKegiatan;
