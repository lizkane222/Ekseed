import React, { Component } from "react";
import Note from './Note';

class Notes extends Component {
    render(){
        let notes = this.props.notes.map((note) => {
            return(
                <Note
                    key={note._id}
                    note={note}
                    onDeleteNote={this.props.onDeleteNote}
                    onUpdateNote={this.props.onUpdateNote}
                    markReviewed={this.props.markReviewed}
                    />
            );
        });
    
        return (
            <ul>
                {notes}
            </ul>
        )
    }
};

export default Notes;