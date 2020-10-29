import React from "react";


import { useRecoilState } from "recoil";
import { connectionState } from "../recoil/atoms";
// if you have access to the global user then you can use that global user to call the back end for that user and then get that users connections



const Connection = () => {
    // 

    const [tag, setTag] = useRecoilState(connectionState);
    const [content, setContent] = useRecoilState(connectionState);
    const [reviewed, setReviewed] = useRecoilState(connectionState);
    const [bookmark, setBookmark] = useRecoilState(connectionState);
    const [privacy, setPrivacy] = useRecoilState(connectionState);

    function tagNote() {
        const dbConnection = {
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



// import SideBar from '../components/SideBar/SideBar';

{/* <SideBar /> */}

export default Connection;