// // https://recoiljs.org/docs/basic-tutorial/atoms
// import { getByDisplayValue } from "@testing-library/react";
// import {useState} from "react";
// import {useSetRecoilState} from "recoil";
// import { noteContainerState } from "../../../recoil/atoms";


// const NoteItemCreator = () => {
//     const [inputValue, setInputValue] = useState('')
//     const setNoteContainer = useSetRecoilState(noteContainerState)

    
//     const addItem = () => {
//         setNoteContainer((oldNoteContainer) => [
//             ...oldTodoList,
//             {
//                 id: getid(),
//                 text: inputValue,
//                 isComplete: false,
//             },
//         ]);
//         setInputValue('');
//     };


//     const onChange = ({target: {value}}) => {
//         setInputValue(value);
//     };

//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={onChange}/>
//             <button onClick={addItem}>Add</button>
//         </div>
//     )
// }

// let id = 0;
// function getId() {
//     return id++
// }

// export default NoteItemCreator;