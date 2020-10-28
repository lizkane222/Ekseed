import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../pages/Home";
import MyGarden from "../pages/MyGarden";
// import UserConnectionList from "../pages/UserConnectionList";
import UserConnectionNew from "../pages/UserConnectionNew";
import UserConnectionShow from "../pages/UserConnectionShow";
import UserConnectionEdit from "../pages/UserConnectionEdit";


import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {loggedIn && (
                <Switch>
                    <Route path="/api/v1/userConnection/new" component={UserConnectionNew} />
                    <Route path="/api/v1/userConnection/:id/edit" component={UserConnectionEdit} />
                    <Route path="/api/v1/userConnection/:id" component={UserConnectionShow} />
                    <Route path="/api/v1/auth/garden" component={MyGarden} />
                    <Route path="/home" component={Home} />

                </Switch>
            )}
        </Switch>
    )
}

export default Routes;

// const Routes = (props) => {
//     const loggedIn = useRecoilValue(loggedInState);

// }