import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { userState, connectionState } from "../../recoil/atoms";
import ConnectionModel from "../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
import "./Connection.css"
import NetworkPhoto from "./ConnectionGridComponents/NetworkPhoto";
import ProfilePhoto from "./ConnectionGridComponents/ProfilePhoto";
import CompanyItem from "./ConnectionGridComponents/CompanyItem";
import NetworkName from "./ConnectionGridComponents/NetworkName";
import DateReviewed from "./ConnectionGridComponents/DateReviewed";
import MiniProfilePhotoList from "./ConnectionGridComponents/MiniProfilePhotoList";
import PreferredName from "./ConnectionGridComponents/PreferredName";
import FirstName from "./ConnectionGridComponents/FirstName";
import LastName from "./ConnectionGridComponents/LastName";




const Connection = (props) => {
    
    // const connectionId = props.props.match.params.id
    console.log(props.user)
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
    // console.log("line31 connection detail connection data, CONNECTION DETAIL ",connectionDetail)

    // for (let i in connectionDetail){
    //         console.log("MY FOR LOOP TO GET NOTE", i, typeof(i))
    // }
    // {connectionDetail.note.map(note => <h4>{note.content} </h4>)}
    // const notes = connectionDetail.note.map((note, idx) => <Note note={note}/> )

    return (
        <div className="connectionShow">
            {/* <h3>Connection Component</h3> */}

            {/* {connectionDetail && (          
            <> */}
                <section className="connectionShowNetwork container">

                    <div className="connectionShowNetworkItem">

                    {/* <div> */}
                        <div className="grandparent-circle">
                            <div className="parent-circle">
                                
                                <NetworkPhoto />
                                
                                {/* <h3 id="network-photo">{connectionDetail.network}</h3> */}
                            </div>
                        </div>
                    </div>

                    <ProfilePhoto />
                    {/* <div className="connectionShowNetworkItem" id="profile-photo">
                        <Link to={`/user`} className="imgContainer">
                            <div className="imgContainer">
                                <div className='image-wrapper'>
                                    <img className="connectionShowNetwork__img" src={connectionDetail.profilePhoto} alt={connectionDetail.preferredName} />
                                </div>
                            </div>
                        </Link>
                    </div> */}

                    <PreferredName />
                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h2>{connectionDetail.preferredName}</h2>
                        <p>preferredName</p>
                    </div> */}

                    <FirstName />
                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.firstName}</h4>
                        <p>firstName</p>
                    </div> */}

                    <LastName />
                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.lastName}</h4>
                        <p>lastName</p>
                    </div> */}

                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.company}</h4>
                        <p>company</p>
                    </div> */}
                    <CompanyItem />

                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.network}</h4>
                        <p>network</p>
                    </div> */}
                    <NetworkName />

                    {/* <div className="connectionShowNetworkItem network_deets">
                        <h4>{connectionDetail.dateReview}</h4>
                        <p>dateReview</p>
                    </div> */}
                    <DateReviewed />
                
                    {/* <MiniProfilePhotoList /> */}
                
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
                
                    {/* <div className="great-grandparent-mini-photo connectionShowNetworkItem">
                        <div className="grandparent-mini-photo">
                            <div className="parent-mini-photo">
                                <img className="mini-photo" src="" alt=""/>
                            </div>
                        </div>
                    </div> */}

                </section>
                    {/* {connectionDetail && (notes)} */}

{/* 
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
                </section> */}
            
            {/* </>
            )} */}


            {/* <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a> */}
        </div>
    )
}

export default Connection;









// note.tag, note.content, note.reviewed, note.bookmark, note.privacy

// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections
            



