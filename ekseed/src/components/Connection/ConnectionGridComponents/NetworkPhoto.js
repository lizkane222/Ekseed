import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, connectionState } from "../../../recoil/atoms";

import ConnectionModel from "../../../models/ConnectionModel"
import "../Connection.css"



const NetworkPhoto = (props) => {
    const user = useRecoilValue(userState)
    

    // const connectionId = props.props.match.params.id
    const connectionId = user.id

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
                {/* <div className="connectionShowNetworkItem"> */}
                <div>
                    <div className="grandparent-circle">
                        <div className="parent-circle">
                            {/* <Link to={`/user/connection`} className="linkContain" >
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


            {/* <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default NetworkPhoto;