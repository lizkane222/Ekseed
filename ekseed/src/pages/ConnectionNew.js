import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import ConnectionModel from "../models/ConnectionModel";

import "./pages.css"
import { useSetRecoilState } from "recoil";


import UserModel from "../models/UserModel";
import { connectionState, userState } from "../recoil/atoms";
import Connection from "./ConnectionShow";
import Note from "../components/Note/NoteContainer/Note";
// import NewNote from "../components/Note/NewNote";

function ConnectionNew(props) {
    const setUser = useSetRecoilState(userState);

    const [preferredName, setPreferredName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [network, setNetwork] = useState("");
    const [company, setCompany] = useState("");
    const [dateReview, setDateReview] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    // const [note, setNote] = userState("");
        
        // =======================================================
        // const [noteTag, setNoteTag] = useState("");
        // const [noteContent, setNoteContent] = useState("");
        // const [noteReviewed, setNoteReviewed] = useState("");
        // const [noteBookmark, setNoteBookmark] = useState("");
        // const [notePrivacy, setNotePrivacy] = useState("");
        // const [noteTimestamp, setNoteTimestamp] = useState("");

        // const [note.tag, setNoteTag] = useState("");
        // const [note.content, setNoteContent] = useState("");
        // const [note.reviewed, setNoteReviewed] = useState("");
        // const [note.bookmark, setNoteBookmark] = useState("");
        // const [note.privacy, setNotePrivacy] = useState("");
        // const [note.timestamp, setNoteTimestamp] = useState("");
    
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

        // =======================================================
        // setDateReview = Date.now()

        // this example takes 2 seconds to run
                // const start = Date.now();

                // console.log('starting timer...');
                // // expected output: starting timer...

                // setTimeout(() => {
                // const millis = Date.now() - start;

                // console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
                // // expected output: seconds elapsed = 2
                // }, 2000);
        // =======================================================

        // import React, {useState, useEffect} from "react";
        // import { useSetRecoilState } from "recoil";
        // import UserModel from "../../models/UserModel";
        // import { userState } from "../../recoil/atoms";
        // import {useHistory, UseHistory} from "react-router-dom";
        
        // const history = useHistory()

        // UserModel.show().then((response) => {
        //                 console.log(response);
        //                     setUser(response.User)
        //                     history.push("/user")
        //             })



    function handleSubmit(event) {
        event.preventDefault(); 
        ConnectionModel.create({preferredName, firstName, lastName, network, company, dateReview, profilePhoto, cellPhoneOne, cellPhoneTwo, email, homeAddress, workPhone, workEmail, workAddress, birthday, moreContact}).then((response)=>{
            console.log(response);
            console.log(props.history)
            // TODO
            UserModel.show().then((response) => {
                console.log(response);
                    setUser(response.User)
                    props.history.push("/connection")
            })
        });
    }

    return (
        <div className="pageOverflowHidden">
            <h1>Connect</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="preferredName">preferredName {preferredName}</label><br/>
                <input 
                type="text" 
                name="preferredName"
                placeholder="What do you call them?"
                value={preferredName}
                onChange={(e)=> setPreferredName(e.target.value)}
                /> <br/><br/>
            </div>

            <div>
                <label htmlFor="firstName">firstName: {firstName}</label><br/>
                <input 
                type="text" 
                name="firstName"
                placeholder="Their first name, & other names"
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                /> <br/><br/>
            </div>
            
            <div>
                <label htmlFor="lastName">lastName: {lastName}</label><br/>
                <input 
                type="text" 
                name="lastName"
                placeholder="Their last name, (maiden name)"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
                /> <br/><br/>
            </div>

            <div>
                <label htmlFor="network">network: {network}</label><br/>
                <input 
                type="text" 
                name="network"
                placeholder="How do you know them?"
                value={network}
                onChange={(e)=> setNetwork(e.target.value)}
                /> <br/><br/>
            </div>
            
            <div>
                <label htmlFor="company">Company Name: {company}</label><br/>
                <input 
                type="text" 
                name="company"
                placeholder="What company do they work for?"
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
                placeholder="Have a flattering photo of them?"
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
                    placeholder="noteTag"
                    value={noteTag}
                    onChange={(e)=> setNoteTag(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="noteContent">noteContent: {noteContent}</label><br/>
                    <input 
                    type="text" 
                    name="noteContent"
                    placeholder="noteContent"
                    value={noteContent}
                    onChange={(e)=> setNoteContent(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="noteReviewed">noteReviewed: {noteReviewed}</label><br/>
                    <input 
                    type="text" 
                    name="noteReviewed"
                    placeholder="noteReviewed"
                    value={noteReviewed}
                    onChange={(e)=> setNoteReviewed(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="noteBookmark">noteBookmark: {noteBookmark}</label><br/>
                    <input 
                    type="text" 
                    name="noteBookmark"
                    placeholder="noteBookmark"
                    value={noteBookmark}
                    onChange={(e)=> setNoteBookmark(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="notePrivacy">notePrivacy: {notePrivacy}</label><br/>
                    <input 
                    type="text" 
                    name="notePrivacy"
                    placeholder="notePrivacy"
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
                    placeholder="Cell # 1"
                    value={cellPhoneOne}
                    onChange={(e)=> setCellPhoneOne(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="cellPhoneTwo">cellPhoneTwo: {cellPhoneTwo}</label><br/>
                    <input 
                    type="text" 
                    name="cellPhoneTwo"
                    placeholder="Cell # 2"
                    value={cellPhoneTwo}
                    onChange={(e)=> setCellPhoneTwo(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="email">email: {email}</label><br/>
                    <input 
                    type="text" 
                    name="email"
                    placeholder="Their personal/primary email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="homeAddress">homeAddress: {homeAddress}</label><br/>
                    <input 
                    type="text" 
                    name="homeAddress"
                    placeholder="Their home address"
                    value={homeAddress}
                    onChange={(e)=> setHomeAddress(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="workPhone">workPhone: {workPhone}</label><br/>
                    <input 
                    type="text" 
                    name="workPhone"
                    placeholder="Their work phone, & extension"
                    value={workPhone}
                    onChange={(e)=> setWorkPhone(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="workEmail">workEmail: {workEmail}</label><br/>
                    <input 
                    type="text" 
                    name="workEmail"
                    placeholder="Their work email"
                    value={workEmail}
                    onChange={(e)=> setWorkEmail(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="workAddress">workAddress: {workAddress}</label><br/>
                    <input 
                    type="text" 
                    name="workAddress"
                    placeholder="Their work address"
                    value={workAddress}
                    onChange={(e)=> setWorkAddress(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="birthday">birthday: {birthday}</label><br/>
                    <input 
                    type="text" 
                    name="birthday"
                    placeholder="Their birthday"
                    value={birthday}
                    onChange={(e)=> setBirthday(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="moreContact">moreContact: {moreContact}</label><br/>
                    <textarea 
                    name="moreContact" 
                    placeholder="Extra contact info"
                    onChange={(e)=> setMoreContact(e.target.value)}
                    >
                    {moreContact}
                    </textarea>
                    {/* <input 
                    type="text" 
                    name="moreContact"
                    placeholder="Extra contact info"
                    value={moreContact}
                    onChange={(e)=> setMoreContact(e.target.value)}
                    /> */} <br/><br/>
                </div>
            </div>

            <input 
            type="submit"
            value="Connect"
            />
        </form>



        </div>
    )
};




// import SideBar from '../components/SideBar/SideBar';






{/* <SideBar /> */}

export default ConnectionNew;