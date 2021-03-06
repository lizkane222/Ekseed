import React from "react";
import {Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ConnectionList from "../pages/ConnectionList";
import ConnectionNew from "../pages/ConnectionNew";
import ConnectionShow from "../pages/ConnectionShow";
import ConnectionEdit from "../pages/ConnectionEdit";
import Login from "../components/Forms/Login";
import Register from "../components/Forms/Register"
import User from "../components/User/User"
import ProfilePage from "../pages/Profile"

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";
import NoteContainer from "../components/Note/NoteContainer/NoteContainer";

const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    // console.log("ARE WE props:",props)

    const currentUser = localStorage.getItem("uid")
    console.log(currentUser)

    return (
        <Switch>

            {/* <Route path="/user" component={Garden} /> */}
            <Route path="/login" component={Login} />{/* at login establish connection to backend */}
            <Route path="/register" component={Register} />{/* at register establish connection to backend */}
            <Route path="/note" component={NoteContainer} />
            <Route exact path="/" component={Home} />

            {/* <Route path="/connection/:id" component={ConnectionShow} /> */}
            
            {/* {loggedIn && ( */}
            {currentUser && (
                <Switch>

                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/connection/:id/edit" component={ConnectionEdit} />
                    <Route path="/connection/new" component={ConnectionNew} />
                    <Route path="/connection/:id" component={ConnectionShow} />
                    {/* <Route path="/connection/:id" render={(match) => (<ConnectionShow currentUser={currentUser} match={match}/>)} /> */}
                    

                    {/* <Link to={`/connection/${_id}`} > */}
                    <Route path="/connection" component={ConnectionList} />
                    <Route path="/user" component={Home} />
                    {/* <Route exact path="/user" component={User} /> */}
                    <Route exact path="/ekseed" component={Home} />
                    <Route path="/note" component={NoteContainer} />

                </Switch>
            )}
        </Switch>
    )
}

export default Routes;