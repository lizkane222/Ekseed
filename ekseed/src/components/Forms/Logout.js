import React, {useState, useEffect} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'

import UserModel from "../../models/UserModel";
import AuthModel from "../../models/AuthModel";
import { userState } from "../../recoil/atoms";
import {useHistory, UseHistory} from "react-router-dom";


const Logout = (props) => {
    const history = useHistory()


    const [user, setUser] = useRecoilState(userState);
    const [logoutModal, setLogoutModal] = useState(userState)

    // function handleLogout(event) {
    //     event.preventDefault();

        function logout() {
            setUser(null);
            localStorage.clear();
            history.push("/")
        }
    // }


// onSubmit={(e) => setPassword(e.target.value)}


    return(
        <div>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="logoutModal" id="logoutModal">LOGOUT</button> */}


            <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="#logoutmodal" id="logoutmodal" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <h3>Are you sure you want to logout of ekseed?</h3>                    
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Not yet</button>
                            <button type="button" to={'/'} className="btn btn-secondary" data-dismiss="modal" onClick={logout()}>Not yet</button>
                            
                            {/* <input 
                            type="button"
                            value="logout"
                            className="btn btn-primary"
                            onClick={logout()}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Logout;