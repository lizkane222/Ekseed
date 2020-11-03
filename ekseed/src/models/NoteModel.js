import axios from 'axios';

const URL = "http://localhost:3001/api/v1/note";


class NoteModel {
  static all = () => {
    const request = axios.get(URL);
    return request;
  };

  static all = () => {
    return fetch(URL,{
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`}}).then((response) => response.json());
};


static show = (connectionId) => {
    console.log( "LINE 14", connectionId)
    return fetch(`${URL}/${connectionId}`,
    {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.uid}`}},)
        .then((response) => response.json());
};

// static create = (connectionData) => {
//     return fetch(`${URL}/new`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.uid}`},
//         body: JSON.stringify(connectionData)
//     }).then((response) => response.json());
// };


// static edit = (connectionId, connectionData) => {
//     return fetch(`${URL}/${connectionId}`, 
//         {
//             method: "GET",
//             headers: {
//             authorization: `Bearer ${localStorage.uid}`}}).then((response) => response.json()).then(
//         {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//         },
//             body: JSON.stringify(connectionData),
//     }).then((response) => response.json())
// };

};

export default NoteModel;