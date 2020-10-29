const URL = "http://localhost:3001/api/v1/connection";

class ConnectionModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    };

    static show = (connectionid) => {
        return fetch(`${URL}/${connectionid}`).then((response) => response.json());
    };

    static create = (connectionData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(connectionData),
        }).then((response) => response.json());
    };

    static edit = (connectionId, connectionData) => {
        return fetch(`${URL}/${connectionId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(connectionData),
        }).then((response) => response.json())
    };
}

export default ConnectionModel;