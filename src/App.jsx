import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import HairSalonShop from "./Pages/Hairsalon/Hairsalonshop/HairSalonShop"
import ChooseHairSalon from "./Pages/Hairsalon/ChooseHairsalonLocation/ChooseHairSalon";
import Salondetails from "./Pages/Hairsalon/Hairsalonshop/Salondetails";
import BarberShop from "./Pages/Barbershop/TheBarberShop/BarberShop";
import ChooseBarberShop from "./Pages/Barbershop/ChooseBarberShop/ChooseBarberShop";
import Language from "./Pages/Language/Language";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <React.Fragment>
     <Router>
      <Routes>

        {/* home page */}
        <Route 
          path="/"
          element={<Home/>}
        />

        {/* search for products */}
        <Route 
          path="/languages"
          element={<Language/>}
        />
        
        {/* salon shops page for each loaction / city */}
        <Route 
          path="/salonshops"
          element={<HairSalonShop/>}
        />

        {/* salonshop page if location / city is not choosen by user */}
        <Route 
          path="/choosesalon"
          element={<ChooseHairSalon/>}
        />

        {/* more details of a salon shop when clicked by user and wants its services */}
        <Route 
          path ="/salondetails/:id" 
          element={<Salondetails/>} 
        />

        {/* salon shops page for each loaction / city */}
        <Route 
          path="/barbershops"
          element={<BarberShop/>}
        />
        
        <Route 
          path="/login"
          element={<Login/>}
        />

        {/* salonshop page if location / city is not choosen by user */}
        <Route 
          path="/choosebarbershop"
          element={<ChooseBarberShop/>}
        />

      </Routes>
     </Router>
    </React.Fragment>
  );
}

export default App;
