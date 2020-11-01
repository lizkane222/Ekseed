// import React, { Component } from "react";
// import { NavLink, Link } from "react-router-dom";

// import { useRecoilState, useRecoilValue } from "recoil";
// import ConnectionModel from "../../../models/ConnectionModel";
// import { userState } from "../../recoil/atoms";
// import "./UserGarden.css"

// class ConnectionList extends Component {
//     state = [
//         connections: [],
//     ]

//     componentDidMount(){
//         this.fetchConnections()
//     }

//     fetchConnections() {
//         ConnectionModel.all()
//             .then(json=> {
//                 this.setState({
//                     connections: json.connection
//                 })
//                 console.log(json.post)
//             })
//     }

//     render(){

//     }

//     return (
//         <div>

//             {user ? (
//             <>
//                 <h3>{user.username}</h3>
//                 {/* <div className=''>
//                     <img className="" src={user.profilePhoto} alt={user.preferredName} />
//                 </div> */}
//                 {connectionList}
//             </>
//             ) : ( 
//             <>
//                 ""
//             </>
//             )}

//         </div>
//     )
// }
// export default ConnectionList;