import { useLocation } from "react-router-dom"

export default function Salondetails() {
    const location = useLocation()
    const state = location.state
    return (
        <div>
            <h1>{state.id}</h1>
        </div>
    )
}