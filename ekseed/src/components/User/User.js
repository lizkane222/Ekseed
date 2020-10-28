import React from 'react';

import Connection from '../Connection/Connection';

const User = (props) => {
    function generateConnections(user) {
        return user.map(connection => {
            return <Connection key={connection._id} connection={connection} />
        })
    }

    return (
        <div >
            {generateConnections(props.data)}
        </div>
    )
}

export default User;