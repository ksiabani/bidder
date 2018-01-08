import React, {PropTypes} from 'react';
import BidderForm from './BidderForm';
import api from '../../api';

export class EditBidder extends React.Component {
    constructor(props) {
        super(props);
        let bidderId = props.match.params.id;
        let bidder = getBidderById(api.all(), bidderId);
        this.state = {
            bidder: bidder,
            // errors: {},
            // saving: false
        };
        this.updateBidderState = this.updateBidderState.bind(this);
        this.saveBidder = this.saveBidder.bind(this);
    }

    updateBidderState(event) {
        const field = event.target.name;
        let bidder = Object.assign({}, this.state.bidder);
        bidder[field] = event.target.value;
        return this.setState({bidder: bidder});
    }

    // bidderFormIsValid() {
    //     let formIsValid = true;
    //     let errors = {};
    //
    //     if (this.state.bidder.name.length < 5) {
    //         errors.title = 'Title must be at least 5 characters';
    //         formIsValid = false;
    //     }
    //
    //     this.setState({errors: errors});
    //     return formIsValid;
    // }

    saveBidder(event) {
        event.preventDefault();

        // if (!this.bidderFormIsValid()) {
        //     return;
        // }

        // this.setState({saving: true});


        // Saving with fetch
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('endpoint', this.state.endpoint);

        fetch(`https://private-anon-57b3da0554-biddermanagement.apiary-mock.com/bidders/${this.props.match.params.id}`, {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.props.history.push('/bidders')
            })
            .catch(error => error);

    }

    render() {
        return (
            <BidderForm
                onChange={this.updateBidderState}
                onSave={this.saveBidder}
                bidder={this.state.bidder}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

EditBidder.propTypes = {
    // bidder: PropTypes.object.isRequired,
};


function getBidderById(bidders, id) {
    const bidder = bidders.filter(bidder => bidder.id == id);
    if (bidder.length) return bidder[0]; //since filter return an array, have to grab the first.
    return null;
}

export default EditBidder;
