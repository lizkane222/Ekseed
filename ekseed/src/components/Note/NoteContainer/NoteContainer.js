import React, { Component, useState } from "react";
import { TodayOutlined } from "@material-ui/icons";
import {useRecoilState, useRecoilValue} from "recoil";
// import {useState} from "react-router-dom";

import NoteModel from "../../../models/NoteModel";
import Notes from "./Notes"
import CreateNoteForm from './CreateNoteForm'
import NoteDashboard from "./NoteDashboard"


import { userState } from "../../../recoil/atoms";
import useConnection from "../../../hooks/useConnection"





class NoteContainer extends Component {
    state = {
        notes: [],
        tag: [],
        content: "",
        reviewed: false,
        bookmark: false,
        privacy: true,
    }
    

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        NoteModel.all().then((res) => {
            this.setState ({
                notes: res.data.notes,
                tag: [],
                content: "",
                reviewed: false,
                bookmark: false,
                privacy: true
                // noteCount:res.data.notes.filter(note => note.reviewed === false).length
            });
        });
    };

    createNote = (note) => {
        let newNote = {
            note: [],
            tag: [],
            content: "",
            reviewed: false,
            bookmark: false,
            privacy: true,
            formStyle: {display: 'none'},
            bodyStyle: {},
        };

        NoteModel.create(this.props.connection, newNote).then((res) => {
            // let props = props.connection
            let notes = this.state.notes
            let newNotes = notes.push(res.data)
            this.setState({newNotes})
        })
    }
    
    deleteNote = (note) => {
        NoteModel.destroy(note).then((res) => {
            let notes = this.state.notes.filter((note) => {
                return note._id !== res.data._id;
            });
            this.setState({notes})
        })
    }

    updateNote = note => {
        const isUpdatedNote = noteUp => {
            return noteUp._id === note._id;
        }

        NoteModel.update(note)
            .then((res) => {
                const notes = this.state.notes;
                notes.find(isUpdatedNote).body = note.body;
                this.setState({notes: notes})
            })
    }

    markReviewed = (noteId, review) => {
        console.log(review)
        function isUpdatedNote(note) {
            return note._id === noteId;
        }
        let notes = this.state.notes;
        notes.find(isUpdatedNote).review = review
        this.setState({
            notes: notes
        })
        NoteModel.update( noteId, review).then((res) => {
            if(review.reviewed){
                this.setState({
                    noteCount: this.state.noteCount -1
                })
            } else {
                this.setState({
                    noteCount: this.state.noteCount +1
                })
            }
            return res.data.reviewed
        })
    }

    clearReviewed = () => {
        console.log("CLEAR!")

        let filteredNotes = this.state.notes
        .filter( note => {
            console.log("in filter")
            if(note.reviewed === true){
                console.log("markAsNeedsReview")
                note.reviewed = "sad"
            }
            return true
        })
        this.setState({
            notes: filteredNotes
         })
    }


    render() {
        // NoteModel.all().then((res) => {
        //     console.log(res);
        // });
        
        // const notes = NoteModel.all();

        return(
            <div >
                <div className="container">
                <h2>Note Container</h2>
                <CreateNoteForm createNote={this.createNote} />
                
                <Notes 
                    notes={this.state.notes}
                    updateNote={this.updateNote}
                    deleteNote={this.deleteNote}
                    markReviewed={this.markReviewed}
                />

                <NoteDashboard 
                    noteCount={this.state.noteCount}
                />
            </div>
                </div>
        )
    }
}

export default NoteContainer;