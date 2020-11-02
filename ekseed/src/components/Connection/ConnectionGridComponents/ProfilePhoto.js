import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";

import { userState, connectionState } from "../../../recoil/atoms";

import ConnectionModel from "../../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "../Connection.css"


const ProfilePhoto = (props) => {
    const user = useRecoilValue(userState)
    const connectionId = user.id
    console.log("This is the props at Profile Photo" ,props)
    // const connectionId = props.props.match.params.id
    console.log("userid?y/n",connectionId)


    const [connectionDetail, setConnectionDetail] = useState(userState)
    // console.log("ConnectionShow: is userState", userState)
    console.log("This is the connection detail at Profile Photo" ,connectionDetail)

    useEffect(function () {
        return getConnectionDetail()
    },[]);

    function getConnectionDetail() {
        ConnectionModel.show(connectionId).then((response) => {
            setConnectionDetail(response.connection)

        })
    }

    return (
        <div className="connectionShow">
            {/* <h3>Connection Component</h3> */}

            {connectionDetail && (          
            <>
                <div className="connectionShowNetworkItem" id="profile-photo">
                {/* <div className="connectionShowNetworkItem"> */}
                    <Link to={`/user`} className="imgContainer">
                        <div className="imgContainer">
                            <div className='image-wrapper'>
                                <img className="connectionShowNetwork__img" src={connectionDetail.profilePhoto} alt={connectionDetail.preferredName} />
                            </div>
                        </div>
                    </Link>
                </div>
            </>
            )}


            {/* <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default ProfilePhoto;