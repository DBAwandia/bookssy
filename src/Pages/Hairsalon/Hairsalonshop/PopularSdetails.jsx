import SalonShopService from "./SalonShopService";
import { useState } from "react";

export default function PopularSdetails() {
    const [showProduct, setShowProduct] = useState(true);
    const [showlocS, setShowlocS] = useState(false);
    function handleshowProduct() {
        setShowProduct(!showProduct);
    }
    const [showExtension, setShowExtension] = useState(false);
    const [shownatural, setShownatural] = useState(false);
    const [showbasicloc, setShowbasicloc] = useState(false);
    const [showclasses, setShowclasses] = useState(false);
    const [showwick, setShowwick] = useState(false);
    const [showsisterloc, setShowsisterloc] = useState(false);

    function handleshowlocS() {
        setShowlocS(!showlocS);
    }
    function handleshowExtension() {
        setShowExtension(!showExtension);
    }
    function handleshownatural() {
        setShownatural(!shownatural);
    }
    function handleshowbasicloc() {
        setShowbasicloc(!showbasicloc);
    }
    function handleshowclasses() {
        setShowclasses(!showclasses);
    }
    function handleshowwick() {
        setShowwick(!showwick);
    }
    function handleshowsisterloc() {
        setShowsisterloc(!showsisterloc);
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
      <br />
      {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshowlocS}>
        <h2 className="text-xl font-bold">
            <span>
            {showlocS ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
        Loc Styles </h2>
      </div>
      {showlocS && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
    <br />
        {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshowExtension}>
        <h2 className="text-xl font-bold">
            <span>
            {showExtension ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
        Extensions </h2>
      </div>
      {showExtension && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
      <br />
      {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshownatural}>
        <h2 className="text-xl font-bold">
            <span>
            {shownatural ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
        Natural Hair </h2>
      </div>
      {shownatural && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
      <br />
      {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshowbasicloc}>
        <h2 className="text-xl font-bold">
            <span>
            {showbasicloc ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
    Basic Loc Services </h2>
      </div>
      {showbasicloc && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
      <br />
      {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshowwick}>
        <h2 className="text-xl font-bold">
            <span>
            {showwick ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
        Wick </h2>
      </div>
      {showwick && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
      <br />
            {/* !!!!!!!!!!!!!!!!!!!!!!!! */}
            <div  onClick={handleshowsisterloc}>
        <h2 className="text-xl font-bold">
            <span>
            {showsisterloc ? <i className="fa-solid fa-chevron-up text-gray-600"></i> : <i className="fa-solid fa-chevron-down text-gray-600"></i>}
        </span> {"  "}
        Sister Locs </h2>
      </div>
      {showsisterloc && (
      <div>
        <SalonShopService />
      </div>)}
      {/* !!!!!!!!!!!!!!!!!!! */}
      <br />
    </main>
  );
}
    
    
    
    
    
    


 
    
    
    
    


