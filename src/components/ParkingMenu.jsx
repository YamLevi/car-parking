import React from "react";
import { useNavigate } from "react-router-dom";

export default function ParkingMenu() {
    const nav = useNavigate()

    return <div className="parkingMenu">
        <button onClick={() => { nav("/allParking") }}>All Parking</button>
        <button onClick={() => { nav("/chooseParking") }}>Parking</button>
        <button onClick={() => { nav("/history") }}>History</button>
        <button onClick={() => { nav("/") }}>Exit</button>
    </div>;
}
