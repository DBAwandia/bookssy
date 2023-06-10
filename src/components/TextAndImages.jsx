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
      className={`w-full gap-20 ${
        reverse === true ? "flex flex-row-reverse" : "flex flex-row"
      } justify-between items-center`}
    >
      <div className="w-1/2 ">
        <h1 className="text-4xl font-semibold text-booksyGray mb-10">
          {title}
        </h1>
        <p className="my-2">{text1}</p>
        <p className="my-2">{text2}</p>
        <p className="my-2">{text3}</p>
      </div>

      <div className="w-1/2 ">
        <img src={image} alt={title} style={{ width: 400, height: 400 }} />
      </div>
    </div>
  );
}
