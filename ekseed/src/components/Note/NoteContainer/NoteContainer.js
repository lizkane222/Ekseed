import React, { Component } from "react";

import NoteModel from "../../../models/NoteModel";


class NoteContainer extends Component {
    render() {
        NoteModel.all().then((res) => {
            console.log(res);
        });
        
        // const notes = NoteModel.all();

        return(
            <div>
                <h2>Note Container</h2>


            </div>
        )
    }
}

export default NoteContainer;