{/* <div>
                    <h4>note: <b>{connectionDetail.note}</b></h4>
                </div> */}

                 {/* <div>
                    <h4>noteTag:</h4> {connectionDetail.note.map(note =><h4><b>{note.content}</b></h4>)}
                </div> */}
{/* 
                <div>
                    <h4>noteContent: <b>{connectionDetail.note.noteContent}</b></h4>
                </div>

                <div>
                    <h4>noteReviewed: <b>{connectionDetail.note.noteReviewed}</b></h4>
                </div>

                <div>
                    <h4>noteBookmark: <b>{connectionDetail.note.noteBookmark}</b></h4>
                </div>

                <div>
                    <h4>notePrivacy: <b>{connectionDetail.note.notePrivacy}</b></h4>
                </div>

                <div>
                    <h4>noteTimestamp: <b>{connectionDetail.note.noteTimestamp}</b></h4>
                </div> */}


    // {connectionDetail.note.map(note =><h4>{note.content}</h4>)}

    // note.preferredName
    // note.firstName
    // note.lastName
    // note.network
    // note.company
    // note.dateReview
    // note.profilePhoto
    // note.noteTag
    // note.noteContent
    // noteReviewed
    // noteBookmark
    // notePrivacy
    // noteTimestamp
    // cellPhoneOne
    // cellPhoneTwo
    // email
    // workName
    // workPhone
    // workEmail
    // workAddress
    // moreContact



    // const [preferredName, setPreferredName] = useRecoilState(connectionState)
    // const [firstName, setFirstName] = useRecoilState(connectionState)
    // const [lastName, setLastName] = useRecoilState(connectionState)
    // const [network, setNetwork] = useRecoilState(connectionState)
    // const [company, setCompany] = useRecoilState(connectionState)
    // const [dateReview, setDateReview] = useRecoilState(connectionState)
    // const [profilePhoto, setProfilePhoto] = useRecoilState(connectionState)
        
    //     const [noteTag, setNoteTag] = useRecoilState(connectionState)
    //     const [noteContent, setNoteContent] = useRecoilState(connectionState)
    //     const [noteReviewed, setNoteReviewed] = useRecoilState(connectionState)
    //     const [noteBookmark, setNoteBookmark] = useRecoilState(connectionState)
    //     const [notePrivacy, setNotePrivacy] = useRecoilState(connectionState)
    //     const [noteTimestamp, setNoteTimestamp] = useRecoilState(connectionState)
    
    // const [cellPhoneOne, setCellPhoneOne] = useRecoilState(connectionState)
    // const [cellPhoneTwo, setCellPhoneTwo] = useRecoilState(connectionState)
    // const [email, setEmail] = useRecoilState(connectionState)
    // const [workName, setWorkName] = useRecoilState(connectionState)
    // const [workPhone, setWorkPhone] = useRecoilState(connectionState)
    // const [workEmail, setWorkEmail] = useRecoilState(connectionState)
    // const [workAddress, setWorkAddress] = useRecoilState(connectionState)
    // const [moreContact, setMoreContact] = useRecoilState(connectionState);


    // const [error, setError] = useState("");



                {/* <div>
                <h4>{preferredName}</h4>
            </div>

            <div>
                <h4>{firstName}</h4>
            </div>

            <div>
                <h4>{lastName}</h4>
            </div>

            <div>
                <h4>{network}</h4>
            </div>

            <div>
                <h4>{company}</h4>
            </div>

            <div>
                <h4>{dateReview}</h4>
            </div>

            <div>
                <h4>{profilePhoto}</h4>
            </div>

            <div>
                <h4>{noteTag}</h4>
            </div>

            <div>
                <h4>{noteContent}</h4>
            </div>

            <div>
                <h4>{noteReviewed}</h4>
            </div>

            <div>
                <h4>{noteBookmark}</h4>
            </div>

            <div>
                <h4>{notePrivacy}</h4>
            </div>

            <div>
                <h4>{noteTimestamp}</h4>
            </div>

            <div>
                <h4>{cellPhoneOne}</h4>
            </div>

            <div>
                <h4>{cellPhoneTwo}</h4>
            </div>

            <div>
                <h4>{email}</h4>
            </div>

            <div>
                <h4>{workName}</h4>
            </div>

            <div>
                <h4>{workPhone}</h4>
            </div>

            <div>
                <h4>{workEmail}</h4>
            </div>

            <div>
                <h4>{workAddress}</h4>
            </div>

            <div>
                <h4>{moreContact}</h4>
            </div> */}