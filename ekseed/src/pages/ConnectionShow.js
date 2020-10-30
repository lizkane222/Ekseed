import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState, connectionState } from "../recoil/atoms";
import ConnectionModel from "../models/ConnectionModel"
// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections



const Connection = (props) => {
    // console.log("CONNECTION SHOW LINE 12",props)
    const connectionId = props.match.params.id
    // console.log(connectionId)

    const [connectionDetail, setConnectionDetail] = useState(userState)
    console.log("ConnectionShow: userState?",userState)
    // const [connectionUserId, setConnectionUserId] = useState(userState)
    

    useEffect(function () {
        return getConnectionDetail()
    },[]);

    function getConnectionDetail() {
        ConnectionModel.show(connectionId).then((response) => {
            setConnectionDetail(response.connection)
            // console.log("connectionshow pages get connection detail", response)

        })
    }
    console.log("line31 connection detail connection data",connectionDetail)

// connectionDetail for notes .map()


    return(
        <div className="connectionShow">
            <h1>Connection Show Page</h1>
            {connectionDetail && (
            <>
                {/* <p>{connectionDetail.preferredName}</p> */}
                <div>
                    <p>{connectionDetail.preferredName}</p>
                </div>

                <div>
                    <p>{connectionDetail.firstName}</p>
                </div>

                <div>
                    <p>{connectionDetail.lastName}</p>
                </div>

                <div>
                    <p>{connectionDetail.network}</p>
                </div>

                <div>
                    <p>{connectionDetail.company}</p>
                </div>

                <div>
                    <p>{connectionDetail.dateReview}</p>
                </div>

                <div>
                    <p>{connectionDetail.profilePhoto}</p>
                </div>

                <div>
                    <p>{connectionDetail.noteTag}</p>
                </div>

                <div>
                    <p>{connectionDetail.noteContent}</p>
                </div>

                <div>
                    <p>{connectionDetail.noteReviewed}</p>
                </div>

                <div>
                    <p>{connectionDetail.noteBookmark}</p>
                </div>

                <div>
                    <p>{connectionDetail.notePrivacy}</p>
                </div>

                <div>
                    <p>{connectionDetail.noteTimestamp}</p>
                </div>

                <div>
                    <p>{connectionDetail.cellPhoneOne}</p>
                </div>

                <div>
                    <p>{connectionDetail.cellPhoneTwo}</p>
                </div>

                <div>
                    <p>{connectionDetail.email}</p>
                </div>

                <div>
                    <p>{connectionDetail.workName}</p>
                </div>

                <div>
                    <p>{connectionDetail.workPhone}</p>
                </div>

                <div>
                    <p>{connectionDetail.workEmail}</p>
                </div>

                <div>
                    <p>{connectionDetail.workAddress}</p>
                </div>

                <div>
                    <p>{connectionDetail.moreContact}</p>
                </div>
            </>
            )}

        </div>
    )
}



// import SideBar from '../components/SideBar/SideBar';

{/* <SideBar /> */}

export default withRouter(Connection);


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