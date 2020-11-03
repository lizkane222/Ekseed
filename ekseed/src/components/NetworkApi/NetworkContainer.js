import React from "react";
import NetworkModel from "../../models/NetworkModel";
import NetworkItems from './NetworkItems';

class NetworkContainer extends Component {
    state = {
        networkitems: [],
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        NetworkModel.all().then((res) => {
            this.setState ({
                networkitems: res.data.networkitems,
            });
        });
    };

    render() {
        return(
            <div className="networkContainer">
                <NetworkItems networkitems={this.state.todos} />
            </div>
        );
    };
}

export default NetworkContainer;

