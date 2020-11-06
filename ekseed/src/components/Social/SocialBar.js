import React from "react";

import "./SocialBar.css"

const SocialBar = (props) => {
    return(
        <div className="socialBarStrip">
            <div className="socialList">
                <div>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/6iE0USs.png" alt="instagram icon"/>
                    </p>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/0g8TuFb.png" alt="facebook icon"/>
                    </p>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/i05En9x.png" alt="twitter icon"/>
                    </p>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/Hu5WBJP.png" alt="linked-in icon"/>
                    </p>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/SyoHFLQ.png" alt="github icon"/>
                    </p>
                    <p >
                        <img className="socialIcon" src="https://i.imgur.com/9rLzp4j.png" alt="snapchat icon"/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SocialBar;