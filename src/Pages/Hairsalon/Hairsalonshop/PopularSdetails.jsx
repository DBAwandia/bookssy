import SalonShopService from "./SalonShopService";
import { useState } from "react";

export default function PopularSdetails() {
    const [showProduct, setShowProduct] = useState(true);
    
    function handleshowProduct() {
        setShowProduct(!showProduct);
    }
  return (
    <main className="select-none">
      <div className="flex justify-between" onClick={handleshowProduct}>
        <h2 className="text-gray-600">Popular Services </h2>
        <span>
            {showProduct ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span>
      </div>
      {showProduct && (
      <div>
        <SalonShopService />
      </div>)}
    </main>
  );
}
