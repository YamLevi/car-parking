import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ChooseParking from "./components/ChooseParking";
import AllParking from "./components/AllParking";
import History from "./components/History";
export const allContext = React.createContext();

function App() {
  const [users, setUsers] = useState([]);
  const cities = [
    { name: "Tel-Aviv", price: 150 },
    { name: "Netanya", price: 100 },
    { name: "Rehovot", price: 50 }
  ]

  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  return (
    <div className="App">
      <allContext.Provider
        value={{
          users, setUsers, cities, currentUserIndex, setCurrentUserIndex
        }}
      >
        <h1>SV Parking</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chooseParking" element={<ChooseParking />} />
            <Route path="/allParking" element={<AllParking />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </allContext.Provider>
    </div>
  );
}

export default App;
