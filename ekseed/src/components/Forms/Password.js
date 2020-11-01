// import React from "react";
// import ReactDOM from "react-dom";
// import TextField from "@material-ui/core/TextField";
// import InputLabel from "@material-ui/core/InputLabel";
// import Typography from "@material-ui/core/Typography";
// import LockIcon from "@material-ui/icons/Lock";

// import NiceInputPassword from "react-nice-input-password";
// import "react-nice-input-password/dist/react-nice-input-password.css";

// // const levelBarCss = (level) => ({
// //   height: "8px",
// //   width: level > 0 ? `${(100 / 4) * level}%` : "100%",
// //   marginTop: 16,
// //   transition: "width 0.5s ease",
// //   backgroundColor: ["#EFEFEF", "red", "orange", "yellow", "green"][level],
// //   borderRadius: 0
// // });

// // const CustomLevelBar = (levels) => <div style={levelBarCss(levels)} />;



// class Password extends React.Component {
//     constructor(props) {
//       super(props);

    
//       this.state = {};
  
//       this.handleChange = this.handleChange.bind(this);
//     }
    

//     handleChange(props.data) {
//       this.setState({
//         [password]: data.value
//       });
//     }



//     render() {
//         const securityLevels = [
//         {
//             descriptionLabel: <Typography>1 number</Typography>,
//             validator: /.*[0-9].*/
//         },
//         {
//             descriptionLabel: <Typography>1 lowercase letter</Typography>,
//             validator: /.*[a-z].*/
//         },
//         {
//             descriptionLabel: <Typography>1 uppercase letter</Typography>,
//             validator: /.*[A-Z].*/
//         },
//         {
//             descriptionLabel: <Typography>6 of length</Typography>,
//             validator: /^.{6,}$/
//         }
//         ];

//         return (
//             <div className="wrap">
//                 <hr />

//                 <Typography variant="h5">With Material-UI</Typography>
//                 <NiceInputPassword
//                     label="Password"
//                     name="password"
//                     placeholder="password"
//                     LabelComponent={InputLabel}
//                     InputComponent={TextField}
//                     InputComponentProps={{
//                     variant: "outlined",
//                     InputProps: {
//                         endAdornment: <LockIcon />
//                     }
//                     }}
//                     value={this.state.password}
//                     showSecurityLevelBar
//                     showSecurityLevelDescription
//                     securityLevels={securityLevels}
//                     onChange={this.handleChange}
//                 />
//             </div>

//         );
//     }
// }

// // ReactDOM.render(<Password />, document.getElementById("root"));

// export default Password;

// // <div className='form-input'>
// //     <label htmlFor='password'>Password</label>
// //     <input
// //     type='password'
// //     name='password'
// //     placeholder="password"
// //     onChange={(e) => setPassword(e.target.value)}
// //     value={password}
// //     />
// // </div>