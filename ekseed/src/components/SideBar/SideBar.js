import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BsPersonPlus } from 'react-icons'

import UserModel from "../../models/UserModel";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import { loggedInState } from "../../recoil/selectors";
import AuthModel from "../../models/AuthModel"
// import "./Sidebar.scss"

const SideBar = (props) => {
    const [user, setUser] = useRecoilState(userState);

    // useEffect(function () {
    //     if (localStorage.getItem("uid")) {
    //         UserModel.show().then((response) => {
    //         console.log(response)
    //         setUser(response.data);
    //         });
    //     }
    // }, []);



    function logout() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <nav className="side-bar-container" >
            <div>
                <NavLink to="/" >Ekseed (all companies)</NavLink>
            </div>
            <div className="nav-links">
                <ul>
                    {user ? (
                        <>
                            <p>{user.username}</p>
                            <p>
                                <NavLink to={"/user"}>Garden (all companies in my network)</NavLink>
                            </p>
                            <p>
                                <NavLink to={"/userconnection/new"}>New Connection</NavLink>
                            </p>
                            <p className="btn" onClick={logout}>
                                <NavLink to={"/"}>Logout</NavLink>
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                <NavLink to={"/login"}>Login</NavLink>
                            </p>
                            <p>
                                <NavLink to={"/register"}>Register</NavLink>
                            </p>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};


export default SideBar;