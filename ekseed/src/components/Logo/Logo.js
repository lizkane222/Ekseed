import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {NavLink} from "react";
import User from "../../models/UserModel"
import useConnection from "../../hooks/useConnection";
// import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";


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
                    {/* <MDBCol md="12">
                    <MDBFormInline className="md-form mr-auto mb-4">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                        Search
                        </MDBBtn>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">
                        Search
                        </MDBBtn>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
                        Search
                        </MDBBtn>
                    </MDBFormInline>
                    </MDBCol> */}


                    
                    {/* </NavLink> */}
            </div>

          
 



            {/* // <NavLink to="/" >Home</NavLink> */}

            
        </div>
    )
}

export default Logo;