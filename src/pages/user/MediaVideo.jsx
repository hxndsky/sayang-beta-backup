import React from "react";
import { Link } from "react-router-dom";
import DummyVideo from "../../assets/dummy/DummyVideo";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

const MediaVideo = () => {
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
                <span className="font-semibold text-white">Video</span>
              </li>
            </ul>
          </div>
          <h1 className="w-3/4 text-5xl font-bold pt-6 text-white">
            Media Informasi | Video
          </h1>
        </div>
      </section>

      {/* Kategori */}
      <section className="bg-white">
        <div className="pt-8 xl:px-36 sm:px-6 lg:px-8 xxl:px-72" data-aos="fade-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <Link to="/media-informasi/video" className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative">
              <h3 className="mb-1 text-base font-semibold text-gray-900">Video</h3>
            </Link>
            <Link to="/media-informasi/infografis" className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative">
              <h3 className="mb-1 text-base font-semibold text-gray-900">Infografis</h3>
            </Link>
            <Link to="/media-informasi/majalah" className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative">
              <h3 className="mb-1 text-base font-semibold text-gray-900">Majalah</h3>
            </Link>
            <Link to="/media-informasi/artikel-kesehatan" className="block p-2 bg-white border border-gray-200 rounded-sm shadow-sm hover:border-[#024CAA] hover:shadow-lg transition relative">
              <h3 className="mb-1 text-base font-semibold text-gray-900">Artikel Kesehatan</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 xxl:px-72 xl:px-36 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DummyVideo.map((video) => {
            const videoId = video.videoUrl.split("v=")[1]; // Extract video ID

            return (
              <a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-lg block"
              >
                <div className="relative pt-[56.25%]"> {/* Aspect ratio for 16:9 video */}
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full rounded-sm"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-[#024CAA] mt-2">{video.date}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MediaVideo;
