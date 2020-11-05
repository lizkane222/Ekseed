import React from "react";
import { NavLink, Link } from "react-router-dom";
import ConnectionList from "../Connection/Connections"

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import "./UserGarden.css"

const UserGarden = (props) => {
    console.log("UserGarden", props)
    const user = useRecoilValue(userState);

    const connectionList = user.connections.map((connection) => {
        if (connection.network === "self") {
            return (
                <div className="garden-connectionList selfNetwork">
                    <Link to={`/connection/${connection._id}`}>
                        <p  key={connection._id} connection={connection} className="garden-connectionList__item-name"> {connection.preferredName} </p>
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
    });
        


    // if (connection.network === "self") {
    //     return (
    //         <div className="garden-connectionList selfNetwork">
    //             <Link to={`/connection/${connection._id}`}>
    //                 <p  key={connection._id} connection={connection} className="garden-connectionList__item-name"> {connection.preferredName} </p>
    //                 <div className="garden-connectionList__img-container">
    //                     <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
    //                 </div>
    //             </Link>
    //         </div>
    // )} else { 
    //     return(
    //         <div className="garden-connectionList usersNetwork">
    //             <Link to={`/connection/${connection._id}`}>
    //                 <p  key={connection._id} className="garden-connectionList__item-name"> {connection.preferredName} </p>
    //                 <div className="garden-connectionList__img-container">
    //                     <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
    //                 </div>
    //             </Link>
    //         </div>
    //     )
    // }

    // const connectionList = user ? user.connections.map((connection) => {
    //     return (
    //         <div className="garden-connectionList">
    //             <Link to={`/user/connection/${connection._id}`}>
    //                 <p  key={connection._id} className="garden-connectionList__item-name"> {connection.preferredName} </p>
    //                 <div className="garden-connectionList__img-container">
    //                     <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
    //                 </div>
    //             </Link>
    //         </div>
    //     ) 
    // })    : '';




    return (
        <div>

            {user ? (
            <>
                <h3 className="logo">{user.username}</h3>

                <ConnectionList />

            </>
            ) : ( 
            <>
                " "
            </>
            )}

        </div>
    )
}
export default UserGarden