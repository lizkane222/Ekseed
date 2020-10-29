import React, {useState, useEffect} from "react";
import { useRecoilState, useRecoilValue } from "recoil";


import Connection from '../Connection/Connection';
import UserModel from "../../models/UserModel";
import { userState } from "../../recoil/atoms";


const User = () => {
    const [user, setUser] = useRecoilState(userState)

    function generateConnections(user) {
        return user.map(connection => {
            return <Connection key={connection._id} connection={connection} />
        })
    }

    return (
        <div >

            {user.connection ?
                <div>{generateConnections(user.data)}</div>
            : <div>{user}</div>
            }
        </div>
    )
}

export default User;