import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#024CAA] text-white py-4">
      {/* Perbesar lebar container */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 xl:px-36 xxl:px-72">
        {/* Logo and description */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-white">Sayang</span>
            <span className="text-[#EC8305]">Beta</span>
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur dolol drakgonil adipiscing
            elit aliquam mauris
          </p>
        </div>

        {/* Kontak Kami */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Kontak Kami</h2>
          <p>
            Jl. Pandanaran No.79, Mugassari,
            <br />
            Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249
          </p>
          <p className="mt-2 font-medium">WA Helpdesk: </p>
          <Link
            to="https://wa.me/62895376860088?text=Halo,%20saya%20butuh%20bantuan"
            target="_blank"
            rel="noopener noreferrer"
            className="ripple hover:text-[#EC8305]"
          >
            0895376860088
          </Link>
          <p className="mt-2 font-medium">Email: </p>
          <Link
            to="mailto:dkk.semarang@gmail.com?subject=Bantuan&body=Halo,%20saya%20butuh%20bantuan"
            className="ripple hover:text-[#EC8305]"
          >
            dkk.semarang@gmail.com
          </Link>
        </div>

        {/* Lokasi (Google Maps Embed) */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Lokasi</h2>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.570228624187!2d110.41011977436648!3d-7.00390139493137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c99bbd93e59%3A0xd781aa67c4b15958!2sJl.%20Pandanaran%20No.79%2C%20Mugassari%2C%20Kec.%20Semarang%20Sel.%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050249!5e0!3m2!1sen!2sid!4v1697320895584!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div>
          
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="mt-4 mb-4 text-white opacity-50" />
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center px-8 xl:px-32 xxl:px-72 lg:px-8 mt-4">
        <p className="text-base">
          Copyright © 2024{" "}
          <span className="font-semibold">Dinas Kesehatan Kota Semarang</span> |
          All Rights Reserved
        </p>
        <div className="flex space-x-4 text-lg">
          <Link to="https://www.facebook.com/dinkeskotasemarang" className="text-white hover:text-[#EC8305]">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="https://twitter.com/dkksemarang" className="text-white hover:text-[#EC8305]">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com/dkksemarang" className="text-white hover:text-[#EC8305]">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="https://www.tiktok.com/@dkksemarang" className="text-white hover:text-[#EC8305]">
            <i className="fab fa-tiktok"></i>
          </Link>
          <Link to="https://www.youtube.com/channel/UCVL58VGILY3shnpedmPpakg" className="text-white hover:text-[#EC8305]">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="https://dinkes.semarangkota.go.id/" className="text-white hover:text-[#EC8305]">
            <i className="fas fa-globe"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
