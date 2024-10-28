import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DummyDataKegiatan from "../../components/dummy/DummyDataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DetailKegiatan = () => {
  const { slug } = useParams();
  const kegiatan = DummyDataKegiatan.find((item) => item.slug === slug);

  if (!kegiatan) {
    return <p>Kegiatan not found</p>;
  }

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

      <section>
        <div className="pb-8 pt-12 bg-white xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg">
          <p className="text-black pb-4">
            <span className="font-semibold">Tanggal Diposting: </span>
            {kegiatan.date}
          </p>
          <div className="mt-4 text-gray-800">
            <p>{kegiatan.content}</p>
          </div>
          <h2 className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mt-12">
            Kegiatan Lainnya
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
        </div>
      </section>

      <section>
        <div className="pb-12 bg-white xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DummyDataKegiatan.map((kegiatan) => (
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
