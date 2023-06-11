import { useLocation } from "react-router-dom"
import SalonDimage from "./SalonDImages";
// import Navbar from '../../../components/Navbar'
// import Footer from '../../../components/Footer'
// import HeroBottom from '../../../components/HomeComponents/HeroBottom'
export default function Salondetails() {
    const location = useLocation();
    const state = location.state;

    return (
        <>
            {/* NAVBAR*/}
            <main className="pt-9 px-2">
                <aside>
                    {/* image slides */}
                    <SalonDimage 
                    images={state.images}
                    />
                </aside>
                <aside>
                    <div>

                    </div>
                </aside>
            </main>
        </>
    );
}
//    {state.id} <br /> {state.name}dff <br/> {state.address} <br /> {state.ratings} <br /> {state.reviews} {state.aboutUs} 
//    <img src={state.images[0]} alt="" />