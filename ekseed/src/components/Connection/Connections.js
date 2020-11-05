import React, { Component, useEffect, setUser, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useConnection from "../../hooks/useConnection";
import Connection from "./Connection";

import { useRecoilState, useRecoilValue } from "recoil";
import ConnectionModel from "../../models/ConnectionModel";
import { userState } from "../../recoil/atoms";
import "../User/UserGarden.css";
import {Card, Img, Body, Title, Text, ListGroup, ListGroupItem} from 'react-bootstrap'
import UserModel from "../../models/UserModel";



const Connections = (props) => {
    // const [connections, fetchConnections] = useConnection();
    const user = useRecoilValue(userState);
    let connectionId = props.props.match.params.id

    const [connections, fetchConnections] = useConnection(connectionId);
    const [error, setError] = useState("");

    // function generateConnections(connections) {
    //     return connections.map(connection => {
    //         if (connection.network === "self") {
    //             return <Connection className="selfNetwork" key={connection._id} connection={connection} props={props}/>
    //         } else {
    //             return <Connection className="othersNetwork" key={connection._id} connection={connection} props={props}/>
    //         }
    //     })
    // }
    // useEffect(function () {
    //     displayConnections()
    //         // {connections.length ? <Connections connections={connections}/> : <h1>Loading...</h1>}
    //    }, []);
    

    function displayConnections(connections) {  
        fetchConnections(connections)
        // return user.connections.map((connection) => {
            // return connections.map((connection) => {
        connections = []

        return connections = user.connections.map((connection) => {
           if (connection.network === "self") {
               console.log("connections CL connection:", connection)
               {<Connection connection={connection} props={props} connectionId={connection._id}/>}
               
               return (
                <div className="wrapCards">
                    <Link to={`/connection/${connection._id}`}>
                    <Card style={{ width: '18rem' }} className="cardMargin selfNetwork">
                    <Card.Img variant="top" src={connection.profilePhoto} />
                    <Card.Body>
                        <Card.Title>{connection.preferredName}{connection.lastName}</Card.Title>
                        <Card.Text>
                        <div></div>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem className="smallerCardArea">Network: {connection.network}</ListGroupItem>
                        <ListGroupItem className="smallerCardArea">Company: {connection.company}</ListGroupItem>
                        <ListGroupItem className="smallerCardArea">{connection.cellPhoneOne}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href={`/connection/${connection._id}/edit`}>Edit</Card.Link>
                        <Card.Link href={`/connection/${connection._id}`}>View</Card.Link>
                    </Card.Body>
                    </Card>
                    </Link>

                    {/* <div className="garden-connectionList selfNetwork">
                //        <Link to={`/connection/${connection._id}`}>
                //            <p key={connection._id} connection={connection} connectionId={connection._id} props={props} className="garden-connectionList__item-name"> {connection.preferredName} </p>
                //            <div className="garden-connectionList__img-container">
                //                <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
                //            </div>
                //        </Link>
                //    </div> */}
                </div>
           )} else {
               return(
                   <div className="wrapCards">
                       <Link to={`/connection/${connection._id}`}>
                        <Card style={{ width: '18rem' }} className=" cardMargin usersNetwork">
                        <Card.Img variant="top" src={connection.profilePhoto} />
                        <Card.Body>
                            <Card.Title>{connection.preferredName}{connection.lastName}</Card.Title>
                            <Card.Text>
                            <div></div>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem className="smallerCardArea">Network: {connection.network}</ListGroupItem>
                            <ListGroupItem className="smallerCardArea">Company: {connection.company}</ListGroupItem>
                            <ListGroupItem className="smallerCardArea">{connection.cellPhoneOne}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="smallerCardArea" href={`/connection/${connection._id}/edit`}>Edit</Card.Link>
                            <Card.Link className="smallerCardArea" href={`/connection/${connection._id}`}>View</Card.Link>
                        </Card.Body>
                        </Card>
                        </Link>
                    {/* //    <div className="garden-connectionList usersNetwork">
                    //        <Link to={`/connection/${connection._id}`}>
                    //            <p  key={connection._id} className="garden-connectionList__item-name"> {connection.preferredName} </p>
                    //            <div className="garden-connectionList__img-container">
                    //                <img className="garden-connectionList__img-container__img" src={connection.profilePhoto} alt={connection.preferredName} />
                    //            </div>
                    //        </Link>
                    //    </div> */}
                    </div>
               )
           }
       })
   };



    // useEffect(function ()
    // {displayConnections(connections)},
    // fetchConnections().then(
    //         <Connection connection={connections.connection} props={props} connectionId={connections.connection}/>
    // ),[])

    

    return (
        <div className="connectionContainer">
            {/* <h1>ConnectionList: All Connections</h1> */}
            
            {user ? (
            <>
                <h3 className="userNameLogo ">{user.username}</h3>
                {/* <div className="wrapCards"> */}
                    <div >
                        {displayConnections(connections)}
                        {/* {passItOn()} */}
                    </div>
                {/* </div> */}

            </>
            ) : ( 
            <>
                " "
            </>
            )}    
        </div>
    )
}
export default Connections;









// return (
    //     <div>

    //         {user ? (
    //         <>
    //             <h3>{user.username}</h3>
    //             {connectionList}
    //         </>
    //         ) : ( 
    //         <>
    //             " "
    //         </>
    //         )}

    //     </div>
    // )