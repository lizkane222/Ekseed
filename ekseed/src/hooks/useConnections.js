import { useState, useEffect } from "react";

import Connection from '../models/ConnectionModel';


function useConnection(connectionId) {
    const [connections, setConnections] = useState([]);

    function fetchConnections(id) {
        if (id) {
            Connection.show(id).then((data) => {
                setConnections(data.connection);
            });
        } else {
            Connection.all().then((data) => {
                setConnections(data.connections);
            });
        }
    }

    useEffect(
        function () {
            fetchConnections(connectionId);
        },
        [connectionId]
    );

    return [connections, fetchConnections];
}

export default useConnection;