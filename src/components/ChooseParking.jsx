import React, { useContext, useState } from "react";
import { allContext } from "../App";
import { useNavigate } from "react-router-dom";
import ParkingMenu from "./ParkingMenu";


export default function ChooseParking() {
    const nav = useNavigate();
    const { cities, users, setUsers, currentUserIndex } = useContext(allContext);
    const [city, setCity] = useState({});
    let activeFlag = false
    const activeParking = users[currentUserIndex].parkingHistory.map((val) => {
        if (val.paid == false) {
            activeFlag = true
        }
    })
    const start = () => {
        if (!city.name) {
            alert("Please choose a city");
        }
        else if (activeFlag == true) {
            alert("Active parking is running")
        }
        else {
            let temp = users;
            users[currentUserIndex].parkingHistory.push({
                city: city.name,
                price: city.price,
                paid: false,
            });
            setUsers([...temp]);
            nav("/allParking");
        }
    };

    return (
        <div className="col">
            <div className="row">
                <ParkingMenu />
                <div>
                    <select
                        onChange={(e) => {
                            setCity(JSON.parse(e.target.value));
                        }}
                    >
                        <option>Choose City</option>
                        {cities.map((val, index) => {
                            return <option key={index} value={JSON.stringify(val)}>{val.name}</option>;
                        })}
                    </select>
                    <h1>{users[currentUserIndex].carNumber}</h1>
                    <button onClick={start}>Start Parking</button>
                </div>
            </div>
        </div>
    );
}
