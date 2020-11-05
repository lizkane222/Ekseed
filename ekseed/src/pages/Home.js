import React from 'react';
import {loggedInState} from "../recoil/selectors"
import {useRecoilValue} from "recoil"
import {userState} from "../recoil/atoms"


const Home = () => {
    // const user = useRecoilValue(userState)
    // if (user){
    //     <div className="pageOverflowXScrollX"></div>
    // } else {
    //     <div className="pageOverflowXScrollXUSER"></div>
    // }


    return (
        <div className="pageOverflowXScrollX">
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    );
}

export default Home;