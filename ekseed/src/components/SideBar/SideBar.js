import React from "react";
import { NavLink } from "react-router-dom";
import { BsPersonPlus } from 'react-icons'

// import to use the recoil state
import { useRecoilState } from "recoil";
// import the atom that controls the global state
import { userState } from "../../recoil/atoms";

import "./Sidebar.scss"

const SideBar = (props) => {
    const [user, setUser] = useRecoilState(userState);

    function login() {
        const dbUser = {
            username: "test user",
        };

        setUser(dbUser);
    }

    function logout() {
        setUser(null);
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
                            <NavLink to={"/basepath"}>Garden (all companies in my network)</NavLink>
                        </p>
                        <p>
                            <NavLink to={"/basepath/new"}>New Connection</NavLink>
                        </p>
                        <p className="btn" onClick={logout}>
                            Log Out
                        </p>
                    </>
                    ) : (
                        <p className="btn" onClick={login}>
                            Log In
                        </p>
                    )}
                </ul>
            </div>
        </nav>
    );
};


export default SideBar;