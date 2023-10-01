import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allContext } from "../App";

export default function SignIn() {
    const nav = useNavigate();
    const { users, setCurrentUserIndex } = useContext(allContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        let exist = false
        users.forEach((val, index) => {
            if (val.username == username && val.password == password) {
                exist = true;
                setCurrentUserIndex(index);
            }
        });
        if (exist) {
            nav("/chooseParking");
        } else {
            alert("user not exist or password is not correct")
        }
    }

    return <div className="col">
        <input type="text" placeholder="username" onChange={(e) => { setUsername(e.target.value) }} />
        <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
        <div className="row">

            <button onClick={login}>sign in</button>
            <button onClick={() => { nav("/signup") }}>sign up</button>
        </div>
    </div>;
}
