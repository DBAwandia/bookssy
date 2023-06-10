import React from "react";
import AppStore from "../assets/DownloadAppStore.svg";
import PlayStore from "../assets/DownloadPlayStore.svg";
import Logo from "../assets/BooksyLogo.png";

import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const footLinks = [
  {
    name: "Blog",
    link: "",
  },
  {
    name: "About Us",
    link: "",
  },
  {
    name: "FAQ",
    link: "",
  },
  {
    name: "Privacy Policy",
    link: "",
  },
  {
    name: "Terms Of Service",
    link: "",
  },
  {
    name: "Careers",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

const socialLinks = [
  {
    icon: <FiInstagram size={20} />,
    link: "",
  },

  {
    icon: <FaFacebookF size={20} />,
    link: "",
  },

  {
    icon: <BsTwitter size={20} />,
    link: "",
  },
];

export default function Footer() {
  return (
    <section className="w-full p-10 bg-booksyGray">
      {/* Top */}
      <div className="flex flex-row w-full justify-between items-center">
        {/* links */}
        <div className="w-1/2 flex flex-row gap-5 text-[0.75rem] text-booksyWhite font-medium">
          {footLinks.map((link, index) => (
            <a key={index} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>

        {/* App Logos */}
        <div className="w-1/2 flex flex-row gap-5 justify-end items-center">
          <img
            src={AppStore}
            alt="Download From App Store"
            style={{ width: 150, height: 150 }}
          />

          <img
            src={PlayStore}
            alt="Download From App Store"
            style={{ width: 150, height: 150 }}
          />
        </div>
      </div>

      {/* Line */}
      <div className="w-full h-[1px] bg-gray-600" />

      {/* Bottom */}
      <div className="flex flex-row w-full justify-between items-center mt-10">
        <div className="flex flex-row w-1/2 gap-5">
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="Booksy Logo"
                style={{ width: "100px", height: "22px " }}
              />
            </a>
          </div>

          <small className="text-gray-400 font-medium">
            © 2023 Booksy Inc. All rights reserved
          </small>
        </div>

        <div className="flex flex-row w-1/2 gap-5 justify-end items-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link}>
              <div className="w-[40px] h-[40px] rounded-full bg-[#c2c2c2] flex justify-center items-center">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
