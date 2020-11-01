import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import { BsPersonPlus } from 'react-icons'

import UserModel from "../../models/UserModel";

import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import {Switch, Route} from "react-router-dom";
import Login from "../../pages/Login"
import Register from "../../pages/Register"
import { loggedInState } from "../../recoil/selectors";
import AuthModel from "../../models/AuthModel"
import Routes from "../../config/Routes"


import "./Sidebar.scss"

const SideBar = (props) => {
    console.log("sidebar", props)
    const [user, setUser] = useRecoilState(userState);

    // const connectionList = user ? user.connections.map((connection) => {
    //     return (
    //         <div>
    //             <Link to={`/user/connection/${connection._id}`}>
    //                 <p key={connection._id}> {connection.preferredName} </p>
    //             </Link>
    //             {/* <Routes /> */}
    //         </div>
    //     ) 
    // })    : '';
    
    // const connectionList = user ? user.connections.map((connection) => <a href={`/user/connection/${connection._id}`}><p key={connection._id}>{connection.preferredName}</p></a>): '';
    
    function logout() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <nav className="side-bar-container" >
            {/* <Routes /> */}
            <div>
                <NavLink to="/" >Ekseed</NavLink>
            </div>
            <div className="nav-links">
                <ul>
                    {user ? (
                        <>
                            <NavLink to={"/user"}>{user.username}</NavLink>
                            <p>{user.username}</p>
                            {/* {connectionList} */}

                            <p>
                            {/* <Link to={`/user/connection/${_id}`} > */}

                                <NavLink to={"/user"}>Garden</NavLink>
                            </p>
                            <p>
                                <NavLink to={"/user/connection/new"}> Connect</NavLink>
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



// import React, { useEffect } from "react";
// import {Switch, Route, withRouter } from "react-router-dom";

// import Home from "../../pages/Home";
// import MyGarden from "../../pages/MyGarden";
// // import ConnectionList from "../pages/ConnectionList";
// import ConnectionNew from "../../pages/ConnectionNew";
// import ConnectionShow from "../../pages/ConnectionShow";
// import ConnectionEdit from "../../pages/ConnectionEdit";
// import Login from "../../pages/Login";
// import Register from "../../pages/Register"

// import { NavLink, Link } from "react-router-dom";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { userState } from "../../recoil/atoms";
// import { loggedInState } from "../../recoil/selectors";

// // import { BsPersonPlus } from 'react-icons'

// const SideBar = (props) => {
//     const loggedIn = useRecoilValue(loggedInState);
//     // console.log("ARE WE props:",props)

//     const currentUser = localStorage.getItem("uid")
//     // console.log(currentUser)
// // =================================================================//
// // ============   Sep Sidebar from Routes   ======================//
// // ==============================================================//
//     // console.log("sidebar",props)
//     const [user, setUser] = useRecoilState(userState);

//     const connectionList = user ? user.connections.map((connection) => {
//         return (
//             <div>
//                 <Link to={`/user/connection/${connection._id}`}>
//                     <p key={connection._id}> {connection.preferredName} </p>
//                 </Link>
//                 {/* <Routes />                */}
//             </div>
//         ) 
//         })
//         : '';
    
//     // const connectionList = user ? user.connections.map((connection) => <a href={`/user/connection/${connection._id}`}><p key={connection._id}>{connection.preferredName}</p></a>): '';

//     function logout() {
//         setUser(null);
//         localStorage.clear();
//     }

// // =================================================================//
// // ============   Sep Sidebar from Routes   ======================//
// // ==============================================================//
//     return (
//         <div>
//             <nav className="side-bar-container" >
//                 <div>
//                     <NavLink to="/" >Ekseed (all companies)</NavLink>
//                 </div>
//                 <div className="nav-links">
//                     <ul>
//                         {user ? (
//                             <>
//                                 <p>{user.username}</p>
//                                 {connectionList}

//                                 <p>
//                                 {/* <Link to={`/user/connection/${_id}`} > */}

//                                     <NavLink to={"/user"}>Garden (all companies in my network)</NavLink>
//                                 </p>
//                                 <p>
//                                     <NavLink to={"/user/connection/new"}>New Connection</NavLink>
//                                 </p>
//                                 <p className="btn" onClick={logout}>
//                                     <NavLink to={"/"}>Logout</NavLink>
//                                 </p>
//                             </>
//                         ) : (
//                             <>
//                                 <p>
//                                     <NavLink to={"/login"}>Login</NavLink>
//                                 </p>
//                                 <p>
//                                     <NavLink to={"/register"}>Register</NavLink>
//                                 </p>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             </nav>



// {/* // =================================================================//
//    // ============   Sep Sidebar from Routes   ======================//
//    // ==============================================================// */}
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 {/* <Route path="/user" component={MyGarden} /> */}
//                 <Route path="/login" component={Login} />{/* at login establish connection to backend */}
//                 <Route path="/register" component={Register} />{/* at register establish connection to backend */}
//                 {/* <Route path="/user/connection/:id" component={ConnectionShow} /> */}

//                 {loggedIn && (
//                     <Switch>
//                         <Route path="/user/connection/new" component={ConnectionNew} />
//                         {/*  put these links in the garden page */}
//                         <Route path="/user/connection/:id/edit" component={ConnectionEdit} />
//                         <Route path="/user/connection/:id" component={ConnectionShow} />
//                         {/* <Route path="/user/connection/:id" render={(match) => (<ConnectionShow currentUser={currentUser} match={match}/>)} /> */}

//                         {/* <Link to={`/user/connection/${_id}`} > */}
//                         <Route path="/user" component={MyGarden} />
//                         <Route exact path="/" component={Home} />

//                         {/* http://localhost:3001/api/v1/auth/register */}

//                     </Switch>
//                 )}
//             </Switch>
//         </div>
//     )
// }
// export default SideBar;
