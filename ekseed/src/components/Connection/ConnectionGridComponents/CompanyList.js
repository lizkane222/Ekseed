import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { userState, connectionState } from "../../../recoil/atoms";
import ConnectionModel from "../../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "./Connection.css"


const CompanyList = (props) => {
    
    const connectionId = props.props.match.params.id

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
</>
            )}


            {/* <a href="/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default CompanyList;