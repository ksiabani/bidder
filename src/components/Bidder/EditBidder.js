import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import BidderForm from './BidderForm';
import api from '../../api';

class EditBidder extends React.Component {
    constructor(props) {
        super(props);
        // https://stackoverflow.com/questions/42893669/how-do-i-pass-props-in-react-router-v4
        this.state = {bidder: props.location.bidder};
        this.updateBidderState = this.updateBidderState.bind(this);
        this.saveBidder = this.saveBidder.bind(this);
    }

    updateBidderState(event) {
        const field = event.target.name;
        let bidder = this.state.bidder;
        bidder[field] = event.target.value;
        return this.setState({bidder: bidder});
    }

    saveBidder(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('endpoint', this.state.endpoint);
        api.put(this.props.match.params.id, formData)
            .then(json => {
                console.log(json);
                this.props.history.push('/bidders')
            })
            .catch(error => error);
    }

    render() {
        const {bidder} = this.state;
        return (
            <div className="bidders">
                <i className="icon design_code x3 bidders__icon"/>
                <div className="bidders__breadcrumbs">
                    <Link to="/bidders">View your bidders</Link>
                    <i className="icon arrows-1_minimal-right"/>
                    <span>{bidder.name}</span>
                </div>
                <BidderForm
                    onChange={this.updateBidderState}
                    onSave={this.saveBidder}
                    bidder={bidder}
                    // errors={this.state.errors}
                    // saving={this.state.saving}
                />
            </div>
        );
    }
}

EditBidder.propTypes = {
    // bidder: PropTypes.object.isRequired,
};

export default EditBidder;
