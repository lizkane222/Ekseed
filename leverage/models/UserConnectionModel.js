const URL = "http://localhost:3001/api/v1/userConnection";

class UserConnectionModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    };

    static show = (userConnectionid) => {
        return fetch(`${URL}/${userConnectionid}`).then((response) => response.json());
    };

    static create = (userConnectionData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userConnectionData),
        }).then((response) => response.json());
    };

    static edit = (userConnectionid, userConnectionData) => {
        return fetch(`${URL}/${userConnectionData}`, {
            
        })
    }
}