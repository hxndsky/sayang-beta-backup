import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for mobile */}
      <div className="fixed w-full z-30 flex justify-between items-center px-8 py-4 bg-white xl:hidden shadow-lg border-b-[3px] border-[#024CAA]">
        <Link to="/" className="text-2xl font-bold text-[#024CAA]">
          Sayang<span className="text-[#EC8305]">Beta</span>
        </Link>
        <button
          onClick={toggleOffCanvas}
          className="text-[#024CAA] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Off-Canvas Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0 backdrop-blur-sm bg-black/50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleOffCanvas}
      >
        <div
          className={`fixed inset-y-0 left-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // To prevent closing offcanvas when clicking inside
        >
          <div className="flex flex-col h-full py-6 px-6 space-y-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-[#024CAA]">
                Sayang<span className="text-[#EC8305]">Beta</span>
              </Link>
              <button onClick={toggleOffCanvas} className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-10 space-y-4 text-lg">
              <Link
                to="/"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Home
              </Link>
              <Link
                to="/kegiatan"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Kegiatan
              </Link>
              <Link
                to="#faq"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                FAQ
              </Link>
              <Link
                to="#mediainformasi"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Media Informasi
              </Link>

              {/* Dropdown Layanan */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-black hover:text-[#EC8305]  p-2 rounded-sm">
                  Layanan
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="pl-6 mt-2 space-y-2">
                  <Link
                    to="/layanan/1"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Layanan 1
                  </Link>
                  <Link
                    to="/layanan/2"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Layanan 2
                  </Link>
                  <Link
                    to="/layanan/3"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Layanan 3
                  </Link>
                </div>
              </details>

              {/* Dropdown Media Informasi */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-black hover:text-[#EC8305]  p-2 rounded-sm">
                  Data
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="pl-6 mt-2 space-y-2">
                  <Link
                    to="/data/1"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Data Dokter Spesialis Anak Kota Semarang
                  </Link>
                  <Link
                    to="/data/2"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Data Posyandu di Kota Semarang
                  </Link>
                </div>
              </details>
              <Link
                to="#tentang"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Tentang
              </Link>
            </nav>
            <hr className="text-[#263238]" />

            <div className="mt-auto space-y-4">
              <Link
                to="/masuk"
                className="block btn-outline-primary border-[#024CAA] text-[#024CAA] hover:bg-[#024CAA] hover:text-white p-2 rounded-sm text-center font-medium"
              >
                Masuk
              </Link>
              <Link
                to="/buat-akun"
                className="block btn-outline-primary border-[#024CAA] text-white bg-[#024CAA] hover:bg-[#024CAA] p-2 rounded-sm text-center hover:font-medium"
              >
                Buat Akun
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navbar */}
      <div className="hidden xl:flex navbar-sticky z-30 justify-between items-center xl:px-36 xxl:px-72 py-4 bg-white border-b-[3px] border-[#024CAA] shadow-lg">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#024CAA]">
          Sayang<span className="text-[#EC8305]">Beta</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-2 font-medium uppercase text-sm">
          <Link
            to="/"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/kegiatan"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Kegiatan
          </Link>
          <Link
            to="#faq"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            FAQ
          </Link>
          <Link
            to="#mediainformasi"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Media Informasi
          </Link>

          {/* Dropdown Layanan */}
          <div className="dropdown dropdown-hover px-2 py-2 text-black hover:text-[#EC8305] transition duration-200">
            <label
              className="flex cursor-pointer items-center gap-2"
              tabIndex="0"
            >
              Layanan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-2 bg-white text-black shadow-lg rounded-sm">
              <Link
                to="/layanan/1"
                className="block px-4 py-2 hover:bg-[#f0f0f0] transition duration-200"
              >
                Layanan 1
              </Link>
              <Link
                to="/layanan/2"
                className="block px-4 py-2 hover:bg-[#f0f0f0] transition duration-200"
              >
                Layanan 2
              </Link>
              <Link
                to="/layanan/3"
                className="block px-4 py-2 hover:bg-[#f0f0f0] transition duration-200"
              >
                Layanan 3
              </Link>
            </div>
          </div>

          {/* Dropdown Data */}
          <div className="dropdown dropdown-hover px-2 py-2 text-black hover:text-[#EC8305] transition duration-200">
            <label
              className="flex cursor-pointer items-center gap-2"
              tabIndex="0"
            >
              Data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-2 bg-white text-black shadow-lg rounded-sm">
              <Link
                to="/data/1"
                className="block px-4 py-2 hover:bg-[#f0f0f0] transition duration-200"
              >
                Data Dokter Spesialis Anak Kota Semarang
              </Link>
              <Link
                to="/data/2"
                className="block px-4 py-2 hover:bg-[#f0f0f0] transition duration-200"
              >
                Data Posyandu di Kota Semarang
              </Link>
            </div>
          </div>

          <Link
            to="#tentang"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Tentang
          </Link>
        </nav>

        <div className="space-x-4">
          <Link
            to="/masuk"
            className="text-[#024CAA] border-[#024CAA] btn-outline-primary hover:bg-[#024CAA] hover:text-white px-4 py-2 rounded-sm"
          >
            Masuk
          </Link>
          <Link
            to="/buat-akun"
            className="border-[#024CAA] bg-[#024CAA] btn-outline-primary hover:bg-[#024CAA] hover:border-[#024CAA] text-white px-4 py-2 rounded-sm"
          >
            Buat Akun
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
