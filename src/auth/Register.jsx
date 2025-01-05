import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const [username, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Cek apakah semua data sudah benar
    if (!username || !phone || !email || !password) {
      return setError("Semua field wajib diisi");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          username,
          phone,
          email,
          password,
          role: "user", // Pastikan role sudah di set
        }
      );
      navigate("/masuk");
    } catch (err) {
      console.error("Registration Error:", err); // Log lebih rinci untuk debugging
      setError("Registrasi gagal. Pastikan data yang Anda masukkan benar.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
          data-aos="fade-zoom-in"
        >
          <Link to="/">
            <h1 className="text-4xl font-bold text-[#024CAA] mb-6 text-center">
              Sayang<span className="text-[#EC8305]">Beta</span>
            </h1>
          </Link>
          <p className="text-gray-600 mb-6 text-center">
            Buat akun untuk memulai
          </p>

          {/* Menampilkan error message jika registrasi gagal */}
          {error && (
            <div className="mb-4 text-red-500 text-center">{error}</div>
          )}

          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan nama lengkap Anda"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                No. Telp
              </label>
              <input
                type="text"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan no. telp Anda"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
