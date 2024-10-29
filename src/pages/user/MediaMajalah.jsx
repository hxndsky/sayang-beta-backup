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
        <div className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10">
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

      <section className="bg-white py-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8"></section>
      <Footer />
    </>
  );
};

export default MediaMajalah;
