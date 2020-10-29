import React from "react";


import { useRecoilState } from "recoil";
import { noteState } from "../../recoil/atoms";
// if you have access to the global user then you can use that global user to call the back end for that user and then get taht users connections



const Note = () => {
    // 

    const [tag, setTag] = useRecoilState(noteState);
    const [content, setContent] = useRecoilState(noteState);
    const [reviewed, setReviewed] = useRecoilState(noteState);
    const [bookmark, setBookmark] = useRecoilState(noteState);
    const [privacy, setPrivacy] = useRecoilState(noteState);

    function tagNote() {
        const dbUserConnection = {
            tag : ""
        }
    }
    return(
        <div class="singleNote">
            <div>reviewed</div>
            <div>content<div>bookmark</div></div>
            <div>tag</div>
            <div>privacy</div>
        </div>
    )
}