import React, {useState, useEffect} from "react";
import { useSetRecoilState } from "recoil";


import UserModel from "../models/UserModel";
import AuthModel from "../models/AuthModel";
import { userState } from "../recoil/atoms";
import SideBar from "../components/SideBar/SideBar";

const Login = (props)=> {
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
                    setUser(response.User);
                    props.history.push("/user")
                // } else {
                    // setError(response.message);
                // }
            })
        })
    }
    

    return (
        <div className="login-form">
            <SideBar />
            <h3>Login</h3>
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

                <input 
                type="submit"
                value="Login"
                />
            </form>
        </div>

    )
}



export default Login;