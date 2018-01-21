import React from 'react';
import BidderForm from './BidderForm';
import BidderHeader from './BidderHeader';
import Api from '../../api';

class EditBidder extends React.Component {
    constructor(props) {
        super(props);

        // Bidder is passed as prop to route
        // https://stackoverflow.com/questions/42893669/how-do-i-pass-props-in-react-router-v4
        this.state = {
            bidder: props.location.bidder,
            isSaving: false
        };
        this.updateBidderState = this.updateBidderState.bind(this);
        this.saveBidder = this.saveBidder.bind(this);
    }

    componentWillMount() {

        // Write some history
        if (!this.state.bidder) {
            this.props.history.push('/bidders');
        }
    }

    updateBidderState(event) {

        // Update bidder from fields
        const field = event.target.name;
        let bidder = this.state.bidder;
        bidder[field] = event.target.value;
        return this.setState({bidder: bidder});
    }

    saveBidder(event) {
        event.preventDefault();
        this.setState({isSaving: true});

        // Prepare data to pass on record
        const data = {
            name: this.state.bidder.name,
            endpoint: this.state.bidder.endpoint
        };

        // Update record
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

export default EditBidder;
