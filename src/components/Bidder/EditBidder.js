import React, {PropTypes} from 'react';
import BidderForm from './BidderForm';
import BidderHeader from './BidderHeader';
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
                    <BidderHeader bidder={bidder} />
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
