import { useState, useEffect } from "react";


import ConnectionModel from "../models/ConnectionModel";
import SideBar from '../components/SideBar/SideBar';
import { userState } from "../recoil/atoms";



const Garden = (userId) => {
    console.log(" My Garden passes userId");

    const [connections, setConnections] = useState([]);

    function fetchConnections(id) {
        if (id) {
            ConnectionModel.show(id).then((data) => {
                console.log(data);
                setConnections(data.Connection);
            });
        } else {
            ConnectionModel.all().then((data) => {
                console.log(data);
                setConnections(data.Connection);
            });
        }
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
            {/* <h3>{connections.preferredName}</h3> */}

        </div>
    );
}



export default Garden;