import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import HairSalonShop from "./Pages/Hairsalon/Hairsalonshop/HairSalonShop"
import ChooseHairSalon from "./Pages/Hairsalon/ChooseHairsalonLocation/ChooseHairSalon";

function App() {
  return (
    <React.Fragment>
     <Router>
      <Routes>

        <Route 
          path="/"
          element={<Home/>}
        />
        
        <Route 
          path="/salonshops"
          element={<HairSalonShop/>}
        />

        <Route 
          path="/choosesalon"
          element={<ChooseHairSalon/>}
        />

      </Routes>
     </Router>
    </React.Fragment>
  );
}

export default App;
