import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";


const UserGarden = (props) => {
    console.log("UserGarden", props)
    const [user, setUser] = useRecoilState(userState);

    const connectionList = user ? user.connections.map((connection) => {
        return (
            <div>
                <Link to={`/user/connection/${connection._id}`}>
                    <p key={connection._id}> {connection.preferredName} </p>
                </Link>
                {/* <Routes /> */}
            </div>
        ) 
    })    : '';

    return (
        <div>

            {user ? (
            <>
                <h3>{user.username}</h3>
                {connectionList}
            </>
            ) : ( 
            <>
                ""
            </>
            )}

        </div>
    )
}
export default UserGarden