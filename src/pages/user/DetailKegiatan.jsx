import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DataKegiatan from "./DataKegiatan";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DetailKegiatan = () => {
  const { slug } = useParams();
  const kegiatan = DataKegiatan.find((item) => item.slug === slug); // Cari berita berdasarkan slug

  if (!kegiatan) {
    return <p>Kegiatan not found</p>;
  }

  return (
    <>
      <Header />
      <section className="bg-white lg:px-6 xl:px-32 md:px-4 sm:px-4 pt-24">
        <div className="breadcrumbs text-base">
          <ul>
            <li>
              <Link to="/" className="hover:text-[#EC8305]">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#EC8305]">Kegiatan</Link>
            </li>
            <li>
              <Link className="font-semibold text-[#024CAA]">
                {kegiatan.title}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="pb-8 pt-12 bg-white xl:px-36 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {kegiatan.title}
          </h2>
          <p className="text-gray-600">{kegiatan.date}</p>
          <div className="mt-4 text-gray-800">
            <p>{kegiatan.content}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailKegiatan;
