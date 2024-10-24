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
          <h1 className="text-6xl font-bold pt-14">
            Sayang<span className="text-white">Beta</span>
          </h1>
          <p className="text-2xl pt-4 w-3/4">
            Sayang Beta merupakan aplikasi yang dikembangkan oleh Dinas
            Kesehatan Kota Semarang untuk pemantauan perkembangan dan
            pertumbuhan anak serta balita, yang digunakan sebagai salah satu
            upaya penurunan angka stunting di Kota Semarang.
          </p>
        </div>
      </section>
      <section id="mediainformasi">
        <div className="py-8 pt-12 xl:px-36 bg-white sm:px-6 lg:px-8 xxl:px-72">
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
              to="/aged-care"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                New Aged Care Act
              </h3>
              <p className="text-sm text-gray-600">
                We introduced the Aged Care Bill 2024 to Parliament on 12
                September 2024. Learn more about changes to the new Act and how
                to contribute.
              </p>
              <span className="absolute bottom-6 right-6 text-blue-600 transition-transform transform group-hover:translate-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </Link>

            {/* Card 2 */}
            <Link
              to="/immunisation"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Immunisation
              </h3>
              <p className="text-sm text-gray-600">
                The Australian Immunisation Handbook provides clinical advice
                for health professionals on the safest and most effective use of
                vaccines in their practice.
              </p>
              <span className="absolute bottom-6 right-6 text-blue-600 transition-transform transform group-hover:translate-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </Link>

            {/* Card 3 */}
            <Link
              to="/vaping-reforms"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Vaping reforms
              </h3>
              <p className="text-sm text-gray-600">
                The way you access vapes in Australia is changing from 1 October
                2024. Learn more.
              </p>
              <span className="absolute bottom-6 right-6 text-blue-600 transition-transform transform group-hover:translate-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </Link>

            {/* Card 4 */}
            <Link
              to="/health-workforce"
              className="block p-6 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Health Workforce Locator
              </h3>
              <p className="text-sm text-gray-600">
                Use our workforce locator map to check the health workforce
                classification and geographical information of any area in
                Australia.
              </p>
              <span className="absolute bottom-6 right-6 text-blue-600 transition-transform transform group-hover:translate-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section id="kegiatan">
        <div className="py-12 xl:px-36 bg-white sm:px-6 lg:px-8 xxl:px-72">
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
