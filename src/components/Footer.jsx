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
    <section className="w-full pb-[4rem] lg:pb-[0.5rem]  lg:p-10 p-3 bg-booksyGray">
      {/* Top */}
      <div className="flex flex-row w-full justify-between items-center">
        {/* links */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 py-[0.5rem] lg:flex lg:flex-row lg:gap-5 gap-2 text-[0.75rem] text-booksyWhite font-medium">
          {footLinks.map((link, index) => (
            <a key={index} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>

        {/* App Logos */}
        <div className="lg:w-1/2 mt-[9rem] lg:mt-0 flex flex-row gap-5 justify-end items-center">
          <img
            src={AppStore}
            alt="Download From App Store"
            className="w-[80px] h-[30px] md:h-[45px] "
            // style={{ width: 150, height: 150 }}
          />

          <img
            src={PlayStore}
            alt="Download From App Store"
            className="w-[80px] h-[30px] md:h-[45px] "

          />
        </div>
      </div>

      {/* Line */}
      <div className="w-full h-[1px] bg-gray-600" />

      {/* Bottom */}
      <div className="flex flex-row w-full justify-between items-center mt-10">
        <div className="grid grid-cols-1 lg:flex lg:flex-row lg:w-1/2 lg:gap-5 gap-3">
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="Booksy Logo"
                className="lg:w-[100px] lg:h-[22px] w-[60px] h-[17px]"
              />
            </a>
          </div>

          <small className="text-gray-400 font-medium">
            © 2024 Booksy Inc. All rights reserved
          </small>
        </div>

        <div className="flex flex-row lg:w-1/2 md:gap-5 gap-2 justify-end items-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link}>
              <div className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#c2c2c2] flex justify-center items-center">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
