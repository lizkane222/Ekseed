import { useState, useEffect } from "react";


import UserConnectionModel from "../models/UserConnectionModel";
import SideBar from '../components/SideBar/SideBar';



const Garden = (userId) => {
    console.log("SOME STRING");

    const [connections, setConnections] = useState([]);

    function fetchConnections(id) {
        // if (id) {
        //     UserConnectionModel.show(id).then((data) => {
        //         console.log(data);
        //         setConnections(data.UserConnection);
        //     });
        // } else {
            UserConnectionModel.all().then((data) => {
                console.log(data);
                setConnections(data.UserConnection);
            });
        // }
    }

    useEffect(
        function() {
            fetchConnections(userId);
        },
        [userId]
    )

    return (
        <div>
            <h1>My Garden Page</h1>
            <SideBar />
            {/* [] */}
        </div>
    );
}



export default Garden;