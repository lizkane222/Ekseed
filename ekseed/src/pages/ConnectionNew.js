import React, { useState } from "react";
import ConnectionModel from "../models/ConnectionModel";

import { connectionState } from "../recoil/atoms";
import Connection from "./ConnectionShow";

function ConnectionNew(props) {
    const [preferredName, setPreferredName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [network, setNetwork] = useState("")
    const [company, setCompany] = useState("")
    const [dateReview, setDateReview] = useState("")
    const [profilePhoto, setProfilePhoto] = useState("")
        
        const [noteTag, setNoteTag] = useState("")
        const [noteContent, setNoteContent] = useState("")
        const [noteReviewed, setNoteReviewed] = useState("")
        const [noteBookmark, setNoteBookmark] = useState("")
        const [notePrivacy, setNotePrivacy] = useState("")
        const [noteTimestamp, setNoteTimestamp] = useState("")
    
        const [contactCellPhoneOne, setContactCellPhoneOne] = useState("")
        const [contactCellPhoneTwo, setContactCellPhoneTwo] = useState("")
        const [contactEmail, setContactEmail] = useState("")
        const [contactWorkName, setContactWorkName] = useState("")
        const [contactWorkPhone, setContactWorkPhone] = useState("")
        const [contactWorkEmail, setContactWorkEmail] = useState("")
        const [contactWorkAddress, setContactWorkAddress] = useState("")

    function handleSubmit(event) {
        event.preventDefault(); 

        // handle dateReview, setDateReview
        // handle noteTimestamp, setNoteTimestamp
        ConnectionModel.create({preferredName, firstName, lastName, network, company, dateReview, profilePhoto, noteTag, noteContent, noteReviewed, noteBookmark, notePrivacy, noteTimestamp, contactCellPhoneOne, contactCellPhoneTwo, contactEmail, contactWorkName, contactWorkPhone, contactWorkEmail, contactWorkAddress}).then((response)=>{
            console.log(response);
            if (response.status === 201) {
                props.history.push('/user')
            }
        })
        
    }




return (
    <div>
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
                <label htmlFor="lastName">lastName: {lastName}</label><br/>
                <input 
                type="text" 
                name="lastName"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
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
                    <label htmlFor="contactCellPhoneOne">contactCellPhoneOne: {contactCellPhoneOne}</label><br/>
                    <input 
                    type="text" 
                    name="contactCellPhoneOne"
                    value={contactCellPhoneOne}
                    onChange={(e)=> setContactCellPhoneOne(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactCellPhoneTwo">contactCellPhoneTwo: {contactCellPhoneTwo}</label><br/>
                    <input 
                    type="text" 
                    name="contactCellPhoneTwo"
                    value={contactCellPhoneTwo}
                    onChange={(e)=> setContactCellPhoneTwo(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactEmail">contactEmail: {contactEmail}</label><br/>
                    <input 
                    type="text" 
                    name="contactEmail"
                    value={contactEmail}
                    onChange={(e)=> setContactEmail(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactWorkName">contactWorkName: {contactWorkName}</label><br/>
                    <input 
                    type="text" 
                    name="contactWorkName"
                    value={contactWorkName}
                    onChange={(e)=> setContactWorkName(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactWorkPhone">contactWorkPhone: {contactWorkPhone}</label><br/>
                    <input 
                    type="text" 
                    name="contactWorkPhone"
                    value={contactWorkPhone}
                    onChange={(e)=> setContactWorkPhone(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactWorkEmail">contactWorkEmail: {contactWorkEmail}</label><br/>
                    <input 
                    type="text" 
                    name="contactWorkEmail"
                    value={contactWorkEmail}
                    onChange={(e)=> setContactWorkEmail(e.target.value)}
                    /> <br/><br/>
                </div>

                <div>
                    <label htmlFor="contactWorkAddress">contactWorkAddress: {contactWorkAddress}</label><br/>
                    <input 
                    type="text" 
                    name="contactWorkAddress"
                    value={contactWorkAddress}
                    onChange={(e)=> setContactWorkAddress(e.target.value)}
                    /> <br/><br/>
                </div>
            </div>

            <input 
            type="submit"
            value="Login"
            />
        </form>


    </div>
    )
}




// import SideBar from '../components/SideBar/SideBar';






{/* <SideBar /> */}

export default ConnectionNew;