import React from "react";
import { motion } from "framer-motion";

export default function GetInspiredCard({ name, imageURL }) {
  return (
    <>
      <motion.div
        whileHover={{ y: -50 }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-[150px] h-[185px] p-2 bg-booksyWhite flex flex-col justify-center items-center rounded-lg shadow-xl cursor-pointer"
      >
        <img src={imageURL} alt={name} style={{ width: 80, height: 80 }} />

        <p className="font-bold mt-5">{name}</p>
      </motion.div>
    </>
  );
}
