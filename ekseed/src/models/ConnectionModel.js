// import React, { useState} from "react";
const URL = "http://localhost:3001/api/v1/connection";

class ConnectionModel {
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

    static create = (connectionData) => {
        return fetch(`${URL}/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`},
            body: JSON.stringify(connectionData)
        }).then((response) => response.json());
    };


    static update = (connectionId, connectionData) => {
        return fetch(`${URL}/${connectionId}`, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.uid}`
                },
                body: JSON.stringify(connectionData),
        }).then((response) => response.json())
    };

    static delete = (connectionId) => {
        return fetch(`${URL}/${connectionId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`
            },
            body: JSON.stringify({person:"DAVID!"}),
    }).then((response) => response.json())
    }

}

export default ConnectionModel;