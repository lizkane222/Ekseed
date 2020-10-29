const URL = "http://localhost:3001/api/v1/users";

class UserModel {
    static show() {
        return fetch(URL, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("uid")}`,
                // authorization: `Bearer ${localStorage.uid}`,
            },
        })
        .then((response) => response.json())
        .catch((err) => console.log(err));
    }
}

export default UserModel;