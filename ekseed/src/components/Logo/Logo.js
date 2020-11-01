import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {NavLink} from "react";


import "./Logo.css"


function Logo() {
    const [user, setUser] = useRecoilState(userState);

    return(
        <div className="container">
            {/* <ul> */}

            
            <div>
            {/* <NavLink to="/" > */}
                <h1 id="logo">Ekseed</h1>
                {/* </NavLink> */}
            </div>

            {/* {user ? ( */}
            {/* <>  */}
                <div>
                {/* <NavLink to={"/user"}> */}
                    <h3>LIZAY</h3>
                    {/* </NavLink> */}
                </div>

        </div>
    )
}

export default Logo;