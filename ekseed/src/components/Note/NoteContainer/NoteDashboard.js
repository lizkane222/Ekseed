import React, {Component} from "react";

class NoteDashboard extends Component {
    render(){
        return(
            <div className="count-wrapper">
                <p>{this.props.noteCount} notes left unreviewed</p>
            </div>
        )
    }
}

export default NoteDashboard;