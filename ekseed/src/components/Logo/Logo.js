import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {NavLink} from "react";
import User from "../../models/UserModel"
import useConnection from "../../hooks/useConnection"

import "./Logo.css"


function Logo() {
    const [user, setUser] = useRecoilState(userState);

    const currentUser = localStorage.getItem("uid")
    const [connections, fetchConnections] = useConnection([])

    useEffect(() => {
        fetchConnections()
        getUserConnections(connections)
    },[])


    function getUserConnections(connections) {
        if (user){
            return user.connections.map(connection => {
                if (connection.network === "self"){
                    return <img src={connection.profilePhoto} alt={user.name}/>
                }
            })
        }
    } 


    return(
        <div className="logoContainer">
            
            <div>
                {/* <NavLink to="/ekseed" > */}
                    <h1 id="logo">Ekseed</h1>
                    {/* </NavLink> */}
            </div>

            {user ? 
                <div>
                    {/* <NavLink to={"/user"}> */}
                        <h3>{user.username}</h3>
                            {/* <h3>{currentUser.uid}</h3> */}
                            {/* <h3>Lizay</h3> */}
                        {/* </NavLink> */}
                </div>
             : " " }
 



            {/* // <NavLink to="/" >Home</NavLink> */}

            
        </div>
    )
}

export default Logo;