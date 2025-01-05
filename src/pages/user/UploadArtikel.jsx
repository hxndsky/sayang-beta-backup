import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

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
    formData.append("description", description);
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
      <section className="bg-[#024CAA] py-10">
        <div className="lg:px-6 xl:px-36 sm:px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Kirim Artikel</h1>
          <p className="text-lg mt-4">
            Bagikan informasi kesehatanmu kepada banyak orang!
          </p>
        </div>
      </section>
      <section className="py-12 xl:px-36 sm:px-6 lg:px-8 bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-gray-50 shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Judul Artikel
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#024CAA] focus:outline-none"
              placeholder="Masukkan judul artikel"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Deskripsi
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#024CAA] focus:outline-none"
              rows="5"
              placeholder="Tulis deskripsi artikel"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Unggah Gambar
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none"
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
                message.includes("berhasil") ? "text-green-600" : "text-red-600"
              } bg-gray-100 border ${
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
                : "bg-[#024CAA] hover:bg-[#013b85]"
            }`}
          >
            {loading ? "Mengirim..." : "Kirim Artikel"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default UploadArtikel;
