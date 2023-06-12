import React from "react";

export default function HomeBlogCards({ title, image }) {
  return (
    <>
      <section className="lg:px-2">
        <div className="w-full lg:rounded-xl rounded-lg bg-booksyWhite shadow-lg">
          <div className="">
            <img
              src={image}
              alt={title}
              className="bg-cover rounded-t-xl"
              style={{ objectFit: "cover" }}
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
