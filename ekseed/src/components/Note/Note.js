import React from "react";


import { useRecoilState } from "recoil";
import { noteState } from "../../recoil/atoms";
// if you have access to the global user then you can use that global user to call the back end for that user and then get taht users connections



const Note = ({note}) => {
    console.log("THIS IS FROM THE NOTE COMPONENT NOTE",note)
    const {tag,content, reviewed, bookmark, privacy, timestamp} = note
    
    // const [tag, setTag] = useRecoilState(noteState);
    // const [content, setContent] = useRecoilState(noteState);
    // const [reviewed, setReviewed] = useRecoilState(noteState);
    // const [bookmark, setBookmark] = useRecoilState(noteState);
    // const [privacy, setPrivacy] = useRecoilState(noteState);
    // const [timestamp, setPrivacy] = useRecoilState(noteState);

    // function tagNote() {
    //     const dbConnection = {
    //         tag : ""
    //     }
    // }

    
    return(
        <div className="singleNote">
            <p>PER NOTE</p>
            <p>tag: {tag}</p>
            <p>content: {content}</p>
            <p>reviewed: {reviewed}</p>
            <p>bookmark: {bookmark}</p>
            <p>privacy: {privacy}</p>
            <p>timestamp: {timestamp}</p>
            {/* <div>reviewed</div>
            <div>content<div>bookmark</div></div>
            <div>tag</div>
            <div>privacy</div> */}
        </div>
    )
}

export default Note;