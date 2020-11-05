import React, { Component, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useConnection from "../../hooks/useConnection";
import Connection from "./Connection";
import Connections from "./Connections";

import { useRecoilState, useRecoilValue } from "recoil";
import ConnectionModel from "../../models/ConnectionModel";
import { userState } from "../../recoil/atoms";
import "../User/UserGarden.css";

const ConnectionsContainer = (props) => {
    const [connections, fetchConnections] = useConnection([]);
    const user = useRecoilValue(userState);
    console.log("connectionscontainer : user",user)

    // let connections = []
    function generateConnections(connections) {
        return user.connections.map(connection => {
            return <Connections key={connection._id} connections={connections} props={props}/>

            // if (connection.network === "self") {
            // } else {
            //     return <Connections  className="usersNetwork" key={connection._id} connection={connection} props={props}/>
            // }
        })
    }
    // useEffect(function () {
    //     {generateConnections(props.connections)}
    //     {<Connections connections={props.connections}/>}
    //     }, []);
        
       return (
        <div className="connectionContainer">
            <h1>ConnectionList: All Connections</h1>
            
            {/* {user ? (
            <>
                <h3 className="userNameLogo">{user.username}</h3> */}
                <div>
                    {generateConnections(user.connections)}
                    {/* {generateConnections(props.connections)} */}

                </div>
            {/* </>
            ) : ( 
            <>
                ""
            </>
            )}     */}
        </div>
    )
}
export default ConnectionsContainer;