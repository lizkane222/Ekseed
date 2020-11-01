import React from "react";
import Note from './Note';

const Notes = (props) => {
    const notes = props.notes.map((note) => {
        return(
            <Note
                key="{note._id}" 
                note={note} />
        );
    });

    return (
        <ul>
            {notes}
        </ul>
    )
};

export default Notes;