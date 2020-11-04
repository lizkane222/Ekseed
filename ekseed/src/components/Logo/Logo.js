import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {NavLink} from "react";
import User from "../../models/UserModel"

import "./Logo.css"


function Logo() {
    const [user, setUser] = useRecoilState(userState);

    const currentUser = localStorage.getItem("uid")



    return(
        <div className="logoContainer">
            
            <div>
                {/* <NavLink to="/ekseed" > */}
                    <h1 id="logo">Ekseed</h1>
                    {/* </NavLink> */}
            </div>

            {/* user ? { */}
                <div>
                    {/* <NavLink to={"/user"}> */}
                        {/* <h3>{user.username}</h3> */}
                            {/* <h3>{currentUser.uid}</h3> */}
                            {/* <h3>Lizay</h3> */}
                        {/* </NavLink> */}
                </div>
            {/* } */}
 



            {/* // <NavLink to="/" >Home</NavLink> */}

            
        </div>
    )
}

export default Logo;