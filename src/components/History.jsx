import React, { useContext, useState } from "react";
import ParkingMenu from "./ParkingMenu";
import { allContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function History() {
  const nav = useNavigate();
  const { users, currentUserIndex } = useContext(allContext)
  const [sort, setSort] = useState("");


  let activeFlag = false
  const activeParking = users[currentUserIndex].parkingHistory.map((val) => {
    if (val.paid == false) {
      activeFlag = true
    }
  })

  const restore = (idx) => {
    if (activeFlag) {
      alert("Active parking is running")
    }
    else {
      let temp = users
      temp[currentUserIndex].parkingHistory[idx].paid = false
      nav("/allParking")
    }
  }

  const sortedHistory = users[currentUserIndex].parkingHistory.sort((a, b) => {
    if (sort == "low") {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  return (
    <div className="container">
      <div className="row">
        <ParkingMenu />
        <div>
          {sortedHistory.map((val, idx) => {
            if (val.paid == true) {
              return (
                <div key={idx}>
                  <h3>Car: {users[currentUserIndex].carType}</h3>
                  <h3>Number: {users[currentUserIndex].carNumber}</h3>
                  <div className="row">
                    <h3>Cost: {val.price}</h3>
                    <button onClick={() => restore(idx)}>Restore</button>
                  </div>
                </div>
              );
            }
          })}
          <div>
            <h4>Sort by</h4>{" "}
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
