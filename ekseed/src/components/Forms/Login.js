import React, {useState, useEffect} from "react";
import { useSetRecoilState } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'

import UserModel from "../../models/UserModel";
import AuthModel from "../../models/AuthModel";
import { userState } from "../../recoil/atoms";
import {useHistory, UseHistory} from "react-router-dom";
import "./Forms.css"

const Login = (props)=> {
    const history = useHistory()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(userState);
    // const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        AuthModel.login({username, email, password}).then((response) => {
            console.log(response);
            localStorage.setItem("uid", response.token);
            UserModel.show().then((response) => {
                console.log(response);
                    setUser(response.User)
                    try{
                        history.push("/user")
                    }
                    catch{
                        (history.push("/connection"))
                    }
                        // history.push("/user").then(history.push("/connection"))
            });
        });
    }
    

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="loginModal"><h2>Login</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4 className="modalHeader">Current User Credentials</h4>
                    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username <span className="inputValue">{username}</span></label><br/>
                            <input 
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            /> <br/><br/>
                        </div>

                        <div>
                            <label htmlFor="email">Email: <span className="inputValue">{email}</span></label><br/>
                            <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            /> <br/><br/>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input 
                            type="password" 
                            name={password}
                            placeholder="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            /> <br/><br/>
                        </div>
                

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
                            {/* <button type="button" className="btn btn-primary"> */}
                            <input 
                            type="submit"
                            value="Login"
                            className="btn btn-primary"
                            // onClick={props.push("/user")}
                            // onClick={props.onHide,}.then{props.history.push("/user")}
                            onClick={props.onHide}
                            />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    {/* <button onClick={props.onHide}>X</button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}



export default Login;