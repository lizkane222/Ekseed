import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory, UseHistory} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, connectionState } from "../../../recoil/atoms";

import ConnectionModel from "../../../models/ConnectionModel"
import "../Connection.css"

import UserModel from "../../../models/UserModel";
// import {} from "react-router-dom";



const NetworkPhoto = (props) => {
    const [user, setUser] = useRecoilState(userState)
    const history = useHistory()

   

    // const connectionId = props.props.match.params.id
    const connectionId = user.id

    const [connectionDetail, setConnectionDetail] = useState(userState)
    // console.log("ConnectionShow: is userState", userState)
    

    useEffect(function () {
        getConnectionDetail()
    },[]);

    function getConnectionDetail() {
        ConnectionModel.show(connectionId).then((response) => {
            setConnectionDetail(response.connection)
            UserModel.show().then((response) => {
                console.log(response);
                    setUser(response.User)
                    // history.push("/user")
            }) 
        })
    }

    return (
        <div className="connectionShow">
            {/* <h3>Connection Component</h3> */}

            {connectionDetail && (          
            <>
                {/* <div className="connectionShowNetworkItem"> */}
                <div>
                    <div className="grandparent-circle">
                        <div className="parent-circle">
                            {/* <Link to={`/connection`} className="linkContain" >
                                <div className='image-wrapper'>
                                    <img src={connectionDetail.network} alt={connectionDetail.network} />
                                </div>
                            </Link> */}
                            {/* <h4>network</h4> */}
                            <h3 id="network-photo">{connectionDetail.network}</h3>
                        </div>
                    </div>
                </div>
            </>
            )}


            {/* <a href="/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default NetworkPhoto;