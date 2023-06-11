import { useLocation } from "react-router-dom"
// import Navbar from '../../../components/Navbar'
// import Footer from '../../../components/Footer'
// import HeroBottom from '../../../components/HomeComponents/HeroBottom'
export default function Salondetails() {
    const location = useLocation();
    const state = location.state;
    const images = state.images;

    return (
        <>
   
                <img src={state.images[0]} alt="" />
        </>
    );
}
