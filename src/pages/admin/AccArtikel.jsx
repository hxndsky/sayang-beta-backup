import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/admin/Header";

const AccArtikel = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    setMessage("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/articles/pending",
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

  const handleStatusChange = async (articleId, status) => {
    setActionLoading(true);
    setActionMessage("");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:5000/api/articles/review/${articleId}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response.data); // Menampilkan response data untuk debugging
      setActionMessage(response.data.message);
      fetchArticles(); // Refresh artikel setelah status diubah
    } catch (error) {
      console.error(error); // Log error untuk debugging
      setActionMessage(
        error.response?.data?.message || "Gagal mengubah status artikel."
      );
    } finally {
      setActionLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
        <div className="w-full lg:ps-64">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Review Artikel</h1>

            {/* Pesan Global */}
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
                Tidak ada artikel untuk ditinjau.
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
                      className="w-full h-48 object-cover rounded-sm mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {article.title}
                    </h3>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 mt-2"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(article.description, 30),
                      }}
                    ></p>

                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() =>
                          handleStatusChange(article.id, "approved")
                        }
                        className={`px-4 py-2 text-sm rounded-sm text-white ${
                          actionLoading
                            ? "bg-green-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                        disabled={actionLoading}
                      >
                        {actionLoading ? "Memproses..." : "Setujui"}
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(article.id, "rejected")
                        }
                        className={`px-4 py-2 text-sm rounded-sm text-white ${
                          actionLoading
                            ? "bg-red-400 cursor-not-allowed"
                            : "bg-red-600 hover:bg-red-700"
                        }`}
                        disabled={actionLoading}
                      >
                        {actionLoading ? "Memproses..." : "Tolak"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pesan Aksi */}
            {actionMessage && (
              <div
                className={`mt-4 p-4 text-sm ${
                  actionMessage.includes("berhasil")
                    ? "text-green-600 bg-green-100 border-green-400"
                    : "text-red-600 bg-red-100 border-red-400"
                } border rounded-sm`}
              >
                {actionMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccArtikel;
