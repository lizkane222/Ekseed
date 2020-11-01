import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from "recoil";
// import { userState, connectionState } from "../recoil/atoms";
// import ConnectionModel from "../models/ConnectionModel"
import SideBar from "../components/SideBar/SideBar";
import Connection from "../components/Connection/Connection"
import {loggedInState} from "../recoil/selectors"
import { userState } from "../recoil/atoms";
import Logo from "../components/Logo/Logo"
import NoteContainer from "../components/Note/NoteContainer/NoteContainer"
import Note from "../components/Note/Note";

const ConnectionShow = (props) => {
    const user = useRecoilValue(userState)


    return(
        <div className="connectionShow">

                <Logo />
                
                {/* <SideBar /> */}
                
                <h1>Connection Show Page</h1>



                <Connection props={props} user={user}/>
                <NoteContainer />
   



        </div>
    )
}

export default withRouter(ConnectionShow);
// export default Connection;






            {/* {connectionDetail && (
            <> */}
                {/* <p>{connectionDetail.preferredName}</p> */}
                {/* <div>
                    <p>preferredName: <b>{connectionDetail.preferredName}</b></p>
                </div>

                <div>
                    <p>firstName: <b>{connectionDetail.firstName}</b></p>
                </div>

                <div>
                    <p>lastName: <b>{connectionDetail.lastName}</b></p>
                </div>

                <div>
                    <p>network: <b>{connectionDetail.network}</b></p>
                </div>

                <div>
                    <p>company: <b>{connectionDetail.company}</b></p>
                </div>

                <div>
                    <p>dateReview: <b>{connectionDetail.dateReview}</b></p>
                </div>

                <div>
                    <p>profilePhoto: <b>{connectionDetail.profilePhoto}</b></p>
                </div>

                {/* <div>
                    <p>note: <b>{connectionDetail.note}</b></p>
                </div> */}

                 {/* <div>
                    <p>noteTag:</p> {connectionDetail.note.map(note =><p><b>{note.content}</b></p>)}
                </div> */}
{/* 
                <div>
                    <p>noteContent: <b>{connectionDetail.note.noteContent}</b></p>
                </div>

                <div>
                    <p>noteReviewed: <b>{connectionDetail.note.noteReviewed}</b></p>
                </div>

                <div>
                    <p>noteBookmark: <b>{connectionDetail.note.noteBookmark}</b></p>
                </div>

                <div>
                    <p>notePrivacy: <b>{connectionDetail.note.notePrivacy}</b></p>
                </div>

                <div>
                    <p>noteTimestamp: <b>{connectionDetail.note.noteTimestamp}</b></p>
                </div> */}

                {/* <div>
                    <p>cellPhoneOne: <b>{connectionDetail.cellPhoneOne}</b></p>
                </div>

                <div>
                    <p>cellPhoneTwo: <b>{connectionDetail.cellPhoneTwo}</b></p>
                </div>

                <div>
                    <p>email: <b>{connectionDetail.email}</b></p>
                </div>

                <div>
                    <p>workName: <b>{connectionDetail.workName}</b></p>
                </div>

                <div>
                    <p>workPhone: <b>{connectionDetail.workPhone}</b></p>
                </div>

                <div>
                    <p>workEmail: <b>{connectionDetail.workEmail}</b></p>
                </div>

                <div>
                    <p>workAddress: <b>{connectionDetail.workAddress}</b></p>
                </div>

                <div>
                    <p>moreContact: <b>{connectionDetail.moreContact}</b></p>
                </div>
            </>
            )}  */}


// import SideBar from '../components/SideBar/SideBar';

{/* <SideBar /> */}



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
                <p>{preferredName}</p>
            </div>

            <div>
                <p>{firstName}</p>
            </div>

            <div>
                <p>{lastName}</p>
            </div>

            <div>
                <p>{network}</p>
            </div>

            <div>
                <p>{company}</p>
            </div>

            <div>
                <p>{dateReview}</p>
            </div>

            <div>
                <p>{profilePhoto}</p>
            </div>

            <div>
                <p>{noteTag}</p>
            </div>

            <div>
                <p>{noteContent}</p>
            </div>

            <div>
                <p>{noteReviewed}</p>
            </div>

            <div>
                <p>{noteBookmark}</p>
            </div>

            <div>
                <p>{notePrivacy}</p>
            </div>

            <div>
                <p>{noteTimestamp}</p>
            </div>

            <div>
                <p>{cellPhoneOne}</p>
            </div>

            <div>
                <p>{cellPhoneTwo}</p>
            </div>

            <div>
                <p>{email}</p>
            </div>

            <div>
                <p>{workName}</p>
            </div>

            <div>
                <p>{workPhone}</p>
            </div>

            <div>
                <p>{workEmail}</p>
            </div>

            <div>
                <p>{workAddress}</p>
            </div>

            <div>
                <p>{moreContact}</p>
            </div> */}