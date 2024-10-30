import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import DummyVideo from "../../assets/dummy/DummyVideo";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const DetailVideo = () => {
  const { slug } = useParams();
  const video = DummyVideo.find((item) => item.slug === slug);

  if (!video) {
    return <p>Video tidak ditemukan</p>;
  }

  return (
    <>
      <Header />
      <section className="bg-[#024CAA]">
        <div className="lg:px-6 xxl:px-72 xl:px-36 md:px-4 sm:px-4 pt-24 pb-10">
          <div className="breadcrumbs text-base">
            <ul>
              <li>
                <Link to="/" className="hover:text-[#EC8305]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/media-informasi/video"
                  className="hover:text-[#EC8305]"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-white">{video.title}</Link>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            {video.title}
          </h1>
        </div>
      </section>

      <section>
        <div className="pb-8 pt-12 bg-white xxl:px-72 xl:px-36 sm:px-6 lg:px-8 text-lg">
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <p>
              Diposting pada: <span className="font-medium">{video.date}</span>
            </p>
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-400" />
              <span className="font-medium">771 kali dilihat</span>
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoUrl}`}
              title={video.title}
              className="rounded-sm shadow-md w-full md:w-3/4 lg:w-2/3"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-gray-800">
            <p>{video.content}</p>
          </div>
          <h2 className="flex items-center gap-4 text-3xl font-bold text-[#EC8305] mt-12">
            Video Lainnya
            <div className="flex-grow">
              <hr className="border-gray-300" />
            </div>
          </h2>
        </div>
      </section>

      <section>
        <div className="pb-12 bg-white xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DummyVideo.slice(0, 4).map((video) => (
              <Link
                to={`/media-informasi/video/${video.slug}`}
                key={video.id}
                className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#024CAA] mt-4">{video.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailVideo;
