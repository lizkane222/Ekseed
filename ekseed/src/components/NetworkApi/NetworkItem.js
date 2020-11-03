import React, {Component} from 'react';

class NetworkItem extends Component {
    render() {
        return (
            <li data-networkitems-index={this.props.networkitem._id}>
                <span className="network-item">{this.props.networkitem.body}</span>
            </li>
        )
    }
}

export default NetworkItem;