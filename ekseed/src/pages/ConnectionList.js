import React,{ useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import {useRecoilValue} from "recoil";

import Connections from "../components/Connection/Connections"
import ConnectionsContainer from "../components/Connection/ConnectionsContainer"
import useConnection from "../hooks/useConnection"

import ConnectionModel from "../models/ConnectionModel";
import { userState } from "../recoil/atoms";
import Logo from "../components/Logo/Logo"


const ConnectionList = (props) => {
    // console.log(" My Garden passes userId");
    const user = useRecoilValue(userState);
    console.log("CONNECTION LIST USER:", user)
    const [connections, fetchConnections] = useConnection();

    // function generateConnections(connections) {
    //     return connections = user.connections.map(connection => {
    //         if (connection.network === "self") {
    //             return <Connections key={connection._id} connection={connection} props={props}/>
    //         } else {
    //             return <Connections key={connection._id} connection={connection} props={props}/>
    //         }

    //     })
    // }

    // useEffect(
    //     function () {
    //         if (connections.length){
    //             <ConnectionsContainer connections={connections}/>
    //         } else {
    //             <h1>Loading...</h1>}

    //     }, []
    // );

    // useEffect(() => {
    //     ConnectionModel.all(() => )

    // })


    return (
        <div className="connectionsListContainer">

            {user ? (
            <>
                <button onClick={fetchConnections}>Refresh</button>
                {user.connections.length ? <Connections connections={user.connections} props={props}/> : <h1>Loading...</h1>}
                
            </>
            ) : ( 
            <>
                " "
            </>
            )}
        </div>
    );
}

export default ConnectionList;


//     useEffect(function () {
       
//         displayConnections()
//             // {connections.length ? <Connections connections={connections}/> : <h1>Loading...</h1>}
        
//        }, []);
    

//     function displayConnections(connections) {  
//         // return user.connections.map((connection) => {
//             // return connections.map((connection) => {
//         // connections = [user.connections]
//         return connections = user.connections.map((connection) => {
//            if (connection.network === "self") {
//                return (
//                    <div className="garden-connectionList selfNetwork">
//                        <Link to={`/connection/${connection._id}`}>
//                            <p  key={connection._id} connection={connection} className="garden-connectionList__item-name"> {connection.preferredName} </p>
//                            <div className="garden-connectionList__img-container">
//                                <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
//                            </div>
//                        </Link>
//                    </div>
//            )} else { 
//                return(
//                    <div className="garden-connectionList usersNetwork">
//                        <Link to={`/connection/${connection._id}`}>
//                            <p  key={connection._id} className="garden-connectionList__item-name"> {connection.preferredName} </p>
//                            <div className="garden-connectionList__img-container">
//                                <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
//                            </div>
//                        </Link>
//                    </div>
//                )
//            }
//        })
//    };


// =========================================
// USEEFFECT  EXAMPLE FROM  FROM CONNECTION.JS
// 
//    useEffect(function () {
//     getThisConnection()
// },[]);

// function getThisConnection() {
//     ConnectionModel.show(connectionId).then((response) => {
//         setThisConnection(response.connection)

//     })
// }

