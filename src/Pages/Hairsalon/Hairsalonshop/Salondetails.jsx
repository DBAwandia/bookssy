import { useLocation } from "react-router-dom"

export default function Salondetails() {
    const location = useLocation()
    const state = location.state
    return (
        <div>
            <h1>Salon Details</h1>
        </div>
    )
}