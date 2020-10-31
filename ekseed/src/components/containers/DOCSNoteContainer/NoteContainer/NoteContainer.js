// // https://recoiljs.org/docs/basic-tutorial/atoms
// import React from "react";
// import { useRecoilValue } from "recoil";
// import noteContainerState from "../../../recoil/atoms"



// function NoteContainer() {
//     const noteContainer = useRecoilValue(noteContainerState);

//     return (
//         <>
//             <NoteItemCreator />

//             {noteContainer.map((noteItem) => (
//                 <NoteItem key={noteItem.id} item={noteItem} />
//             ))}


//         </>
//     )
// }

// export default NoteContainer;