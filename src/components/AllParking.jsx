import { ParkingPopup } from "./ParkingPopup";
import React, { useContext } from "react";
import { allContext } from "../App";
import ParkingMenu from "./ParkingMenu";
import { useNavigate } from "react-router-dom";

export default function AllParking() {
  const nav = useNavigate();

  const { users, setUsers, currentUserIndex: currentUserIndex } = useContext(allContext);

  const pay = (index) => {
    let temp = users;
    temp[currentUserIndex].parkingHistory[index].paid = true;
    setUsers([...temp]);
    nav("/history");
  };

  return (
    <div className="container">
      <div className="row">
        <ParkingMenu />
        {users[currentUserIndex].parkingHistory.map((val, index) => {
          if (val.paid == false) {
            return (
              <div>
                <ParkingPopup
                  key={index}
                  users={users}
                  currentUserIndex={currentUserIndex}
                  val={val}
                  pay={pay}
                  index={index}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
