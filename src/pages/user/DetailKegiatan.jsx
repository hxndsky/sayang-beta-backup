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
                <Link className="font-semibold text-white">{kegiatan.title}</Link>
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
          <p className="text-black pb-4"><span className="font-semibold">Tanggal Diposting: </span>{kegiatan.date}</p>
          <div className="mt-4 text-gray-800">
            <p>{kegiatan.content}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white pb-8 pt-12 bg-white xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
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
      <Footer />
    </>
  );
};

export default DetailKegiatan;
