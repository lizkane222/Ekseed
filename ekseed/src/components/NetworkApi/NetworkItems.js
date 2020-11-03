import React from 'react';
import NetworkItem from './NetworkItem';

const NetworkItems = (props) => {
    const networkitems = props.networkitems.map((todo) => {
        return (
            <NetworkItem key= {networkitem._id} networkitem={networkitem} />
        );
    });

    return (
        <ul>
            {networkitems}
        </ul>
    )
}

export default NetworkItems;