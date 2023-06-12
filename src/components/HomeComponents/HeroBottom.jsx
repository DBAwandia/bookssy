// import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "HairSalon", link: "/choosesalon" },
  { name: "Barbershop", link: "/choosebarbershop" },
  { name: "NailSalon", link: "" },
  { name: "SkinCare", link: "" },
  { name: "Eyebrows&Lashes", link: "" },
  { name: "Massage", link: "" },
  { name: "MakeupArtist", link: "" },
  { name: "DaySpa", link: "" },
  { name: "More...", link: "" },
];

export default function HeroBottom() {
  return (
    <section className="w-[100%] overflow-x-scroll element  flex lg:flex-row gap-3 items-center lg:justify-between text-[0.85rem] text-white font-medium">
      {links.map((link, index) => (
        <Link
          to={link.link}
          key={index}
          className={`${
            index !== links.length - 1 &&
            "lg:hover:underline items-center px-[1rem] lg:hover:decoration-white lg:hover:decoration-solid lg:hover:decoration-2 lg:hover:underline-offset-[18px]"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </section>
  );
}
