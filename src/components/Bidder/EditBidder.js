import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import BidderForm from './BidderForm';
import Api from '../../api';

class EditBidder extends React.Component {
    constructor(props) {
        super(props);
        // https://stackoverflow.com/questions/42893669/how-do-i-pass-props-in-react-router-v4
        this.state = {
            bidder: props.location.bidder,
            isSaving: false
        };
        this.updateBidderState = this.updateBidderState.bind(this);
        this.saveBidder = this.saveBidder.bind(this);
    }

    componentWillMount() {
        if (!this.state.bidder) {
            this.props.history.push('/bidders');
        }
    }

    updateBidderState(event) {
        const field = event.target.name;
        let bidder = this.state.bidder;
        bidder[field] = event.target.value;
        return this.setState({bidder: bidder});
    }

    saveBidder(event) {
        event.preventDefault();
        this.setState({isSaving: true});
        const data = {
            name: this.state.bidder.name,
            endpoint: this.state.bidder.endpoint
        };
        Api.put(this.props.match.params.id, data)
            .then(json => {
                this.setState({isSaving: false});
                this.props.history.push('/bidders')
            });
    }

    render() {
        const {bidder, isSaving} = this.state;
        if (this.state.bidder) {
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
                        isSaving={isSaving}
                    />
                </div>
            );
        }
        else {
            return null;
        }
    }
}

EditBidder.propTypes = {
    // bidder: PropTypes.object.isRequired,
};

export default EditBidder;
