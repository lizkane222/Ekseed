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
    
    function generateConnections(connections) {
        return connections = user.connections.map(connection => {
            if (connection.network === "self") {
                return <Connections className="selfNetwork" key={connection._id} connection={connection} props={props}/>
            } else {
                return <Connections  key={connection._id} connection={connection} props={props}/>
            }
        })
    }
    // useEffect(function () {
       
    //     displayConnections()
    //         {connections.length ? <Connections connections={connections}/> : <h1>Loading...</h1>}
    //     }, []);
        
       return (
        <div className="connectionContainer">
            <h1>ConnectionList: All Connections</h1>
            
            {/* {user ? (
            <>
                <h3 className="userNameLogo">{user.username}</h3> */}
                <div>
                    {generateConnections(props.connections)}
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