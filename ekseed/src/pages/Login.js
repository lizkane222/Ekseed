import React, {useState, useEffect} from "react";
import { useSetRecoilState } from "recoil";


import UserModel from "../models/UserModel";
import AuthModel from "../models/AuthModel";
import { userState } from "../recoil/atoms";


const Login = (props)=> {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(userState);
    // const [error, setError] = useState("");

    // useEffect(function () {
    //     if (localStorage.getItem("uid")) {
    //         UserModel.show().then((response) => {
    //         console.log(response)
    //         setUser(response.data);
    //         });
    //     }
    // }, []);

    function handleSubmit(event) {
        event.preventDefault();

        AuthModel.login({username, email, password}).then((response) => {
            console.log(response);
            localStorage.setItem("uid", response.signedJwt);
            UserModel.show().then((response) => {
                console.log(response);
                setUser(response.data);
                props.history.push("/user")
            })
        })
    }
    
    
        return (
            <div className="login-form">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username {username}</label><br/>
                    <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    /> <br/><br/>

                    <label htmlFor="email">Email: {email}</label><br/>
                    <input 
                    type="text" 
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    /> <br/><br/>

                    <label htmlFor="password">Password</label><br/>
                    <input 
                    type="text" 
                    name={password}
                    placeholder="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    /> <br/><br/>
    {/* handle submit */}
    {/* authorization login */}
            {/* write a handle submit, when form is submitted it takes state from all hooks & sends to auth model, then set user state to the authorized user */}
                    <input 
                    type="submit"
                    value="Login"
                    />
                </form>
            </div>

        )
}



export default Login;