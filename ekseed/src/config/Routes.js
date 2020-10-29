import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../pages/Home";
import MyGarden from "../pages/MyGarden";
// import UserConnectionList from "../pages/UserConnectionList";
import UserConnectionNew from "../pages/UserConnectionNew";
import UserConnectionShow from "../pages/UserConnectionShow";
import UserConnectionEdit from "../pages/UserConnectionEdit";
import Login from "../components/SideBar/Login";

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/garden" component={MyGarden} />
            <Route path="/login" component={Login} />{/* at login establish connection to backend */}

            {loggedIn && (
                <Switch>
                    <Route path="/userconnection/new" component={UserConnectionNew} />
                    {/*  put these links in the garden page */}
                    {/* <Route path="/userconnection/:id/edit" component={UserConnectionEdit} /> */}
                    {/* <Route path="/userconnection/:id" component={UserConnectionShow} /> */}
                    <Route path="/garden" component={MyGarden} />
                    <Route path="/" component={Home} />

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