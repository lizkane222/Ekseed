import React, { Component, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useConnection from "../../hooks/useConnection";
import Connection from "./Connection";

import { useRecoilState, useRecoilValue } from "recoil";
import ConnectionModel from "../../models/ConnectionModel";
import { userState } from "../../recoil/atoms";
import "../User/UserGarden.css";

const Connections = (props) => {
    // const [connections, fetchConnections] = useConnection();
    const user = useRecoilValue(userState);
    const [connections, fetchConnections] = useConnection([]);

    // function generateConnections(connections) {
    //     return connections.map(connection => {
    //         if (connection.network === "self") {
    //             return <Connection className="selfNetwork" key={connection._id} connection={connection} props={props}/>
    //         } else {
    //             return <Connection className="othersNetwork" key={connection._id} connection={connection} props={props}/>
    //         }
    //     })
    // }
    // useEffect(function () {
    //     displayConnections()
    //         // {connections.length ? <Connections connections={connections}/> : <h1>Loading...</h1>}
    //    }, []);
    

    function displayConnections(connections) {  
        fetchConnections(connections)
        // return user.connections.map((connection) => {
            // return connections.map((connection) => {
        connections = []
        return connections = user.connections.map((connection) => {
           if (connection.network === "self") {
               console.log("connections CL connection:", connection)
               {<Connection connection={connection} props={props} connectionId={connection._id}/>}
               return (
                   <div className="garden-connectionList selfNetwork">
                       <Link to={`/connection/${connection._id}`}>
                           <p key={connection._id} connection={connection} connectionId={connection._id} props={props} className="garden-connectionList__item-name"> {connection.preferredName} </p>
                           <div className="garden-connectionList__img-container">
                               <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
                           </div>
                       </Link>
                   </div>
           )} else {
               return(
                   <div className="garden-connectionList usersNetwork">
                       <Link to={`/connection/${connection._id}`}>
                           <p  key={connection._id} className="garden-connectionList__item-name"> {connection.preferredName} </p>
                           <div className="garden-connectionList__img-container">
                               <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
                           </div>
                       </Link>
                   </div>
               )
           }
       })
   };



    // useEffect(function ()
    // {displayConnections(connections)},
    // fetchConnections().then(
    //         <Connection connection={connections.connection} props={props} connectionId={connections.connection}/>
    // ),[])



    return (
        <div className="connectionContainer">
            {/* <h1>ConnectionList: All Connections</h1> */}
            
            {user ? (
            <>
                <h3 className="userNameLogo">{user.username}</h3>
                <div>
                    {displayConnections(connections)}
                    {/* {passItOn()} */}
                </div>
            </>
            ) : ( 
            <>
                ""
            </>
            )}    
        </div>
    )
}
export default Connections;









// return (
    //     <div>

    //         {user ? (
    //         <>
    //             <h3>{user.username}</h3>
    //             {connectionList}
    //         </>
    //         ) : ( 
    //         <>
    //             ""
    //         </>
    //         )}

    //     </div>
    // )