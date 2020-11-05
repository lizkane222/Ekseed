// import React from "react";


// import { useRecoilState } from "recoil";
// import { noteState } from "../../recoil/atoms";
// import ConnectionModel from "../../models/ConnectionModel";

// // if you have access to the global user then you can use that global user to call the back end for that user and then get taht users connections



// const NewNote = ({note}) => {
//     console.log("THIS IS FROM THE NOTE COMPONENT NOTE",note)
//     // const {tag, content, reviewed, bookmark, privacy, timestamp} = note
    
//     const [tag, setTag] = useRecoilState(noteState);
//     const [content, setContent] = useRecoilState(noteState);
//     const [reviewed, setReviewed] = useRecoilState(noteState);
//     const [bookmark, setBookmark] = useRecoilState(noteState);
//     const [privacy, setPrivacy] = useRecoilState(noteState);
//     const [timestamp, setTimestamp] = useRecoilState(noteState);

//     // function tagNote() {
//     //     const dbConnection = {
//     //         tag : ""
//     //     }
//     // }

//     function handleNoteSubmit(event) {
//         event.preventDefault(); 
    
//         ConnectionModel.create({note}).then((response)=>{
//             console.log(response);
            
//             // if (response.connection === 201) {
//             //     // props.history.push('/connection')
//             //     props.history.push('/user')
//             // } else {
//             //     setError(response.message);
//             // }
//         });
//     }



//     return(
//         <div className="singleNote">
//             <p>PER NOTE</p>
//             <form onSubmit={handleNoteSubmit}>
//                 {/* <p>content: {content}</p>
//                 <p>reviewed: {reviewed}</p>
//                 <p>bookmark: {bookmark}</p>
//                 <p>privacy: {privacy}</p>
//                 <p>timestamp: {timestamp}</p> */}
//                 <div>
//                     <label htmlFor="tag">tag {tag}</label><br/>
//                     <input 
//                     type="text" 
//                     name="tag"
//                     value={tag}
//                     onChange={(e)=> setTag(e.target.value)}
//                     /> <br/><br/>
//                 </div>
//                 <div>
//                     <label htmlFor="content">content {content}</label><br/>
//                     <input 
//                     type="text" 
//                     name="content"
//                     value={content}
//                     onChange={(e)=> setContent(e.target.value)}
//                     /> <br/><br/>
//                 </div>

//                 <div>
//                     <label htmlFor="reviewed">reviewed {reviewed}</label><br/>
//                     <input 
//                     type="checkbox" 
//                     name="reviewed"
//                     value={reviewed}
//                     onChange={(e)=> setReviewed(e.target.value)}
//                     /> <br/><br/>
//                 </div>

//                 <div>
//                     <label htmlFor="bookmark">bookmark {bookmark}</label><br/>
//                     <input 
//                     type="checkbox" 
//                     name="bookmark"
//                     value={bookmark}
//                     onChange={(e)=> setBookmark(e.target.value)}
//                     /> <br/><br/>
//                 </div>

//                 <div>
//                     <label htmlFor="privacy">privacy {privacy}</label><br/>
//                     <input 
//                     type="checkbox" 
//                     name="privacy"
//                     value={privacy}
//                     onChange={(e)=> setPrivacy(e.target.value)}
//                     /> <br/><br/>
//                 </div>

//                 <div>
//                     {timestamp = Date.now()}
//                     {setTimestamp = timestamp}
//                     {/* <label htmlFor="timestamp">timestamp {timestamp}</label><br/>
//                     <input 
//                     type="date" 
//                     name="timestamp"
//                     value={timestamp}
//                     onChange={(e)=> setTimestamp(e.target.value)}
//                     /> */}
//                      <br/><br/>
//                 </div>


//                 <input 
//                 type="submit"
//                 value="JOT"
//                 />
//             </form>
//         </div>
//     )
// }

// export default NewNote;