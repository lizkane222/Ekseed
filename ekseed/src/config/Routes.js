import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../pages/Home";
import MyGarden from "../pages/MyGarden";
// import ConnectionList from "../pages/ConnectionList";
import ConnectionNew from "../pages/ConnectionNew";
import ConnectionShow from "../pages/ConnectionShow";
import ConnectionEdit from "../pages/ConnectionEdit";
import Login from "../pages/Login";
import Register from "../pages/Register"

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/user" component={MyGarden} /> */}
            <Route path="/login" component={Login} />{/* at login establish connection to backend */}
            <Route path="/register" component={Register} />{/* at register establish connection to backend */}

            {loggedIn && (
                <Switch>
                    <Route path="/connection/new" component={ConnectionNew} />
                    {/*  put these links in the garden page */}
                    {/* <Route path="/connection/:id/edit" component={ConnectionEdit} /> */}
                    {/* <Route path="/connection/:id" component={ConnectionShow} /> */}
                    <Route path="/user" component={MyGarden} />
                    <Route exact path="/" component={Home} />

                    {/* http://localhost:3001/api/v1/auth/register */}

                </Switch>
            )}
        </Switch>
    )
}

export default Routes;

// const Routes = (props) => {
//     const loggedIn = useRecoilValue(loggedInState);

// }