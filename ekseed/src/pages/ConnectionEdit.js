import React, { useState } from "react";


// import Connection from "./ConnectionShow";
import ConnectionModel from "../models/ConnectionModel";
import SideBar from '../components/SideBar/SideBar';

import { connectionState } from "../recoil/atoms";


function ConnectionNew(props) {
    const [preferredName, setPreferredName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [network, setNetwork] = useState("");
    const [company, setCompany] = useState("");
    const [dateReview, setDateReview] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
        
        const [noteTag, setNoteTag] = useState("");
        const [noteContent, setNoteContent] = useState("");
        const [noteReviewed, setNoteReviewed] = useState("");
        const [noteBookmark, setNoteBookmark] = useState("");
        const [notePrivacy, setNotePrivacy] = useState("");
        const [noteTimestamp, setNoteTimestamp] = useState("");
    
        const [cellPhoneOne, setCellPhoneOne] = useState("");
        const [cellPhoneTwo, setCellPhoneTwo] = useState("");
        const [email, setEmail] = useState("");
        const [workName, setWorkName] = useState("");
        const [workPhone, setWorkPhone] = useState("");
        const [workEmail, setWorkEmail] = useState("");
        const [workAddress, setWorkAddress] = useState("");
        const [moreContact, setMoreContact] = useState("");
        
        const [error, setError] = useState("");


    function handleSubmit(event) {
        event.preventDefault(); 
        dateReview = Date.now();
        setDateReview = dateReview;
        if (setNoteTimestamp){
            noteTimestamp = Date.now();
            setNoteTimestamp = noteTimestamp;
        }
        // handle dateReview, setDateReview
        // handle noteTimestamp, setNoteTimestamp
        
        ConnectionModel.create({preferredName, firstName, lastName, network, company, dateReview, profilePhoto, noteTag, noteContent, noteReviewed, noteBookmark, notePrivacy, noteTimestamp, cellPhoneOne, cellPhoneTwo, email, workName, workPhone, workEmail, workAddress, moreContact}).then((response)=>{
            // console.log(response);
            if (response.status === 201) {
                props.history.push(`/user/connection/${props}`)
            } else {
                setError(response.message);
            }
        })
    }

    return (
        <div>
            {/* <SideBar /> */}
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
                <label htmlFor="company">company: {company}</label><br/>
                <input 
                type="text" 
                name="company"
                value={company}
                onChange={(e)=> setCompany(e.target.value)}
                /> <br/><br/>
            </div>

            <div>
                <label htmlFor="profilePhoto">profilePhoto: {profilePhoto}</label><br/>
                <input 
                type="text" 
                name="profilePhoto"
                value={profilePhoto}
                onChange={(e)=> setProfilePhoto(e.target.value)}
                /> <br/><br/>
            </div>

            <div>
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
            </div>

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
                    <label htmlFor="workName">workName: {workName}</label><br/>
                    <input 
                    type="text" 
                    name="workName"
                    value={workName}
                    onChange={(e)=> setWorkName(e.target.value)}
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
            value="Login"
            />
        </form>

        {/* <SideBar /> */}
        </div>
    )
};




// import SideBar from '../components/SideBar/SideBar';






{/* <SideBar /> */}

export default ConnectionNew;

            