import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { userState, connectionState } from "../../recoil/atoms";
import ConnectionModel from "../../models/ConnectionModel"
import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "./ContactGrid.css"


const ContactGrid = (props) => {
    
    const connectionId = props.props.match.params.id

    const [connectionDetail, setConnectionDetail] = useState(userState)
    // console.log("ConnectionShow: is userState", userState)
    

    useEffect(function () {
        getConnectionDetail()
    },[]);

    function getConnectionDetail() {
        ConnectionModel.show(connectionId).then((response) => {
            setConnectionDetail(response.connection)

        })
    }

    return (
        <div className="contactGrid">

            {connectionDetail && (          
            <>

                <section className="connection-show__contact container">
                    <div className="connection-show__contactItem">
                        <p>cellPhoneOne</p>
                        <h4>{connectionDetail.cellPhoneOne}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>cellPhoneTwo</p>
                        <h4>{connectionDetail.cellPhoneTwo}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>email</p>
                        <h4>{connectionDetail.email}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>workName</p>
                        <h4>{connectionDetail.workName}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>workPhone</p>
                        <h4>{connectionDetail.workPhone}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>workEmail</p>
                        <h4>{connectionDetail.workEmail}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>workAddress</p>
                        <h4>{connectionDetail.workAddress}</h4>
                    </div>

                    <div className="connection-show__contactItem">
                        <p>moreContact</p>
                        <h4>{connectionDetail.moreContact}</h4>
                    </div>
                </section>
            </>
            )}


            <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a>
        </div>
    )
}

export default ContactGrid;



