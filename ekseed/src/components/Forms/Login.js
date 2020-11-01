import React, {useState, useEffect} from "react";
import { useSetRecoilState } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'

import UserModel from "../../models/UserModel";
import AuthModel from "../../models/AuthModel";
import { userState } from "../../recoil/atoms";
import {useHistory, UseHistory} from "react-router-dom";

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
                // if (response.status === 200) {
                    setUser(response.User)
                    history.push("/user")
                    // console.log("history" ,history)
                // } else {
                    // setError(response.message);
                // }
            })
        })
    }
    

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="loginModal">Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4>Current User Credentials</h4>
                    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username {username}</label><br/>
                            <input 
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            /> <br/><br/>
                        </div>

                        <div>
                            <label htmlFor="email">Email: {email}</label><br/>
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