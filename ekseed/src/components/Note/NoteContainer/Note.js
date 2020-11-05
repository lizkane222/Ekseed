import React, {Component} from "react";
import { BsCollectionPlay } from "react-icons/bs";

class Note extends Component {
        state= {
            reviewed : Boolean(),
            formStyle: {display: 'none'},
            bodyStyle: {},
        }

        componentDidMount(){
            this.setState({
                reviewed: this.props.note.reviewed
            })
        }
    
        toggleBodyForm = () => {
            (this.state.formStyle.display === 'block')?
                this.setState({formStyle: {display: 'none'}, bodyStyle: {display: 'block'}})
            :
                this.setState({formStyle: {display: 'block'}, bodyStyle: {display: 'none'}})
        }

        deleteClickedNote = () => this.props.onDeletenote(this.props.note)

        handleCheck = () => {
            this.setState({
                reviewed: !this.state.reviewed
            })
            this.props.markReviewed(this.props.note._id, {reviewed: !this.state.reviewed})
        }

        render() {

        return (
            <li data-notes-index={this.props.note._id}>
                <div style={this.state.bodyStyle}>


                <input
                    type="checkbox"
                    checked={BsCollectionPlay(this.state.completed)}
                    onChange={this.handleCheck} />

                <span
                    className={this.state.reviewed ? "reviewed item" : "item"}>
                    {this.props.note.body}
                </span>
                
                <a
                className='edit'
                    onClick={this.toggleBodyForm}>
                    edit
                </a>
                
                <a
                className='remove'
                onClick={this.deleteClickedNote}>
                    delete
                </a>
            </div>
            <NoteUpdateForm
                note={this.props.note}
                style={this.state.formStyle}
                autoFocus={true}
                buttonName="save"
                onUpdateNote={this.props.onUpdate}
                toggleBodyForm={this.toggleBodyForm}
            />
                {/* <span className="note-item">{this.props.note.body}</span> */}
            </li>
        );
    };
};

export default Note;