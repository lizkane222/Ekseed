import React, {useState} from "react";
import { useSetRecoilState } from "recoil";


import UserModel from "../../models/UserModel";
import AuthModel from "../../models/AuthModel";
import { userState } from "../../recoil/atoms";


const Login = (props)=> {
    // const [user, setUser] = useRecoilState(userState);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup_date, setSignup_Date] = useState("");

    const setUser = useSetRecoilState(userState);

    
    function handleSubmit(event) {
        event.preventDefault();
        setSignup_Date = signup_date(Date.now());

        AuthModel.login({ username, email, password, signup_date}).then((response) => {
            console.log(response);
            localStorage.setItem("uid", response.signedJwt);
            UserModel.show().then((response) => {
                console.log(response);
                setUser(response.data);
                props.history.push("/garden")
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

                    <label htmlFor="password">{password}</label><br/>
                    <input 
                    type="text" 
                    name={password}
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