import React from "react";

import "./SocialBar.css"

const SocialBar = (props) => {
    return(
        <div className="socialBarStrip">
            <div className="socialList">
                <ul >
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/6iE0USs.png" alt="instagram icon"/>
                    </li>
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/0g8TuFb.png" alt="facebook icon"/>
                    </li>
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/i05En9x.png" alt="twitter icon"/>
                    </li>
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/Hu5WBJP.png" alt="linked-in icon"/>
                    </li>
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/SyoHFLQ.png" alt="github icon"/>
                    </li>
                    <li >
                        <img className="socialIcon" src="https://i.imgur.com/9rLzp4j.png" alt="snapchat icon"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SocialBar;