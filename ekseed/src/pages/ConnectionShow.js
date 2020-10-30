import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState, connectionState } from "../recoil/atoms";
import ConnectionModel from "../models/ConnectionModel"
import SideBar from "../components/SideBar/SideBar";
import ConnectionComp from "../components/Connection/Connection"
// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections



const Connection = (props) => {
//     // console.log("CONNECTION SHOW LINE 12",props)
//     const connectionId = props.match.params.id
//     // console.log(connectionId)

//     const [connectionDetail, setConnectionDetail] = useState(userState)
//     console.log("ConnectionShow: is userState", userState)
//     // const [connectionUserId, setConnectionUserId] = useState(userState)
    

//     useEffect(function () {
//         return getConnectionDetail()
//     },[]);

//     function getConnectionDetail() {
//         ConnectionModel.show(connectionId).then((response) => {
//             setConnectionDetail(response.connection)
//             // console.log("connectionshow pages get connection detail", response)

//         })
//     }
//     console.log("line31 connection detail connection data, CONNECTION DETAIL ",connectionDetail)
//     const noteArr = []
// // connectionDetail for notes .map()

    // for (let i in connectionDetail){
    //     // if (connectionDetail.hasOwnProperty("note")){
    //         console.log("MY FOR LOOP TO GET NOTE", i, typeof(i))
    //     // }
    // }

    // {connectionDetail.note.map(note => <p>{note.content} </p>)}

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



    return(
        <div className="connectionShow">
            <SideBar />

            <h1>Connection Show Page</h1>
            <ConnectionComp props={props}/>

            </div>
    )
}

export default withRouter(Connection);

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