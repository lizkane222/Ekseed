import React, { Component } from "react";

import NoteModel from "../../../models/NoteModel";
import Notes from "./Notes"

class NoteContainer extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        NoteModel.all().then((res) => {
            this.setState ({
                notes: res.data.notes,
            });
        });
    };
    
    
    render() {
        // NoteModel.all().then((res) => {
        //     console.log(res);
        // });
        
        // const notes = NoteModel.all();

        return(
            <div>
                <h2>Note Container</h2>


            </div>
        )
    }
}

export default NoteContainer;