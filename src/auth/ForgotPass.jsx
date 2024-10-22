import React from "react";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <Link to="/">
            <h1 className="text-4xl font-bold text-[#024CAA] mb-6 text-center">
              Sayang<span className="text-[#EC8305]">Beta</span>
            </h1>
          </Link>
          <h3 className="text-gray-600 mb-6 text-center">
            Masukkan email untuk mengganti kata sandi
          </h3>

          <form className="space-y-6">
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
            <button
              type="submit"
              className="w-full bg-[#024CAA] text-white py-2 rounded-lg hover:bg-[#024CAA] transition duration-200"
            >
              Ganti Kata Sandi
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-black">
            Ingat kata sandi anda?{" "}
            <Link
              to="/masuk"
              className="text-[#EC8305] hover:text-[#024CAA] hover:underline"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
