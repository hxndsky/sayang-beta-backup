import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadArtikel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !description || !image) {
      setMessage("Semua field harus diisi!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description); // HTML string
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/articles/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Artikel berhasil dikirim!");
      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Terjadi kesalahan, coba lagi nanti."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#024CAA]">
        <div
          className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10"
          data-aos="fade-down"
        >
          <div className="breadcrumbs text-base">
            <ul>
              <li>
                <Link to="/" className="hover:text-[#EC8305]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/media-informasi/artikel-kesehatan"
                  className="hover:text-[#EC8305]"
                >
                  Artikel Kesehatan
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">Upload Artikel</Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            Upload Artikel
          </h1>
        </div>
      </section>
      <section className="bg-white">
        <div
          className="py-6 xxl:px-72 xl:px-36 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <form onSubmit={handleSubmit} className=" mx-auto p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Judul Artikel
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm text-gray-700 bg-transparent focus:ring-2 focus:ring-[#024CAA] focus:outline-none"
                placeholder="Masukkan judul artikel"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Deskripsi
              </label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="w-full rounded-sm text-gray-700 bg-transparent focus:ring-2 focus:ring-[#024CAA] focus:outline-none"
                placeholder="Tulis deskripsi artikel"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Unggah Gambar
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-[#024CAA] file:text-white
        hover:file:bg-[#EC8305]
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-[#024CAA]
        dark:hover:file:bg-[#EC8305]"
                accept="image/*"
                required
              />
            </div>

            {preview && (
              <div className="mb-4">
                <p className="text-gray-700 mb-2">Preview Gambar:</p>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-64 object-cover rounded-md"
                />
              </div>
            )}

            {message && (
              <div
                className={`p-4 mb-4 text-sm ${
                  message.includes("berhasil")
                    ? "text-green-600"
                    : "text-red-600"
                } bg-transparent border ${
                  message.includes("berhasil")
                    ? "border-green-400"
                    : "border-red-400"
                } rounded-md`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-white font-medium rounded-sm ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#024CAA] hover:bg-[#EC8305]"
              }`}
            >
              {loading ? "Mengirim..." : "Kirim Artikel"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UploadArtikel;
