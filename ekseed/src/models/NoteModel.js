const URL = "http://localhost:3001/api/v1/note";


class NoteModel {

    static all = () => {
        return fetch(URL,{
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.uid}`}}).then((response) => response.json());
    };


    static show = (noteId) => {
        console.log( "LINE 14", noteId)
        return fetch(`${URL}/${noteId}`,
        {
        method: "GET",
        headers: {
        authorization: `Bearer ${localStorage.uid}`}},)
            .then((response) => response.json());
    };

    static create = (connectionId, noteData) => {
        return fetch(`${URL}/?connection=${connectionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`},
            body: JSON.stringify(noteData)
        }).then((response) => response.json());
    };


    static update = (noteId, noteData) => {
        return fetch(`${URL}/${noteId}`, 
            {
                headers: {
                authorization: `Bearer ${localStorage.uid}`, 
                "Content-Type": "application/json"},
            
                method: "PUT",
                body: JSON.stringify(noteData),
            }
            ).then((response) => response.json())
    };

    static destroy = (note) => {
        return fetch(`${URL}/${note._id}`,
        {
            headers: {
            authorization: `Bearer ${localStorage.uid}`, 
            "Content-Type": "application/json"},
        
            method: "DESTROY",
            body: JSON.stringify(noteData),
        }
        ).then((response) => response.json())
    }

}


// CREATE STATIC DELETE

export default NoteModel;