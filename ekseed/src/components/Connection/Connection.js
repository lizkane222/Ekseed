import React, { useState, useEffect, setErrors, setUser } from "react";
import { Link, withRouter, useHistory } from 'react-router-dom';
import {roundedCircle} from 'react-bootstrap'

import { MdPhoneIphone } from "react-icons/md"
import { BsBuilding } from "react-icons/bs"
import { FaDraft2Digital } from "react-icons/fa"

import {useRecoilValue, useRecoilState} from "recoil"
import { userState, connectionState } from "../../recoil/atoms";
import useConnection from "../../hooks/useConnection";
import UserModel from "../../models/UserModel"
import {FaRegEdit } from "react-icons/fa"

import Note from "../Note/NoteContainer/Note"
import ConnectionModel from "../../models/ConnectionModel"
// import NoteContainer from "../Note/NoteContainer/NoteContainer";
// import "./Connection.css"


// REFACTURED PROPERTY IMPORTS
// import NetworkPhoto from "./ConnectionGridComponents/NetworkPhoto";
// import ProfilePhoto from "./ConnectionGridComponents/ProfilePhoto";
// import CompanyItem from "./ConnectionGridComponents/CompanyItem";
// import NetworkName from "./ConnectionGridComponents/NetworkName";
// import DateReviewed from "./ConnectionGridComponents/DateReviewed";
// import MiniProfilePhotoList from "./ConnectionGridComponents/MiniProfilePhotoList";
// import PreferredName from "./ConnectionGridComponents/PreferredName";
// import FirstName from "./ConnectionGridComponents/FirstName";
// import LastName from "./ConnectionGridComponents/LastName";


const Connection = (props) => {
    const history = useHistory
    const user = useRecoilValue(userState)
    let connectionId = props.props.match.params.id
    const [connection, fetchConnection] = useConnection(connectionId);

    console.log("NEW CONSOLE LOG", connectionId)
    const [error, setError] = useState("");

    // useEffect(function () {
    //     return getThisConnection()
    // },[]);

    // function getThisConnection() {
    //     fetchConnection(connectionId)
        // ConnectionModel.show(connectionId).then((response) => {
        //     setThisConnection(response.connection)
    // }
    
    // if (connection.network === "self") {
        
    // } else {

    // }

    // useEffect(() =>{
    //     splitNetworkPhoto()
    // })

    // function splitNetworkPhoto() {
    //     let network = (connection.network).split(" ")
    //     console.log(network)
    //     // return
    // }
    // splitNetworkPhoto()

    function deleteConnection(event) {
        ConnectionModel.delete(connectionId)
            .then((response)=>{
                if (response.status === 201) {
                    UserModel.show().then((response) => {
                        console.log(response);
                            setUser(response.User)
                            props.history.push(`/connection`)
                    })
                } else {
                    setError(response.message);
                }
        })
    }

    
    
    // function deleteConnection(event){
    //     fetchConnection(connectionId)
    //     ConnectionModel.delete(connectionId).then(res => res.json())
    //     .then(json => {
    //         console.log(json);
    //         props.push("/connection")
    //     })}
        // catch{fetchConnection(connectionId)}




    return (

        <div className={`connectionShow ${connection.network === "self" ? "selfNetwork" : "usersNetwork"}`}>
            
            {(user && connection) && (          
                <>
                <Link to={`/connection/${connection._id}/edit`}><FaRegEdit /> {connection.username}</Link>
                <button className="btn" onClick={deleteConnection}>Delete {connection.username}</button>
                <Link className="btn" to={'/connection'} onClick={deleteConnection}>Delete {connection.username}</Link>

                <section className="connectionShowNetwork">


                    {/* <div className="connectionShowNetworkItem" id="networkTop"> */}
                    <div id="networkTop">
                                {/* <NetworkPhoto /> */}
                        <div className="grandparent-circle">
                            <div className="parent-circle">
                                <h3 id="networkPhoto" >{connection.network}</h3>
                            </div>
                        </div>
                    </div>

                    {/* <ProfilePhoto /> */}
                    <div className="connectionShowNetworkItem" id="profile-photo">
                        <Link to={`/connection/:id`} className="imgContainer ">
                            <div className="imgContainer">
                                <div className='image-wrapper'>
                                    <img className="connectionShowNetwork__img" src={connection.profilePhoto} alt={connection.preferredName} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* <PreferredName /> */}
                    <div className="connectionShowNetworkItem network_deets">
                        <h2>{connection.preferredName}</h2>
                        <span><p>preferred name</p></span>
                    </div>

                    {/* <FirstName /> */}
                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connection.firstName}</h4>
                        <span><p>first name</p></span>
                        
                    </div>

                    {/* <LastName /> */}
                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connection.lastName}</h4>
                        <span><p>last name</p></span>
                        
                    </div>

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connection.company}</h4>
                        <span><p>company</p></span>
                        
                    </div>
                    {/* <CompanyItem /> */}

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connection.network}</h4>
                        <span><p>network</p></span>
                        
                    </div>
                    {/* <NetworkName /> */}

                    <div className="connectionShowNetworkItem network_deets">
                        <h4>{connection.dateReview}</h4>
                        <span><p>last review: </p></span>
                    </div>
                    {/* <DateReviewed /> */}
                
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
                
                </section>
                    {/* {connection && (notes)} */}


                <section id="constrainContact">
                    <div className="connectionShowContact">
                        <div className="connectionShowContactItem">
                            <h4>{connection.cellPhoneOne}</h4>
                            <span><p><MdPhoneIphone/>1</p></span>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p><MdPhoneIphone/>2</p></span>
                            <h4>{connection.cellPhoneTwo}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p>email</p></span>
                            <h4>{connection.email}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p>workName</p></span>
                            <h4>{connection.workName}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p>workPhone</p></span>
                            <h4>{connection.workPhone}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p>workEmail</p></span>
                            <h4>{connection.workEmail}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p><BsBuilding /></p></span>
                            <h4>{connection.workAddress}</h4>
                        </div>

                        <div className="connectionShowContactItem">
                            <span><p>moreContact</p></span>
                            <h4>{connection.moreContact}</h4>
                        </div>
                    </div>
                </section>
            </>
            )}


            {/* <Note props={props}/> */}
        </div>
    )
}

