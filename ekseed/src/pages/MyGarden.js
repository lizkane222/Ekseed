import { useState, useEffect } from "react";


import ConnectionModel from "../models/ConnectionModel";
import SideBar from '../components/SideBar/SideBar';



const Garden = (userId) => {
    console.log("SOME STRING");

    const [connections, setConnections] = useState([]);

    function fetchConnections(id) {
        // if (id) {
        //     ConnectionModel.show(id).then((data) => {
        //         console.log(data);
        //         setConnections(data.Connection);
        //     });
        // } else {
            ConnectionModel.all().then((data) => {
                console.log(data);
                setConnections(data.Connection);
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