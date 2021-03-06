import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Connection from "../components/Connection/Connection"
import { userState } from "../recoil/atoms";



const ProfilePage = (props) => {
    const user = useRecoilState(userState)

    return(
        <div className="pageOverflowHidden">
            <div>
                {user.username}
                {user.email}
                {user.password}
            </div>
            <Connection props={props} user={user}/>
        </div>
    )
}

export default ProfilePage;