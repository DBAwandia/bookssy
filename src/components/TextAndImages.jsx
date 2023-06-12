import React from "react";

export default function TextAndImages({
  title,
  text1,
  text2,
  text3,
  image,
  reverse,
}) {
  return (
    <div
      className={`w-full lg:gap-20 gap-5 ${
        reverse === true ? "grid grid-cols-1 lg:flex lg:flex-row-reverse" : "grid grid-cols-1 lg:flex lg:flex-row"
      } justify-between items-center`}
    >
      <div className="lg:w-1/2 w-full">
        <h1 className="lg:text-4xl text-[1.2rem] font-semibold text-booksyGray mb-10">
          {title}
        </h1>
        <p className="my-2">{text1}</p>
        <p className="my-2">{text2}</p>
        <p className="my-2">{text3}</p>
      </div>

      <div className="lg:w-1/2 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"

        />
      </div>
    </div>
  );
}