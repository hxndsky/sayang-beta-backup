import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);  // Update state to reflect logout
    navigate("/masuk");  // Redirect to login page
  };

  // Check if there's a token when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);  // If token exists, user is logged in
    } else {
      setIsLoggedIn(false);  // If no token, user is not logged in
    }
  }, []);

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
          onClick={(e) => e.stopPropagation()}
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
                Beranda
              </Link>
              <Link
                to="/kegiatan"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Kegiatan
              </Link>
              <Link
                to="/"
                state={{ scrollTo: "faq" }}
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                FAQ
              </Link>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-black hover:text-[#EC8305] p-2 rounded-sm">
                  Media Informasi
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
                    to="/media-informasi/video"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Video
                  </Link>
                  <Link
                    to="/media-informasi/majalah"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Majalah
                  </Link>
                  <Link
                    to="/media-informasi/infografis"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Infografis
                  </Link>
                  <Link
                    to="/media-informasi/artikel-kesehatan"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Artikel Kesehatan
                  </Link>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-black hover:text-[#EC8305] p-2 rounded-sm">
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
                    to="/layanan/rumah-penanganan-stunting-lintas-sektor-bagi-baduta"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Rumah Penanganan Stunting Lintas Sektor bagi Baduta (Rumah
                    Pelita)
                  </Link>
                  <Link
                    to="/layanan/rumah-gizi-pelangi-nusantara"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Rumah Gizi Pelangi Nusantara
                  </Link>
                  <Link
                    to="https://epuskesmas.semarangkota.go.id/"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Pendaftaran Kunjungan E-Puskesmas
                  </Link>
                </div>
              </details>

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
                    to="/data/data-dokter"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Data Dokter Spesialis Anak Kota Semarang
                  </Link>
                  <Link
                    to="/data/data-posyandu"
                    className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
                  >
                    Data Posyandu di Kota Semarang
                  </Link>
                </div>
              </details>
              <Link
                to="/"
                state={{ scrollTo: "tentang" }}
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Tentang
              </Link>
            </nav>
            <hr className="text-[#263238]" />

            <div className="mt-auto space-y-4">
              {isLoggedIn ? (
                <Link
                  onClick={handleLogout}
                  className="block btn-outline-primary border-[#FB4141] text-[#FB4141] hover:bg-[#FB4141] hover:text-white p-2 rounded-sm text-center font-medium"
                >
                  Logout
                </Link>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navbar */}
      <div className="hidden xl:flex navbar-sticky z-30 justify-between items-center xl:px-36 xxl:px-72 py-4 bg-white border-b-[3px] border-[#024CAA] shadow-lg">
        <Link to="/" className="text-3xl font-bold text-[#024CAA]">
          Sayang<span className="text-[#EC8305]">Beta</span>
        </Link>

        <nav className="space-x-2 font-medium uppercase text-sm">
          <Link
            to="/"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Beranda
          </Link>
          <Link
            to="/kegiatan"
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Kegiatan
          </Link>
          <Link
            to="/"
            state={{ scrollTo: "faq" }}
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm"
          >
            FAQ
          </Link>
          <div className="dropdown dropdown-hover px-2 py-2 text-black hover:text-[#EC8305] transition duration-200">
            <label
              className="flex cursor-pointer items-center gap-2"
              tabIndex="0"
            >
              Media Informasi
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
                to="/media-informasi/video"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Video
              </Link>
              <Link
                to="/media-informasi/majalah"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Majalah
              </Link>
              <Link
                to="/media-informasi/infografis"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Infografis
              </Link>
              <Link
                to="/media-informasi/artikel-kesehatan"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Artikel Kesehatan
              </Link>
            </div>
          </div>

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
                to="/layanan/rumah-penanganan-stunting-lintas-sektor-bagi-baduta"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Rumah Penanganan Stunting Lintas Sektor bagi Baduta (Rumah
                Pelita)
              </Link>
              <Link
                to="/layanan/rumah-gizi-pelangi-nusantara"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Rumah Gizi Pelangi Nusantara
              </Link>
              <Link
                to="https://epuskesmas.semarangkota.go.id/"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Pendaftaran Kunjungan E-Puskesmas
              </Link>
            </div>
          </div>

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
                to="/data/data-dokter"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Data Dokter Spesialis Anak Kota Semarang
              </Link>
              <Link
                to="/data/data-posyandu"
                className="block px-4 py-2 hover:bg-[#F9FAFB] transition duration-200"
              >
                Data Posyandu di Kota Semarang
              </Link>
            </div>
          </div>

          <Link
            to="/"
            state={{ scrollTo: "tentang" }}
            className="text-black hover:text-[#EC8305] px-2 py-2 rounded-sm transition duration-200"
          >
            Tentang
          </Link>
        </nav>

        <div className="space-x-4">
          {isLoggedIn ? (
            <Link
              onClick={handleLogout}
              className="text-[#FB4141] border-[#FB4141] btn-outline-primary hover:bg-[#FB4141] hover:text-white px-4 py-2 rounded-sm"
            >
              Logout
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
