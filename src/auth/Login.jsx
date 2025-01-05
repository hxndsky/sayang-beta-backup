import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Menyimpan pesan error jika login gagal
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        username,
        password,
      });

      // Simpan token JWT ke localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect pengguna berdasarkan role yang diterima dari backend
      const redirectTo = response.data.redirectTo;
      navigate(redirectTo); // Arahkan pengguna ke halaman yang sesuai dengan role mereka
    } catch (err) {
      setError("Login gagal. Pastikan kredensial Anda benar.");
    }
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

          {/* Menampilkan error message jika login gagal */}
          {error && (
            <div className="mb-4 text-red-500 text-center">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama Pengguna
              </label>
              <input
                type="text"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#024CAA] bg-transparent text-black"
                placeholder="Masukkan nama pengguna"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
