// import React from "react";

export default function BooksySliderShopCard({
  title,
  address,
  imageURL,
  rating,
  review,
}) {
  return (
    <>
      <section className="lg:px-2">
        <div className="w-full relative  rounded-[10px]">
          <div className="bg-black/80 w-[80px] h-[50px] absolute top-0 right-0 rounded-tr-[10px] rounded-bl-[10px]  text-center text-booksyWhite">
            <p className="font-extrabold">{rating}</p>
            <p className="text-[0.6rem]">{`${review} reviews`}</p>
          </div>

          <img
            src={imageURL}
            alt={title}
            className="w-[100%] h-[14rem] md:rounded-lg rounded-md object-cover" 
          />
        </div>
        <h3 className="font-bold text-booksyGray text-[0.85rem] lg:mt-1 mt-3">
          {title.length > 35 ? `${title.substring(0, 35)}...` : title}
        </h3>
        <small className="text-booksyGray text-[0.75rem]">{address}</small>
      </section>
    </>
  );
}
