import React, {Component} from 'react';

class NoteUpdateForm extends Component {
    state = {
        note: ''
    }
    onChange = this.onChange.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChange(event){
        this.setState({
            note: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        this.props.toggleBodyForm()
        let note = this.state.note
        console.log({body: note})
        this.props.onUpdateNote({body: note}, this.props.note._id)
    }

    componentDidMount(){
        this.setState({
            note: this.props.note.body
        })
    }

    render(){
        return(
            <div style={this.props.style} className="noteForm">
                <form className="editor" onSubmit={this.onSubmit}>
                    <input
                        autoFocus={this.props.autoFocus}
                        onChange={this.onChange}
                        type='text'
                        value={(this.state && this.state.note) || ''}
                    />

                    <button type="submit" className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        )
    }
}

export default NoteUpdateForm;