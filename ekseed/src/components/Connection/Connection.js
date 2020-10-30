import React from 'react';

import { Link } from 'react-router-dom';

const Connection = (props) => {
    const {preferredName, firstName, lastName, network, company, dateReview, profilePhoto, notes: [{content, reviewed, bookmark, privacy}], _id } = props.connection;
    console.log(props)
    return (
        <>
            <Link to={`/user/connection/${_id}`} >
                <div>
                    <div className='image-wrapper'>
                        <img src={profilePhoto} alt={preferredName} />
                    </div>
                    <h3></h3>
                </div>
            </Link>
        </>
    )
}

export default Connection;

// note.tag, note.content, note.reviewed, note.bookmark, note.privacy