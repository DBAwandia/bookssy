import React from "react";

export default function HomeBlogCards({ title, image }) {
  return (
    <>
      <section className="lg:px-2">
        <div className="w-full lg:rounded-xl rounded-lg bg-booksyWhite shadow-lg">
          <div className="w-full relative">
            <img
              src={image}
              alt={title}
              className="object-cover rounded-t-xl w-[100%] h-[14rem] md:rounded-lg rounded-md cursor-pointer"
              
            />
          </div>

          <div className="p-5">
            <h4 className="text-xl font-semibold text-booksyGray">{title}</h4>
          </div>
        </div>
      </section>
    </>
  );
}
