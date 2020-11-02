import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";

import { userState, connectionState } from "../../../recoil/atoms";
import ConnectionModel from "../../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "../Connection.css"


const LastName = (props) => {
    const user = useRecoilValue(userState)
    const connectionId = user.id       
    // const connectionId = props.props.match.params.id

    const [connectionDetail, setConnectionDetail] = useState(userState)
    // console.log("ConnectionShow: is userState", userState)
    

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
                <div className="connectionShowNetworkItem network_deets">
                    <h4>{connectionDetail.lastName}</h4>
                    <p>lastName</p>
                </div>
            </>
            )}


            {/* <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default LastName;