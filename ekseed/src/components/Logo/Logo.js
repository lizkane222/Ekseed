import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {NavLink} from "react";
import User from "../../models/UserModel"
import useConnection from "../../hooks/useConnection";

import "./Logo.css";
import {FaUserAstronaut} from"react-icons/fa";

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
                    return <div className="roundPhoto"><span>{user.username}<img className="userMiniProfPhoto" src={connection.profilePhoto} alt={user.name}/></span></div>
                // } else {
                // return <div className="roundPhoto"><span>{user.username}<img className="userMiniProfPhoto"src={<FaUserAstronaut/>} alt={user.name}/></span></div>
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

          
 



            {/* // <NavLink to="/" >Home</NavLink> */}

            
        </div>
    )
}

export default Logo;