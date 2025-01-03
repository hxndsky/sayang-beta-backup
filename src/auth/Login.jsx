import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div
          className="w-full max-w-lg p-8 bg-white rounded-sm shadow-lg"
          data-aos="fade-zoom-in"
        >
          <Link to="/">
            <h1 className="text-4xl font-bold text-[#024CAA] mb-6 text-center">
              Sayang<span className="text-[#EC8305]">Beta</span>
            </h1>
          </Link>
          <p className="text-gray-600 mb-6 text-center">Masuk ke akun Anda</p>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Kata Sandi
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="********"
              />
              <div
                className="absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#024CAA] text-white py-2 rounded-sm hover:bg-[#091057] transition duration-200"
            >
              Masuk
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-black">
            Tidak punya akun?{" "}
            <Link
              to="/buat-akun"
              className="text-[#EC8305] hover:underline hover:text-[#024CAA]"
            >
              Buat akun
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
