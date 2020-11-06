import { Divider } from '@material-ui/core';
import React, {Component} from 'react';
import { AiOutlineLike, AiOutlineDislike, AiFillStar  } from "react-icons/ai"
import { BsBookmarkFill,  } from "react-icons/bs"
import { FaRegHandshake, FaRegFlushed, FaRegGrinBeam, FaSlideshare } from "react-icons/fa"
import { TiHeartOutline, TiLockOpenOutline, TiLockOpen, TiLockClosed, TiLockClosedOutline  } from "react-icons/ti"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';

class CreateNoteForm extends Component {
    state = {
                     /* [<FaRegHandshake />,< AiFillStar/>,<AiOutlineLike />,<AiOutlineDislike />,<FaSlideshare />,<TiHeartOutline />,<FaRegFlushed/>], */
        tag : [], 
        content : "",
        bookmark : false,
        privacy : true,
        reviewed : <FaRegFlushed/>,
        // formStyle : "",
        // bodyStyle : "",
    }
    onInputChange= this.onInputChange.bind(this);
    onFormSubmit = this.onFormSubmit.bind(this);

    onInputChange(event){
        this.setState({
            // note: event.target.value
            tag: event.target.value,
            content: event.target.value,
            bookmark: event.target.value,
            privacy: event.target.value,
            reviewed: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault()
        let tag =this.state.tag
        let content =this.state.content
        let bookmark =this.state.bookmark
        let privacy =this.state.privacy
        let reviewed =this.state.reviewed
        // let note = this.state.note
        this.props.createNote(tag, content, bookmark, privacy, reviewed)
        this.setState({
            tag : [],
            content : "",
            bookmark : false,
            privacy : true,
            reviewed : <FaRegFlushed/>,
            // formStyle : "",
            // bodyStyle : "",
        })
    }

    


    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} id="taskForm">
                    
                    <input type="button" onClick={this.onInputChange}>{this.state.reviewed ? <FaRegFlushed/> : <FaRegGrinBeam/>}</input>
                    {/* <button onClick={this.toggleReviewed}>{this.state.reviewed ? <FaRegFlushed/> : <FaRegGrinBeam/>}</button> */}
                    
                    {/* <input type="button" onClick={this.handleCheck} value={<FaRegFlushed/>}/> :
                    <input type="button" onClick={this.handleCheck} value={<FaRegGrinBeam/>}/>}
                     */}    

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropDownTag" >
                            tag {this.state.tag}
                        </Dropdown.Toggle>
                            
                        <Dropdown.Menu>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-3">{<FaRegHandshake/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-1">{< AiFillStar/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-2">{<AiOutlineLike/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-3">{<AiOutlineDislike/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-3">{<FaSlideshare/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-3">{<TiHeartOutline/>}</Dropdown.Item>
                        <Dropdown.Item className="dropDownTagItem" href="#/action-3">{<FaRegFlushed/>}</Dropdown.Item>
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-3">{this.state.tag[0]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-1">{this.state.tag[1]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-2">{this.state.tag[2]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-3">{this.state.tag[3]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-3">{this.state.tag[4]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-3">{this.state.tag[5]}</Dropdown.Item> */}
                            {/* <Dropdown.Item className="dropDownTagItem" href="#/action-3">{this.state.tag[6]}</Dropdown.Item> */}
                            {/* <Dropdown.Item href="#/action-3"> else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="contentOverflow">
                        <textarea
                            className="contentContent"
                            name="content" 
                            id="note.content" 
                            cols="25" 
                            rows="3" 
                            onChange={this.onInputChange} 
                            placeholder="write something memorable">
                        </textarea>
                    </div>
                    
                    {/* {this.state.bookmark ?
                    <input type="button" onClick={this.handleBookmark}>{< BsBookmarkFill/>}</input>:
                    <input type="button" onClick={this.handleBookmark}> </input>}
                    
                    <button onClick={this.onInputChange}>{this.state.bookmark ? < BsBookmarkFill/> : " "}</button> */}

                    {/* {this.state.privacy ?
                    <input type="button" onClick={this.handlePrivacy} >{<TiLockOpenOutline/>}</input>:
                    <input type="button" onClick={this.handlePrivacy} >{<TiLockClosed />}</input>} */}

                    {/* <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        placeholder="write something memorable"
                        value={this.state.note}
                    /> */}

                    {/* bookmark */}
                        {/* < BsBookmarkFill/> */}

                    {/* unlocked/locked */}
                        {/* <TiLockOpenOutline />
                        <TiLockOpen />
                        <TiLockClosed />
                        <TiLockClosedOutline /> */}

                    <button type="submit" id="addTask" className="btn">+ note</button>
                </form>
            </div>
        )
    }
}

export default CreateNoteForm;

// FaPlus
// FaRegEdit