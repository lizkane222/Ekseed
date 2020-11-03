import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { userState, connectionState } from "../../recoil/atoms";
import ConnectionModel from "../../models/ConnectionModel"
import NoteContainer from "../Note/NoteContainer/NoteContainer";
// import "./NetworkGrid.css"


const NetworkGrid = (props) => {
    
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
    // console.log("line31 connection detail connection data, CONNECTION DETAIL ",connectionDetail)

    // for (let i in connectionDetail){
    //         console.log("MY FOR LOOP TO GET NOTE", i, typeof(i))
    // }
    // {connectionDetail.note.map(note => <h4>{note.content} </h4>)}
    // const notes = connectionDetail.note.map((note, idx) => <Note note={note}/> )

    return (
        <div className="connectionShow">
            {/* <h3>Connection Component</h3> */}

            {connectionDetail && (          
            <>
                <section className="connectionShowNetwork container">

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

                    <div className="connectionShowNetworkItem network_deets">
                        <h2>{connectionDetail.preferredName}</h2>
                        <p>preferredName</p>
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.firstName}</h4>
                        <p>firstName</p>
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.lastName}</h4>
                        {/* <p>lastName</p> */}
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        {/* <Link to={`/connection`} className="linkContain">
                            <div className='image-wrapper network_deets'>
                                <img src={connectionDetail.company} alt={connectionDetail.company} />
                            </div>
                        </Link> */}
                        <h4>{connectionDetail.company}</h4>
                        <p>company</p>
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.network}</h4>
                        <p>network</p>
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.dateReview}</h4>
                        <p>dateReview</p>
                    </div>
                
                    <div className="great-grandparent-mini-photo  connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="https://i.imgur.com/vUsuD2I.jpg" alt="Corey"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="https://i.imgur.com/EH3fQR8.png" alt="Rick"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="https://i.imgur.com/K2f7bL9.jpg" alt="Lia"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="https://i.imgur.com/VMv1FMw.jpg" alt="Rodrigo"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="https://i.imgur.com/pF14yIU.jpg" alt="Crystal"/>
                            </div>
                        </div>
                    </div>
                
                    {/* <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="" alt=""/>
                            </div>
                        </div>
                    </div> */}

                </section>

            </>
            )}


            <a href="/connection/edit">EDIT {connectionDetail.preferredName}</a>
        </div>
    )
}

export default NetworkGrid;

