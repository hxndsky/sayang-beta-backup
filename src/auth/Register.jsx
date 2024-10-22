import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <Link to="/">
            <h1 className="text-4xl font-bold text-[#024CAA] mb-6 text-center">
              Sayang<span className="text-[#EC8305]">Beta</span>
            </h1>
          </Link>
          <p className="text-gray-600 mb-6 text-center">
            Buat akun untuk memulai
          </p>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                No. Telp
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan no. telp Anda"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Kata Sandi
              </label>
              <input
                type={showPassword ? "text" : "password"}
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

            {/* Konfirmasi Kata Sandi */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Konfirmasi Kata Sandi
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="********"
              />
              <div
                className="absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#024CAA] text-white py-2 rounded-lg hover:bg-[#024CAA] transition duration-200"
            >
              Buat Akun
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-black">
            Sudah punya akun?{" "}
            <Link
              to="/masuk"
              className="text-[#EC8305] hover:underline hover:text-[#024CAA]"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
