import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import { BsPersonPlus } from 'react-icons'
// import {Modal as loginModal} from 'react-bootstrap'
import {Modal as registerModal} from 'react-bootstrap'
import {Modal as logoutModal} from 'react-bootstrap'

import UserModel from "../../models/UserModel";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";


import { loggedInState } from "../../recoil/selectors";
import AuthModel from "../../models/AuthModel"
import Routes from "../../config/Routes"
import NoteContainer from "../Note/NoteContainer/NoteContainer"
import Logo from "../Logo/Logo"
import Login from "../Forms/Login"
import Register from "../Forms/Register"
import Logout from "../Forms/Logout"

import "./Sidebar.css"

const SideBar = (props) => {
    console.log("sidebar", props)
    const [user, setUser] = useRecoilState(userState);
    // const [modalShow, setModalShow] = React.useState(false);

    const [logoutModal, setlogoutModal] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [registerModalShow, setRegisterModalShow] = React.useState(false);

    
    // const connectionList = user ? user.connections.map((connection) => <a href={`/user/connection/${connection._id}`}><p key={connection._id}>{connection.preferredName}</p></a>): '';
    // <div>

    // function handleLogout(event) {
    //     event.preventDefault();
    //     <Logout show={logoutModalShow} onHide={() => setLogoutModalShow(false)} handleLogout={props.handleLogout}/>


    const logout = ()=> {
        setUser(null);
        localStorage.clear();
        // history.push("/")
    }
    const handlelogout = ()=> {
        setUser(null);
        localStorage.clear();
        // history.push("/")
    }

    const logoutModalFunction = () => {
        <Logout show={logoutModal} onHide={() => setlogoutModal(false)} handleLogout={props.handleLogout}/>
    }
    
    
    return (
        <div className="side-bar">
                <Logo />

            <nav className="side-bar-container navlink" >

                    <NavLink className="navlink" to="/" ><p className="link">Ekseed</p></NavLink>
                
                    <NavLink className="navlink" to="/note" ><p className="link">Note</p></NavLink>
                {/* <button type="button" class="btn btn-primary" data-toggle="modal"  onClick={() => setlogoutModal(true)}data-target="#logoutmodal">logout</button> */}
                {/* <Logout show={logoutModal} onHide={() => setlogoutModal(false)} handleLogout={props.handleLogout}/> */}


                <div className="nav-links">
                    <ul>
                        {user ? (
                            <>
                                <NavLink className="navlink" to={"/user/connection"}><p className="link">{user.username}</p></NavLink>
                
                                <NavLink className="navlink" to={"/user"}><p className="link">Garden</p></NavLink>
                                
                                <NavLink className="navlink" to={"/user/connection/new"}><p className="link"> Connect</p></NavLink>
                                
                                <NavLink className="navlink" to={"/"}><p className="link" onClick={logout}>Logout</p></NavLink>
                                {/* <button type="button" class="navlink" data-toggle="modal"  onClick={() => setlogoutModal(true)} data-target="#logoutmodal">logout</button> */}
                                <button type="button" class="navlink" data-toggle="modal"  onClick={() => setlogoutModal(true).then(() => logoutModalFunction)} data-target="#logoutmodal">logout</button>
                                {/* <Logout show={logoutModal} onHide={() => setlogoutModal(false)} handleLogout={props.handleLogout}/> */}
                                {logoutModalFunction}

                            </>
                        ) : (
                            <>
                                <NavLink className="navlink" to={"/login"} variant="primary" onClick={() => setLoginModalShow(true)} data-target="#loginModal"><p className="link">login</p></NavLink>
                                <Login show={loginModalShow} onHide={() => setLoginModalShow(false)}/>

                                <NavLink className="navlink" to={"/register"} variant="primary" onClick={() => setRegisterModalShow(true)} data-target="#registerModal"><p className="link">register</p></NavLink>
                                <Register show={registerModalShow} onHide={() => setRegisterModalShow(false)}/>

                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
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