export default Connection;







    // function displayConnections(connections) { 
    //     connections = []
    //     return connections = user.connections.map((connection) => {
    //         connection = connection.id
    //         connectionId = connection
            
    //     })
    // }
    // console.log("connection @ displayConnections, connection:", connection)
    // const thisConnection = connectionId

    
    // console.log("connection.js line 33 connecitionId?:props.match.params.id y/n", connectionId)
    // console.log("connection @ 27 props user",props.user)
    // const connection = props.connection
    // console.log("connection @ 33 props ",props)
    // console.log("connection line 33: props connection", props.connection)


    // const userId = user.id
    // const connectionId = user
    // const connectionId = props.props.match.params.id
    // console.log("connection @ 48 connections",connectionId)

    // console.log("connection line34 props of user", props.user.connections)


    // // console.log("ConnectionShow: is userState", userState)
    

    // useEffect(function () {
    //     displayConnections()
    //     fetchConnection(connectionId)
    // },[]);


    // function getThisConnection() {
    //     ConnectionModel.show(connectionId).then((response) => {
    //         setThisConnection(response.connection)
    //     })
    // }

    // console.log("line31 connection detail connection data, CONNECTION DETAIL ",connectionDetail)

    // for (let i in connectionDetail){
    //         console.log("MY FOR LOOP TO GET NOTE", i, typeof(i))
    // }
    // {connectionDetail.note.map(note => <h4>{note.content} </h4>)}
    // const notes = connectionDetail.note.map((note, idx) => <Note note={note}/> )




// note.tag, note.content, note.reviewed, note.bookmark, note.privacy

// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections
            



{/* <div>
                    <h4>note: <b>{connection.note}</b></h4>
                </div> */}

                 {/* <div>
                    <h4>noteTag:</h4> {connection.note.map(note =><h4><b>{note.content}</b></h4>)}
                </div> */}
{/* 
                <div>
                    <h4>noteContent: <b>{connectionId.note.noteContent}</b></h4>
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


    // const [error, setError] = useState(" ");



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