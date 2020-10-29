import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsPersonPlus } from 'react-icons'

// import to use the recoil state
import { useRecoilState, useRecoilValue } from "recoil";
// import the atom that controls the global state
import { userState } from "../../recoil/atoms";
import User from "../../models/UserModel"
import "./Sidebar.scss"
import Login from "./Login"
import Logout from "./Login"
import UserModel from "../../models/UserModel";


const SideBar = (props) => {
    const [user, setUser] = useRecoilValue(userState);

    useEffect(() => {
        if (localStorage.getItem("uid")) {
            UserModel.show().then((response)=> {
                setUser(response.data);
            });
        }
    }, []);


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
                            <NavLink to={"/garden"}>Garden (all companies in my network)</NavLink>
                        </p>
                        <p>
                            <NavLink to={"/userconnection/new"}>New Connection</NavLink>
                        </p>
                        <p>
                            <NavLink to={"/garden"}>Login</NavLink>
                        </p>
                    </>
                    ) : (
                        <p>
                            <NavLink to={"/"}>Logout</NavLink>
                        </p>
                    )}
                </ul>
            </div>
        </nav>
    );
};


export default SideBar;