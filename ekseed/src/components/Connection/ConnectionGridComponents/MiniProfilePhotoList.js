import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";


import { userState, connectionState } from "../../../recoil/atoms";
import ConnectionModel from "../../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "../Connection.css"
// import MiniProfilePhoto from "./ConnectionGridComponents/MiniProfilePhoto";


const MiniProfilePhotoList = (props) => {
    const user = useRecoilValue(userState)
    const connectionId = user.id   
    // const connectionId = props.props.match.params.id

    // const [connectionDetail, setConnectionDetail] = useState(userState)
    // // console.log("ConnectionShow: is userState", userState)
    

    // useEffect(function () {
    //     return getConnectionDetail()
    // },[]);

    // function getConnectionDetail() {
    //     ConnectionModel.show(connectionId).then((response) => {
    //         setConnectionDetail(response.connection)

    //     })
    // }

    return (
        <div className="connectionShow">
            {/* <h3>Connection Component</h3> */}

            {/* <ul>
                <li>
                    <MiniProfilePhoto />
                </li>
            </ul> */}
            {/* {connectionDetail && (          
            <> */}

                <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="miniPhoto" src="https://i.imgur.com/vUsuD2I.jpg" alt="Corey"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="miniPhoto" src="https://i.imgur.com/EH3fQR8.png" alt="Rick"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="miniPhoto" src="https://i.imgur.com/K2f7bL9.jpg" alt="Lia"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="miniPhoto" src="https://i.imgur.com/VMv1FMw.jpg" alt="Rodrigo"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="miniPhoto" src="https://i.imgur.com/pF14yIU.jpg" alt="Crystal"/>
                            </div>
                        </div>
                    </div>

            {/* </>
            )} */}



        </div>
    )
}

export default MiniProfilePhotoList;