import React,{ useState, useEffect } from "react";
import ConnectionModel from "../models/ConnectionModel";



function useConnection(connectionId) {
    const [connections, setConnections] = useState([]);

    function fetchConnections(id) {
        if (id) {
            ConnectionModel.show(id).then((data) => {
                setConnections(data.connection);
            });
        } else {
            ConnectionModel.all().then((data) => {
                setConnections(data.connections);
            });
        }
    }

    useEffect(
        function () {
            fetchConnections(connectionId);
        },
        []
    );

    return [connections, fetchConnections];
}

export default useConnection;