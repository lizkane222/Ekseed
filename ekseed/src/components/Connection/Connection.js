import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { userState, connectionState } from "../../recoil/atoms";
import ConnectionModel from "../../models/ConnectionModel"
import Note from "../Note/Note";
import "./Connection.css"


const ConnectionComp = (props) => {
    // const {preferredName, firstName, lastName, network, company, dateReview, profilePhoto, note: [{content, reviewed, bookmark, privacy}],cellPhoneOne, cellPhoneTwo, email, workName, workPhone, workEmail, workAddress, moreContact, _id } = props.connection;
    // console.log(props)

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
    // {connectionDetail.note.map(note => <p>{note.content} </p>)}
    // const notes = connectionDetail.note.map((note, idx) => <Note note={note}/> )

    return (
        <div className="connection-show">
            <>
            <h3>Connection Component</h3>

            </>
            {connectionDetail && (
            
            <>
            <section className="connection-show__network">
                <div className="connection-show__network__item">
                    <p>preferredName: <b>{connectionDetail.preferredName}</b></p>
                </div>

                <div className="connection-show__network__item">
                    <p>firstName: <b>{connectionDetail.firstName}</b></p>
                </div>

                <div className="connection-show__network__item">
                    <p>lastName: <b>{connectionDetail.lastName}</b></p>
                </div>

                <div className="connection-show__network__item">
                    {/* <Link to={`/user/connection`} >
                        <div className='image-wrapper'>
                            <img src={connectionDetail.network} alt={connectionDetail.network} />
                        </div>
                    </Link> */}
                    <p>network: <b>{connectionDetail.network}</b></p>
                </div>

                <div className="connection-show__network__item">
                    {/* <Link to={`/user/connection`} >
                        <div className='image-wrapper'>
                            <img src={connectionDetail.company} alt={connectionDetail.company} />
                        </div>
                    </Link> */}
                    <p>company: <b>{connectionDetail.company}</b></p>
                </div>

                <div className="connection-show__network__item">
                    <p>dateReview: <b>{connectionDetail.dateReview}</b></p>
                </div>
            
                <div className="connection-show__network__item">
                    <Link to={`/user/connection`} >
                        <div className='image-wrapper'>
                            <img src={connectionDetail.profilePhoto} alt={connectionDetail.preferredName} />
                        </div>
                    </Link>
                </div>
            </section>
                {/* {connectionDetail && (notes)} */}


            <section className="connection-show__contact">
                <div className="connection-show__contact__item">
                    <p>cellPhoneOne: <b>{connectionDetail.cellPhoneOne}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>cellPhoneTwo: <b>{connectionDetail.cellPhoneTwo}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>email: <b>{connectionDetail.email}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>workName: <b>{connectionDetail.workName}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>workPhone: <b>{connectionDetail.workPhone}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>workEmail: <b>{connectionDetail.workEmail}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>workAddress: <b>{connectionDetail.workAddress}</b></p>
                </div>

                <div className="connection-show__contact__item">
                    <p>moreContact: <b>{connectionDetail.moreContact}</b></p>
                </div>
            </section>
            
            </>
            )}


            <a href="/user/connection/edit">EDIT {connectionDetail.preferredName}</a>
        </div>
    )
}

export default ConnectionComp;









// note.tag, note.content, note.reviewed, note.bookmark, note.privacy

// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections
            



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


    // {connectionDetail.note.map(note =><p>{note.content}</p>)}

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