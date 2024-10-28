import React from "react";
import { Link } from "react-router-dom";
import DataKegiatan from "../../components/dummy/DummyDataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const Kegiatan = () => {
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
                <Link className="font-semibold text-white">Kegiatan</Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">Kegiatan Kami</h1>
        </div>
      </section>

      <section className="bg-white py-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
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
      </section>
      <Footer />
    </>
  );
};

export default Kegiatan;
