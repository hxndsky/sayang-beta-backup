import React from "react";
import { Link } from "react-router-dom";
import DummyMajalah from "../../assets/dummy/DummyMajalah";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const MediaMajalah = () => {
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
                <Link className="font-semibold text-white">Majalah</Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            Media Informasi | Majalah
          </h1>
        </div>
      </section>

      {/* Kategori */}
      <section className="bg-white">
        <div
          className="pt-8 xl:px-36 sm:px-6 lg:px-8 xxl:px-72"
          data-aos="fade-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <Link
              to="/media-informasi/video"
              className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                Video
              </h3>
            </Link>

            <Link
              to="/media-informasi/infografis"
              className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                Infografis
              </h3>
            </Link>

            <Link
              to="/media-informasi/majalah"
              className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                Majalah
              </h3>
            </Link>

            <Link
              to="/media-informasi/artikel-kesehatan"
              className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                Artikel Kesehatan
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {DummyMajalah.map((majalah) => (
            <Link
              key={majalah.id}
              to={`/media-informasi/majalah/${majalah.slug}`}
              className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
            >
              <img
                src={majalah.imageUrl}
                alt={majalah.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {majalah.title}
                </h3>
                <p className="text-sm text-[#024CAA] mt-2">{majalah.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MediaMajalah;
