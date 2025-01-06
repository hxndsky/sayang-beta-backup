import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    console.log("Logging out... Redirecting to /masuk");
    window.location.href = "/masuk";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header for mobile */}
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

      {/* Off-Canvas Sidebar for mobile */}
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
                to="/dashboard-admin"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Dashboard
              </Link>
              <Link
                to="/dashboard-admin/validasi-artikel"
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Review Artikel
              </Link>
              <Link
                to="/dashboard-admin/artikel-diterima"
                state={{ scrollTo: "faq" }}
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Artikel Diterima
              </Link>
              <Link
                to="/dashboard-admin/artikel-ditolak"
                state={{ scrollTo: "faq" }}
                className="block text-black hover:text-[#EC8305] p-2 rounded-sm"
              >
                Artikel Ditolak
              </Link>
            </nav>
            <hr className="text-[#263238]" />

            <div className="mt-auto space-y-4">
              <Link
                onClick={handleLogout}
                className="block btn-outline-primary border-[#FB4141] text-[#FB4141] hover:bg-[#FB4141] hover:text-white p-2 rounded-sm text-center font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header for XL and above (Desktop) */}
      <div className="hidden xl:flex navbar-sticky z-30 justify-between items-center xl:px-36 xxl:px-72 py-4 bg-white border-b-[3px] border-[#024CAA] shadow-lg">
        <Link to="/" className="text-3xl font-bold text-[#024CAA]">
          Sayang<span className="text-[#EC8305]">Beta</span>
        </Link>

        <nav className="space-x-8 font-medium uppercase text-sm">
          <Link
            to="/dashboard-admin"
            className="text-black hover:text-[#EC8305] font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard-admin/validasi-artikel"
            className="text-black hover:text-[#EC8305] font-medium"
          >
            Review Artikel
          </Link>
          <Link
            to="/dashboard-admin/artikel-diterima"
            className="text-black hover:text-[#EC8305] font-medium"
          >
            Artikel Diterima
          </Link>
          <Link
            to="/dashboard-admin/artikel-ditolak"
            className="text-black hover:text-[#EC8305] font-medium"
          >
            Artikel Ditolak
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="text-[#FB4141] border-[#FB4141] btn-outline-primary hover:bg-[#FB4141] hover:text-white px-4 py-2 rounded-sm"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
