import React, { useContext, useState } from "react";
import { allContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const nav = useNavigate();
    const { users, setUsers } = useContext(allContext);
    const [username, setUsername] = useState("");
    const [carNumber, setcarNumber] = useState("");
    const [carType, setCarType] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState({});
    const signup = () => {
        let containUpperCase = false;
        for (let i = 0; i < username.length; i++) {
            if (
                username.charAt(i) == username.charAt(i).toUpperCase() ||
                !isNaN(username.charAt(i))
            ) {
                containUpperCase = true;
            }
        }
        let hasLetters = false;
        for (let i = 0; i < carNumber.length; i++) {
            if (isNaN(carNumber.charAt(i))) {
                hasLetters = true;
            }
        }
        if (containUpperCase) {
            setErr({
                error: "Username should only have lowercase letters",
                type: 1,
            });
        } else if (hasLetters || carNumber.length !== 8) {
            setErr({
                error: "Car number should have 8 numbers and numbers only",
                type: 2,
            });
        } else if (carType.length == 0) {
            setErr({
                error: "Please enter car type",
                type: 3,
            });
        } else if (password.length < 4 || password.length > 8) {
            setErr({
                error: "Password should be 4-8 charecters",
                type: 4,
            });
        } else {
            setUsers([
                ...users,
                {
                    username: username,
                    carNumber: carNumber,
                    carType: carType,
                    password: password,
                    parkingHistory: [],
                },
            ]);
            nav("/");
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            {err.type == 1 ? err.error : null}
            <br />
            <input
                type="text"
                placeholder="Car Number"
                onChange={(e) => setcarNumber(e.target.value)}
            />
            <br />
            {err.type == 2 ? err.error : null}
            <br />
            <input
                type="text"
                placeholder="Car Type"
                onChange={(e) => setCarType(e.target.value)}
            />
            <br />
            {err.type == 3 ? err.error : null}
            <br />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {err.type == 4 ? err.error : null}
            <div className="col">
                <button onClick={signup}>Sign-Up</button>
            </div>
        </div>
    );
}
