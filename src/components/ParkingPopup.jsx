import React, { useState } from "react";

export const ParkingPopup = ({ users, currentUserIndex, val, pay, index }) => {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    if (open) {
      return (
        <div className="container">
          <div className="row">
            <h3>Cost: {val.price}</h3>
            <button onClick={() => pay(index)}>Pay</button>
          </div>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      );
    }
  };
  return (
    <div>
      <div
        className="col"
        onClick={() => {
          setOpen(true);
        }}
      >
        <h3>Car: {users[currentUserIndex].carType}</h3>
        <h3>Number: {users[currentUserIndex].carNumber}</h3>
        <h3>City:{val.city}</h3>
      </div>
      {openPopup()}
    </div>
  );
};
