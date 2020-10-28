import { userState, useEffect } from "react";

import UserConnection from '../models/UserConnectionModel';

function useUserConnection(connectionId) {
    const [connections, setConnections] = useState([]);

    function fetchUserConnections(id) {
        if (id) {
            UserConnection.show(id).then((data) => {
                setConnections(data.connection);
            });
        } else {
            UserConnection.all().then((data) => {
                setConnections(data.connections);
            });
        }
    }

    useEffect(
        function () {
            fetchUserConnections(connectionId);
        },
        [connectionId]
    );

    return [connections, fetchUserConnections];
}

export default useUserConnection;