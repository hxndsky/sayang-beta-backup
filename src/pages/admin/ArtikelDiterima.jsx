import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/admin/Header";

const ArtikelDiterima = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    setMessage("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/articles/approved",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setArticles(response.data);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Gagal memuat artikel. Coba lagi nanti."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Fungsi untuk memotong teks menjadi 50 kata
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
        <div className="py-20 md:px-2 xl:px-[8rem] sm:px-2 xxl:px-[17rem]">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-black">
              Artikel Diterima
            </h1>

            {message && (
              <div
                className={`p-4 text-sm ${
                  message.includes("berhasil")
                    ? "text-green-600 bg-green-100 border-green-400"
                    : "text-red-600 bg-red-100 border-red-400"
                } border rounded-sm`}
              >
                {message}
              </div>
            )}

            {loading ? (
              <p className="text-center text-gray-700 dark:text-gray-300">
                Memuat artikel...
              </p>
            ) : articles.length === 0 ? (
              <p className="text-center text-gray-700 dark:text-gray-300">
                Tidak ada artikel yang diterima.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 bg-white dark:bg-neutral-800 shadow-sm border rounded-sm"
                  >
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-56 object-cover rounded-sm mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800">
                      {article.title}
                    </h3>

                    <p
                      className="text-sm text-gray-600 mt-2"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(article.description, 30),
                      }}
                    ></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtikelDiterima;
