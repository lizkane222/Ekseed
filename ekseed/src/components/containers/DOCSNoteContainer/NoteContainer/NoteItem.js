// https://recoiljs.org/docs/basic-tutorial/atoms
import {useRecoilState} from "recoil";
import { noteContainerState } from "../../../../recoil/atoms";



function NoteItem({item}) {
    const [noteContainer, setNoteContainer] = useRecoilState(noteContainerState);
    const index = noteContainer.findIndex((noteItem) => noteItem === item);

    const editItemText = ({target: {value}}) => {
        const newNoteContainer = replaceItemAtIndex(noteContainer, index, {
            ...item,
            text: value,
        });
        setNoteContainer(newNoteContainer);
    }

    const toggleItemCompletion = () => {
        const newNoteContainer = replaceItemAtIndex(noteContainer, index, {
            ...item,
            isComplete: !item.isComplete,
        })

        setNoteContainer(newNoteContainer);
    };

    const deleteItem = () => {
        const newNoteContainer = removeItemAtIndex(noteContainer, index);

        setNoteContainer(newNoteContainer);
    };

    return(
        <div>
            <input type="text" value={item.text} onChange={editItemText}/>
            <input type="checkbox"
            checked={item.isComplete}
            onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );

    function replaceItemAtIndex(arr,index,newValue){
        return[...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
}

export default NoteItem;