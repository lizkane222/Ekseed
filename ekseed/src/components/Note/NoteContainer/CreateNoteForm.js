import { Divider } from '@material-ui/core';
import React, {Component} from 'react';

class CreateNoteForm extends Component {
    state = {
        note: ''
    }
    onInputChange= this.onInputChange.bind(this);
    onFormSubmit = this.onFormSubmit.bind(this);

    onInputChange(event){
        this.setState({
            note: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault()
        let note = this.state.note
        this.props.createNote(note)
        this.setState({
            note: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} id="taskForm">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        placeholder="write something memorable"
                        value={this.state.note}
                    />
                    <button type="submit" id="addTask" className="btn">+ note</button>
                </form>
            </div>
        )
    }
}

export default CreateNoteForm;