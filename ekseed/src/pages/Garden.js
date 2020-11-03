import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';

import ConnectionModel from "../models/ConnectionModel";
import SideBar from '../components/SideBar/SideBar';
import { userState } from "../recoil/atoms";
import UserGarden from "../components/User/UserGarden";
import Logo from "../components/Logo/Logo"


const Garden = (props) => {
    // console.log(" My Garden passes userId");

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
            fetchConnections();
        },
        []
    )

    return (
        <div>
            
            {/* <h1>My Garden Page</h1> */}
            {/* <SideBar /> */}
            <UserGarden />
            <div>

            </div>
        </div>
    );
}



export default Garden;