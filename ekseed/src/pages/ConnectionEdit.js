import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import useConnection from "../hooks/useConnection";


// import Connection from "./ConnectionShow";
import ConnectionModel from "../models/ConnectionModel";
import UserModel from "../models/UserModel";
import { connectionState, userState } from "../recoil/atoms";

import "./pages.css"
// function ConnectionEdit(props){
//     return <h1>CONNECTION EDIT -MICAH</h1>
// }

function ConnectionEdit(props) {
    const [user, setUser] = useRecoilState(userState);
    let connectionId = props.match.params.id
    const [connection, fetchConnection] = useConnection(connectionId);


    // const [preferredName, setPreferredName] = useState(connection.preferredName);
    // const [firstName, setFirstName] = useState(connection.firstName);
    // const [lastName, setLastName] = useState(connection.lastName);
    // const [network, setNetwork] = useState(connection.network);
    // const [company, setCompany] = useState(connection.company);
    // const [dateReview, setDateReview] = useState(connection.dateReview);
    // const [profilePhoto, setProfilePhoto] = useState(connection.profilePhoto);
        
    //     const [cellPhoneOne, setCellPhoneOne] = useState(connection.cellPhoneOne);
    //     const [cellPhoneTwo, setCellPhoneTwo] = useState(connection.cellPhoneTwo);
    //     const [email, setEmail] = useState(connection.email);
    //     const [homeAddress, setHomeAddress] = useState(connection.homeAddress);
    //     const [workPhone, setWorkPhone] = useState(connection.workPhone);
    //     const [workEmail, setWorkEmail] = useState(connection.workEmail);
    //     const [workAddress, setWorkAddress] = useState(connection.workAddress);
    //     const [birthday, setBirthday] = useState(connection.birthday);
    //     const [moreContact, setMoreContact] = useState(connection.moreContact);
 
    
    const [preferredName, setPreferredName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [network, setNetwork] = useState("");
    const [company, setCompany] = useState("");
    const [dateReview, setDateReview] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
        
        const [cellPhoneOne, setCellPhoneOne] = useState("");
        const [cellPhoneTwo, setCellPhoneTwo] = useState("");
        const [email, setEmail] = useState("");
        const [homeAddress, setHomeAddress] = useState("");
        const [workPhone, setWorkPhone] = useState("");
        const [workEmail, setWorkEmail] = useState("");
        const [workAddress, setWorkAddress] = useState("");
        const [birthday, setBirthday] = useState("");
        const [moreContact, setMoreContact] = useState("");



        const [error, setError] = useState("");


        console.log(" connection edit props", props)
        console.log("connection edit connection:", props.connections)
        console.log("CONNECTION EDIT connectionId", connectionId)

        useEffect(() => {
            setNetwork(connection.network)
            setPreferredName(connection.preferredName)
            setFirstName(connection.firstName)
            setLastName(connection.lastName)
            setNetwork(connection.network)
            setCompany(connection.company)
            setProfilePhoto(connection.setProfilePhoto)
            setCellPhoneOne(connection.setCellPhoneOne)
            setCellPhoneTwo(connection.setCellPhoneTwo)
            setEmail(connection.setEmail)
            setHomeAddress(connection.setHomeAddress)
            setWorkPhone(connection.setWorkPhone)
            setWorkEmail(connection.setWorkEmail)
            setWorkAddress(connection.setWorkAddress)
            setBirthday(connection.setBirthday)
            setMoreContact(connection.setMoreContact)
        },[connection])


        // useEffect(
        //     function() {
        //         fetchConnection(connectionId);
        //     },
        //     []
        // )

        // function fetchConnection(connection) {
        //     if (connection) {
        //         ConnectionModel.show(connection).then((data) => {
        //             console.log(data);
        //             setConnection(data.ConnectionModel.connection);
        //         });
        //     } 
        //     else {
        //         ConnectionModel.all().then((data) => {
        //             console.log(data);
        //             setConnection(data.Connection);
        //         });
        //     }
        // }
        // =======================================================
        // dateReview = Date.now();
        // setDateReview = dateReview;
        // if (setNoteTimestamp){
        //     noteTimestamp = Date.now();
        //     setNoteTimestamp = noteTimestamp;
        // }
        // handle dateReview, setDateReview
        // handle noteTimestamp, setNoteTimestamp
        // ConnectionModel.create({preferredName, firstName, lastName, network, company, dateReview, profilePhoto, noteTag, noteContent, noteReviewed, noteBookmark, notePrivacy, noteTimestamp, cellPhoneOne, cellPhoneTwo, email, workName, workPhone, workEmail, workAddress, moreContact}).then((response)=>{
            // ConnectionModel.create({preferredName, firstName, lastName, network, company, dateReview, profilePhoto, noteTag, noteContent, noteReviewed, noteBookmark, notePrivacy, noteTimestamp, cellPhoneOne, cellPhoneTwo, email, workName, workPhone, workEmail, workAddress, moreContact}).then((response)=>{
                // console.log(response);

    function handleSubmit(event) {
        event.preventDefault(); 
        ConnectionModel.update(connectionId, {preferredName, firstName, lastName, network, company, dateReview, profilePhoto, cellPhoneOne, cellPhoneTwo, email, homeAddress, workPhone, workEmail, workAddress, birthday, moreContact}).then((response)=>{
            if (response.status === 201) {
                UserModel.show().then((response) => {
                    console.log(response);
                        setUser(response.User)
                        props.history.push(`/connection/${connectionId}`)
                })
                // props.history.push(`/connection/${props}`)
            } else {
                setError(response.message);
            }
        })
    }

    return (
        <div className="pageOverflowHidden">
            <h1> EDIT THIS PAGE</h1> 
            {connection && 
            <>
                {/* <Connection props={props} user={user}/> */}
                {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="preferredName">preferredName {preferredName}</label><br/>
                    <input 
                    type="text" 
                    name="preferredName"
                    value={preferredName}
                    onChange={(e)=> setPreferredName(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="firstName">firstName: {firstName}</label><br/>
                    <input 
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    /> <br/><br/>
                </div>
                
                <div>
                    <label htmlFor="lastName">lastName: {lastName}</label><br/>
                    <input 
                    type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="network">network: {network}</label><br/>
                    <input 
                    type="text" 
                    name="network"
                    value={network}
                    onChange={(e)=> setNetwork(e.target.value)}
                    /> <br/><br/>
                </div>
                
                <div>
                    <label htmlFor="company">Company Name: {company}</label><br/>
                    <input 
                    type="text" 
                    name="company"
                    value={company}
                    onChange={(e)=> setCompany(e.target.value)}
                    /> <br/><br/>
                </div>

                {/* <div>{}</div> */}

                <div>
                    <label htmlFor="profilePhoto">Profile Photo: <img className="ConnectionNew-profile-photo-preview" src={profilePhoto} alt=""/> </label><br/>
                    <input 
                    type="text" 
                    name="profilePhoto"
                    value={profilePhoto}
                    onChange={(e)=> setProfilePhoto(e.target.value)}
                    /> <br/><br/>
                </div>

                
                {/* {<NewNote note={note}/>} */}

                {/* <div>
                    <div>
                        <label htmlFor="noteTag">noteTag: {noteTag}</label><br/>
                        <input 
                        type="text" 
                        name="noteTag"
                        value={noteTag}
                        onChange={(e)=> setNoteTag(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="noteContent">noteContent: {noteContent}</label><br/>
                        <input 
                        type="text" 
                        name="noteContent"
                        value={noteContent}
                        onChange={(e)=> setNoteContent(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="noteReviewed">noteReviewed: {noteReviewed}</label><br/>
                        <input 
                        type="text" 
                        name="noteReviewed"
                        value={noteReviewed}
                        onChange={(e)=> setNoteReviewed(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="noteBookmark">noteBookmark: {noteBookmark}</label><br/>
                        <input 
                        type="text" 
                        name="noteBookmark"
                        value={noteBookmark}
                        onChange={(e)=> setNoteBookmark(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="notePrivacy">notePrivacy: {notePrivacy}</label><br/>
                        <input 
                        type="text" 
                        name="notePrivacy"
                        value={notePrivacy}
                        onChange={(e)=> setNotePrivacy(e.target.value)}
                        /> <br/><br/>
                    </div>
                </div> */}

                <div>
                    <div>
                        <label htmlFor="cellPhoneOne">cellPhoneOne: {cellPhoneOne}</label><br/>
                        <input 
                        type="text" 
                        name="cellPhoneOne"
                        value={cellPhoneOne}
                        onChange={(e)=> setCellPhoneOne(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="cellPhoneTwo">cellPhoneTwo: {cellPhoneTwo}</label><br/>
                        <input 
                        type="text" 
                        name="cellPhoneTwo"
                        value={cellPhoneTwo}
                        onChange={(e)=> setCellPhoneTwo(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="email">email: {email}</label><br/>
                        <input 
                        type="text" 
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="homeAddress">homeAddress: {homeAddress}</label><br/>
                        <input 
                        type="text" 
                        name="homeAddress"
                        value={homeAddress}
                        onChange={(e)=> setHomeAddress(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="workPhone">workPhone: {workPhone}</label><br/>
                        <input 
                        type="text" 
                        name="workPhone"
                        value={workPhone}
                        onChange={(e)=> setWorkPhone(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="workEmail">workEmail: {workEmail}</label><br/>
                        <input 
                        type="text" 
                        name="workEmail"
                        value={workEmail}
                        onChange={(e)=> setWorkEmail(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="workAddress">workAddress: {workAddress}</label><br/>
                        <input 
                        type="text" 
                        name="workAddress"
                        value={workAddress}
                        onChange={(e)=> setWorkAddress(e.target.value)}
                        /> <br/><br/>
                    </div>

                    <div>
                        <label htmlFor="birthday">birthday: {birthday}</label><br/>
                        <input 
                        type="text" 
                        name="birthday"
                        value={birthday}
                        onChange={(e)=> setBirthday(e.target.value)}
                        /> <br/><br/>
                    </div>
                    <div>
                        <label htmlFor="moreContact">moreContact: {moreContact}</label><br/>
                        <input 
                        type="text" 
                        name="moreContact"
                        value={moreContact}
                        onChange={(e)=> setMoreContact(e.target.value)}
                        /> <br/><br/>
                    </div>
                </div>

                <input 
                type="submit"
                value="Connect"
                />
            </form>
            </>
            }
        </div>
    )
};




// import SideBar from '../components/SideBar/SideBar';






{/* <SideBar /> */}

export default ConnectionEdit;

            