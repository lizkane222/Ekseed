import React, {Component} from "react";

class Note extends Component {
    render() {
        return (
            <li data-notes-index={this.props.note._id}>
                <span className="note-item">{this.props.note.body}</span>
            </li>
        );
    };
};

export default Note;