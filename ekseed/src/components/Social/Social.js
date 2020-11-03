import React from "react";

import { FaFacebook, FaGithubSquare, FaInstagramSquare, FaPinterest, FaSnapchat, FaTwitter, FaWhatsapp, FaYoutubeSquare, FaAt, FaAngleDoubleUp, FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleDoubleDown, BsBookmarkFill, BsBuilding, FaPlus, FaUserAstronaut, FaKey, FaWifi, FaRegHandshake, FaRegEdit, FaRegFlushed, FaSlideshare, FaLinkedinIn, FaRegGrinBeam, FaShareSquare,  } from "react-icons/bs"

import { AiOutlineLike, AiOutlineDislike, AiFillStar  } from "react-icons/ai"

import { MdLocationOn,   } from "react-icons/md"
import { RiUserShared2Line,   } from "react-icons/ri"
import { TiImage, TiHeartOutline, TiLockOpenOutline, TiLockOpen, TiAt, TiLockClosed, TiLockClosedOutline  } from "react-icons/ti"



const Social = (props) => {
    return(
        <div>
            <FaFacebook />
            <FaGithubSquare />
            <FaInstagramSquare />
            <FaPinterest />
            <FaSnapchat />
            <FaLinkedinIn/>
            <FaTwitter />
            <FaYoutubeSquare/>
            <FaWhatsapp />
            

            {/* astronaut (DEFAUL PROFILE PHOTO) */}
            < FaUserAstronaut/>
            
            {/* wifi password */}
            <FaWifi /><FaKey />
            
            {/* stars */}
            < AiFillStar/>
            
            {/* in common */}
            <FaRegHandshake />
            <FaSlideshare />
            
            {/* edit note */}
            <FaRegEdit />

            {/* not reviewed */}
            <FaRegFlushed />
            {/* reviewed */}
            <FaRegGrinBeam />

            {/* share */}
            <FaShareSquare />
            < RiUserShared2Line/>
            
            {/* heart */}
            <TiHeartOutline />
            
            {/* unlocked/locked */}
            <TiLockOpenOutline />
            <TiLockOpen />
            <TiLockClosed />
            <TiLockClosedOutline />
            
            {/* at @  */}
            <TiAt />
            < FaAt/>

            {/* upload image */}
            <TiImage />

            {/* ICONS */}
            {/* arrows contact box */}
            <FaAngleDoubleUp />
            <FaAngleDoubleRight />
            <FaAngleDoubleLeft />
            <FaAngleDoubleDown />

            {/* bookmark */}
            < BsBookmarkFill/>
            
            {/* like/dislike */}
            <AiOutlineLike />
            <AiOutlineDislike />

            {/* location */}
            <MdLocationOn />

            {/* plus */}
            <FaPlus />

            {/* work */}
            <BsBuilding />

            {/* phone */}
            {/* <FiPhoneOff /> */}
            {/* <FiPhoneCall /> */}


        </div>
    )
}

export default Social

// MOVED ELSEWHERE
// <BsBuilding />
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 