import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DetailArtikel = () => {
  const { slug } = useParams(); // Ambil slug dari URL
  const [artikel, setArtikel] = useState(null); // State untuk menyimpan artikel yang dipilih
  const [otherArticles, setOtherArticles] = useState([]); // State untuk menyimpan artikel lainnya
  const [loading, setLoading] = useState(true); // State untuk indikator loading
  const [error, setError] = useState(null); // State untuk menangani error

  useEffect(() => {
    // Mengambil artikel berdasarkan slug
    const fetchArtikel = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/articles/slug/${slug}`
        );
        console.log(response.data); // Log data artikel untuk melihat apakah image_url sudah benar
        setArtikel(response.data); // Mengambil data artikel yang sudah disesuaikan
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Artikel tidak ditemukan atau gagal memuat.");
        setLoading(false);
      }
    };

    // Mengambil artikel lainnya (daftar artikel yang disetujui)
    const fetchOtherArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/articles/approved"
        );
        setOtherArticles(response.data);
      } catch (err) {
        console.error("Gagal mengambil artikel lainnya:", err);
      }
    };

    fetchArtikel();
    fetchOtherArticles();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!artikel) {
    return <p>Artikel tidak ditemukan</p>;
  }

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
                <Link
                  to="/media-informasi/artikel-kesehatan"
                  className="hover:text-[#EC8305]"
                >
                  Artikel Kesehatan
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">
                  {artikel.title}
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            {artikel.title}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="pb-8 pt-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg">
          <div
            className="flex items-center justify-between text-gray-500 text-sm mb-4"
            data-aos="fade-up"
          >
            <p>
              Diposting pada:{" "}
              <span className="font-medium">{artikel.date_uploaded}</span>
            </p>
          </div>
          <div className="flex justify-center mb-12" data-aos="fade-up">
            <img
              src={artikel.image_url}
              alt={artikel.title}
              className="rounded-sm shadow-md md:w-3/4 lg:w-2/3"
            />
          </div>
          <div className="mt-4 text-gray-800" data-aos="fade-up">
            <p>{artikel.description}</p>
          </div>
          <h2
            className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mt-12"
            data-aos="fade-left"
          >
            Artikel Lainnya
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="pb-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8"
          data-aos="fade-left"
        >
          {otherArticles.length === 0 ? (
            <p className="text-gray-500">
              Tidak ada artikel lainnya untuk ditampilkan.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherArticles
                .filter((item) => item.slug !== artikel.slug)
                .slice(0, 4)
                .map((otherArtikel) => (
                  <Link
                    to={`/media-informasi/artikel-kesehatan/${otherArtikel.slug}`}
                    key={otherArtikel.id}
                    className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {otherArtikel.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailArtikel;
